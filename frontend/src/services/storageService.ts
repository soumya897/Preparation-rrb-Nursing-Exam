import { StudyDay, DayProgress, MockAttempt } from '../types';
import { INITIAL_TIMELINE } from '../data/timelineData';

const STORAGE_KEYS = {
  TIMELINE: 'rrb_nursing_timeline_v1',
  PROGRESS: 'rrb_nursing_progress_v1',
  SETTINGS: 'rrb_nursing_settings_v1',
};

export const storageService = {
  // Helper for user-scoped storage key
  getProgressKey(userId?: string): string {
    return userId ? `${STORAGE_KEYS.PROGRESS}_${userId}` : STORAGE_KEYS.PROGRESS;
  },

  // Load timeline (custom or initial)
  getTimeline(): StudyDay[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.TIMELINE);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      console.warn("Could not read timeline from localStorage");
    }
    return INITIAL_TIMELINE;
  },

  // Save modified timeline
  saveTimeline(timeline: StudyDay[]) {
    try {
      localStorage.setItem(STORAGE_KEYS.TIMELINE, JSON.stringify(timeline));
    } catch (err) {
      console.error("Failed to save timeline", err);
    }
  },

  // Reset timeline back to original
  resetTimeline(): StudyDay[] {
    try {
      localStorage.removeItem(STORAGE_KEYS.TIMELINE);
    } catch {
      // Ignore
    }
    return INITIAL_TIMELINE;
  },

  // Load progress for a specific user account
  getProgress(userId?: string): Record<number, DayProgress> {
    const key = this.getProgressKey(userId);
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        return JSON.parse(stored);
      }
      // If user-specific key is empty but global key exists, migrate or initialize
      if (userId) {
        const globalStored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
        if (globalStored) {
          return JSON.parse(globalStored);
        }
      }
    } catch {
      console.warn("Could not read progress from localStorage");
    }
    return {};
  },

  // Record an attempt and calculate pass/fail status with 90% gate
  recordAttempt(attempt: MockAttempt, userId?: string): { progress: Record<number, DayProgress>; justPassed: boolean } {
    const allProgress = this.getProgress(userId);
    const dayId = attempt.dayId;
    const existing = allProgress[dayId] || {
      userId,
      dayId,
      completed: false,
      completedAt: null,
      bestScore: 0,
      attempts: []
    };

    const isPassed = attempt.percentage >= 90;
    const justPassed = isPassed && !existing.completed;

    // Preserving logic:
    // 1. If passed (>=90%), set completed = true
    // 2. If failed (<90%), keep existing.completed unchanged (if already completed earlier, stays completed!)
    const updatedCompleted = isPassed ? true : existing.completed;
    const updatedCompletedAt = isPassed 
      ? (existing.completedAt || new Date().toISOString()) 
      : existing.completedAt;

    const updatedBestScore = Math.max(existing.bestScore, attempt.percentage);

    const updatedDayProgress: DayProgress = {
      userId,
      dayId,
      completed: updatedCompleted,
      completedAt: updatedCompletedAt,
      bestScore: updatedBestScore,
      attempts: [attempt, ...existing.attempts]
    };

    allProgress[dayId] = updatedDayProgress;

    const key = this.getProgressKey(userId);
    try {
      localStorage.setItem(key, JSON.stringify(allProgress));
    } catch (err) {
      console.error("Failed to save progress", err);
    }

    return { progress: allProgress, justPassed };
  },

  // Clear all progress for this user (with confirmation)
  resetAllProgress(userId?: string): Record<number, DayProgress> {
    const key = this.getProgressKey(userId);
    try {
      localStorage.removeItem(key);
    } catch {
      // Ignore
    }
    return {};
  },

  // Settings
  getSettings(): { sound: boolean; sequential: boolean } {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Default
    }
    return { sound: true, sequential: false };
  },

  saveSettings(settings: { sound: boolean; sequential: boolean }) {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch {
      // Ignore
    }
  }
};
