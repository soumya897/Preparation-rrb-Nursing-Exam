import { supabase, isSupabaseConfigured } from './supabaseClient';
import { DayProgress, MockAttempt } from '../types';

// ─── DB Row shape ─────────────────────────────────────────────────────────────
interface ProgressRow {
  id: string;
  user_id: string;
  day_id: number;
  completed: boolean;
  completed_at: string | null;
  best_score: number;
  attempts: MockAttempt[];
  updated_at: string;
}

function rowToDayProgress(row: ProgressRow): DayProgress {
  return {
    userId: row.user_id,
    dayId: row.day_id,
    completed: row.completed,
    completedAt: row.completed_at,
    bestScore: row.best_score,
    attempts: Array.isArray(row.attempts) ? row.attempts : [],
  };
}

// ─── Service ─────────────────────────────────────────────────────────────────
export const supabaseProgressService = {
  isAvailable(): boolean {
    return isSupabaseConfigured;
  },

  /** Load ALL day progress rows for a user from Supabase. */
  async loadProgress(userId: string): Promise<Record<number, DayProgress>> {
    if (!isSupabaseConfigured) return {};
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId);
      if (error) { console.error('[Supabase] Load error:', error.message); return {}; }
      const result: Record<number, DayProgress> = {};
      (data as ProgressRow[]).forEach((row) => { result[row.day_id] = rowToDayProgress(row); });
      return result;
    } catch (err) {
      console.error('[Supabase] Unexpected load error:', err);
      return {};
    }
  },

  /** Upsert one day row (insert or update by user_id + day_id). */
  async saveDayProgress(userId: string, dayProgress: DayProgress): Promise<boolean> {
    if (!isSupabaseConfigured) return false;
    try {
      const { error } = await supabase.from('user_progress').upsert(
        {
          user_id: userId,
          day_id: dayProgress.dayId,
          completed: dayProgress.completed,
          completed_at: dayProgress.completedAt,
          best_score: dayProgress.bestScore,
          attempts: dayProgress.attempts,
        },
        { onConflict: 'user_id,day_id' }
      );
      if (error) { console.error('[Supabase] Save error:', error.message); return false; }
      return true;
    } catch (err) {
      console.error('[Supabase] Unexpected save error:', err);
      return false;
    }
  },

  /**
   * Record a mock attempt — merges with existing progress and saves to cloud.
   * Returns the full updated progress map and whether this attempt was a first pass.
   */
  async recordAttempt(
    attempt: MockAttempt,
    currentProgress: Record<number, DayProgress>,
    userId: string
  ): Promise<{ progress: Record<number, DayProgress>; justPassed: boolean }> {
    const dayId = attempt.dayId;
    const existing = currentProgress[dayId] || {
      userId, dayId, completed: false, completedAt: null, bestScore: 0, attempts: [],
    };

    const isPassed = attempt.percentage >= 90;
    const justPassed = isPassed && !existing.completed;

    const updatedDayProgress: DayProgress = {
      userId,
      dayId,
      completed: isPassed ? true : existing.completed,
      completedAt: isPassed ? (existing.completedAt || new Date().toISOString()) : existing.completedAt,
      bestScore: Math.max(existing.bestScore, attempt.percentage),
      attempts: [attempt, ...existing.attempts],
    };

    const updatedProgress = { ...currentProgress, [dayId]: updatedDayProgress };

    // Fire-and-forget cloud save
    this.saveDayProgress(userId, updatedDayProgress).catch((err) =>
      console.error('[Supabase] Background save failed:', err)
    );

    return { progress: updatedProgress, justPassed };
  },

  /** Delete all progress rows for a user (full reset). */
  async resetAllProgress(userId: string): Promise<boolean> {
    if (!isSupabaseConfigured) return false;
    try {
      const { error } = await supabase.from('user_progress').delete().eq('user_id', userId);
      if (error) { console.error('[Supabase] Reset error:', error.message); return false; }
      return true;
    } catch (err) {
      console.error('[Supabase] Unexpected reset error:', err);
      return false;
    }
  },

  /**
   * One-time migration: push existing localStorage progress to Supabase.
   * Skipped if cloud already has rows for this user.
   */
  async migrateFromLocalStorage(
    userId: string,
    localProgress: Record<number, DayProgress>
  ): Promise<void> {
    if (!isSupabaseConfigured) return;
    if (Object.keys(localProgress).length === 0) return;
    try {
      const { count } = await supabase
        .from('user_progress')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId);
      if (count && count > 0) {
        console.info('[Supabase] Cloud already has data, skipping localStorage migration.');
        return;
      }
      const rows = Object.values(localProgress).map((dp) => ({
        user_id: userId,
        day_id: dp.dayId,
        completed: dp.completed,
        completed_at: dp.completedAt,
        best_score: dp.bestScore,
        attempts: dp.attempts,
      }));
      const { error } = await supabase.from('user_progress').upsert(rows, { onConflict: 'user_id,day_id' });
      if (error) console.error('[Supabase] Migration failed:', error.message);
      else console.info(`[Supabase] Migrated ${rows.length} progress rows to cloud.`);
    } catch (err) {
      console.error('[Supabase] Migration error:', err);
    }
  },
};
