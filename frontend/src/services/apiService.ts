import { StudyDay, MockAttempt } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const apiService = {
  // Check if backend is reachable
  async isBackendAvailable(): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE_URL}/days`, { method: 'GET', signal: AbortSignal.timeout(2500) });
      return res.ok;
    } catch {
      return false;
    }
  },

  // Fetch all days from backend
  async getDays(): Promise<StudyDay[] | null> {
    try {
      const res = await fetch(`${API_BASE_URL}/days`, { signal: AbortSignal.timeout(3000) });
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn("Backend unavailable, using local data", err);
    }
    return null;
  },

  // Submit test attempt to backend (which runs 90% validation)
  async submitAttempt(dayId: number, answers: Record<string, number | null>, timeTakenSeconds: number) {
    try {
      const res = await fetch(`${API_BASE_URL}/attempts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dayId,
          answers,
          timeTakenSeconds
        }),
        signal: AbortSignal.timeout(5000)
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn("Backend submit failed, falling back to client evaluation", err);
    }
    return null;
  },

  // Fetch attempt history for a specific day
  async getAttempts(dayId: number): Promise<MockAttempt[] | null> {
    try {
      const res = await fetch(`${API_BASE_URL}/attempts/day/${dayId}`, { signal: AbortSignal.timeout(3000) });
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Return null to use local storage
    }
    return null;
  },

  // Shift dates on backend
  async shiftDates(startDate: string): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE_URL}/days/shift`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ startDate }),
        signal: AbortSignal.timeout(4000)
      });
      return res.ok;
    } catch {
      return false;
    }
  },

  // Reset progress on backend
  async resetProgress(): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE_URL}/progress/reset`, {
        method: 'POST',
        signal: AbortSignal.timeout(4000)
      });
      return res.ok;
    } catch {
      return false;
    }
  }
};
