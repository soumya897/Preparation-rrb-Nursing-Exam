export type DayStatus = 'locked' | 'not-started' | 'failed' | 'completed';

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatarUrl: string;
  provider?: 'google';
}

export interface HighYieldPoint {
  topic: string;
  pointsEn: string[];
  bengaliTip: string;
}

export interface StudyDay {
  id: number;
  dayNumber: number;
  dateStr: string;       // e.g. "2026-10-24"
  displayDate: string;   // e.g. "24 October 2026"
  weekNumber: number;    // 1 to 5
  weekTitle: string;     // e.g. "Week 1: Fundamentals"
  title: string;
  nursingTopic: string;
  generalTopic: string;
  mcqTarget: number;
  isFullMock: boolean;
  timeLimitMins: number; // 90 for full mocks, 25 for daily 20 MCQs
  questionCount: number; // 100 for full mocks, 20 for regular
  revisionNotes: HighYieldPoint[];
}

export type QuestionSection = 'NURSING' | 'REASONING' | 'ARITHMETIC' | 'GENERAL_SCIENCE' | 'GENERAL_AWARENESS';

export interface Question {
  id: string;
  dayId: number;
  section: QuestionSection;
  topic: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  question: string;
  options: string[];
  correctIndex: number; // 0, 1, 2, 3
  explanationEn: string;
  explanationBn: string;
}

export interface UserAnswerRecord {
  questionId: string;
  selectedOptionIndex: number | null; // null if skipped
  isCorrect: boolean;
  markedForReview?: boolean;
}

export interface MockAttempt {
  id: string;
  userId?: string;
  userEmail?: string;
  dayId: number;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  timeTakenSeconds: number;
  attemptedAt: string;
  answers: Record<string, number | null>; // questionId -> selectedIndex
}

export interface DayProgress {
  userId?: string;
  dayId: number;
  completed: boolean;
  completedAt: string | null;
  bestScore: number;
  attempts: MockAttempt[];
}

export interface AppState {
  user: UserProfile | null;
  timeline: StudyDay[];
  progress: Record<number, DayProgress>; // dayId -> DayProgress
  soundEnabled: boolean;
  sequentialMode: boolean; // if true, later days are locked until previous is passed
}
