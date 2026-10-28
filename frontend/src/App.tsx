import { useState, useEffect } from 'react';
import { StudyDay, DayProgress, Question, MockAttempt, UserProfile } from './types';
import { storageService } from './services/storageService';
import { authService } from './services/authService';
import { sounds } from './services/soundEffects';
import { Header } from './components/Header';
import { StatsDashboard } from './components/StatsDashboard';
import { TimelineView } from './components/TimelineView';
import { MockTestModal } from './components/MockTestModal';
import { ResultModal } from './components/ResultModal';
import { RevisionModal } from './components/RevisionModal';
import { AttemptHistoryModal } from './components/AttemptHistoryModal';
import { TimelineEditorModal } from './components/TimelineEditorModal';
import { ResetConfirmModal } from './components/ResetConfirmModal';
import { LoginPage } from './components/LoginPage';
import { AboutModal } from './components/AboutModal';
import { ExternalLink, ShieldAlert, Scale, Heart } from 'lucide-react';

export function App() {
  // Authentication state
  const [user, setUser] = useState<UserProfile | null>(() => authService.getCurrentUser());
  const [authInitialized, setAuthInitialized] = useState(false);

  // Main state
  const [timeline, setTimeline] = useState<StudyDay[]>([]);
  const [progress, setProgress] = useState<Record<number, DayProgress>>({});
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [sequentialMode, setSequentialMode] = useState(false);

  // Active Modals state
  const [activeTestDay, setActiveTestDay] = useState<StudyDay | null>(null);
  const [activeRevisionDay, setActiveRevisionDay] = useState<StudyDay | null>(null);
  const [activeHistoryDay, setActiveHistoryDay] = useState<StudyDay | null>(null);
  const [lastResult, setLastResult] = useState<{
    day: StudyDay;
    attempt: MockAttempt;
    questions: Question[];
  } | null>(null);
  const [isTimelineEditorOpen, setIsTimelineEditorOpen] = useState(false);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  // Initialize Auth Listener & load user-scoped data
  useEffect(() => {
    authService.initAuthListener((currentUser) => {
      setUser(currentUser);
      setAuthInitialized(true);

      if (currentUser) {
        const loadedProgress = storageService.getProgress(currentUser.id);
        setProgress(loadedProgress);
      }
    });

    const loadedTimeline = storageService.getTimeline();
    const settings = storageService.getSettings();

    setTimeline(loadedTimeline);
    setSoundEnabled(settings.sound);
    setSequentialMode(settings.sequential);
    sounds.enabled = settings.sound;
  }, []);

  // Whenever user changes, reload their specific progress records
  useEffect(() => {
    if (user) {
      const userProgress = storageService.getProgress(user.id);
      setProgress(userProgress);
    }
  }, [user]);

  // Login handler
  const handleLoginSuccess = (loggedInUser: UserProfile) => {
    setUser(loggedInUser);
    const userProgress = storageService.getProgress(loggedInUser.id);
    setProgress(userProgress);
  };

  // Sign out handler
  const handleSignOut = async () => {
    await authService.signOut();
    setUser(null);
    setProgress({});
    setActiveTestDay(null);
    setActiveRevisionDay(null);
    setActiveHistoryDay(null);
    setLastResult(null);
  };

  // Sound toggle
  const handleToggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    sounds.enabled = nextVal;
    storageService.saveSettings({ sound: nextVal, sequential: sequentialMode });
  };

  // Submit test handler
  const handleSubmitTest = (attempt: MockAttempt, questions: Question[]) => {
    if (!activeTestDay) return;

    // Attach user information to attempt
    const userAttempt: MockAttempt = {
      ...attempt,
      userId: user?.id,
      userEmail: user?.email,
    };

    // Record attempt and update user-scoped progress
    const { progress: updatedProgress } = storageService.recordAttempt(userAttempt, user?.id);
    setProgress(updatedProgress);

    // Close test modal and open results modal
    const finishedDay = activeTestDay;
    setActiveTestDay(null);
    setLastResult({
      day: finishedDay,
      attempt: userAttempt,
      questions,
    });
  };

  // Retry from result modal
  const handleRetryFromResults = () => {
    if (!lastResult) return;
    const day = lastResult.day;
    setLastResult(null);
    setActiveTestDay(day);
  };

  // Open revision from results modal
  const handleRevisionFromResults = () => {
    if (!lastResult) return;
    const day = lastResult.day;
    setLastResult(null);
    setActiveRevisionDay(day);
  };

  // Save timeline edits
  const handleSaveTimeline = (updated: StudyDay[]) => {
    setTimeline(updated);
    storageService.saveTimeline(updated);
  };

  // Reset timeline
  const handleResetTimeline = () => {
    const def = storageService.resetTimeline();
    setTimeline(def);
  };

  // Reset all progress for this specific user
  const handleConfirmReset = () => {
    const emptyProgress = storageService.resetAllProgress(user?.id);
    setProgress(emptyProgress);
    setLastResult(null);
    setActiveTestDay(null);
    setActiveRevisionDay(null);
    setActiveHistoryDay(null);
  };

  // 1. If not authenticated, display the Google Login Screen first!
  if (!user && authInitialized) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  // Loading state during auth initialization
  if (!user && !authInitialized) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="flex items-center space-x-3 text-white">
          <div className="w-6 h-6 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <span className="font-bold text-sm">Loading Nursing Exam Challenge...</span>
        </div>
      </div>
    );
  }

  // 2. If authenticated, render full application with user name, scores and timeline
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-indigo-500 selection:text-white">

      {/* Sticky Header with User Google Account Badge & Sign Out */}
      <Header
        user={user}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenTimelineEditor={() => setIsTimelineEditorOpen(true)}
        onOpenResetConfirm={() => setIsResetConfirmOpen(true)}
        onOpenAbout={() => setIsAboutModalOpen(true)}
        onSignOut={handleSignOut}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">

        {/* KPI & Welcome Banner with personalized User Name */}
        <StatsDashboard
          user={user}
          timeline={timeline}
          progress={progress}
          onSelectDay={(day) => {
            if (progress[day.id]?.completed) {
              setActiveHistoryDay(day);
            } else {
              setActiveTestDay(day);
            }
          }}
        />

        {/* 30-Day Timeline Checklist */}
        <TimelineView
          timeline={timeline}
          progress={progress}
          sequentialMode={sequentialMode}
          onLaunchTest={(day) => setActiveTestDay(day)}
          onOpenRevision={(day) => setActiveRevisionDay(day)}
          onOpenHistory={(day) => setActiveHistoryDay(day)}
        />

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200/90 py-10 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Top row: Platform info & Creator Portfolio */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="space-y-1">
              <h3 className="font-extrabold text-slate-800 font-heading text-sm sm:text-base flex flex-wrap items-center gap-2">
                <span>Preparation For Nursing Exam</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                  RRB Nursing Superintendent CEN 05/2026
                </span>
              </h3>
              <p className="text-slate-500 text-xs">
                Dedicated 30-Day Master Preparation Platform • Strict 90% Passing Verification
              </p>
            </div>

            {/* Creator Credit with Portfolio Link */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200/80 rounded-2xl shadow-xs">
                <span className="text-slate-600 font-medium">Designed & Developed by</span>
                <a
                  href="https://soumya-here.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-extrabold text-indigo-700 hover:text-indigo-900 underline underline-offset-2 inline-flex items-center gap-1 transition-colors"
                >
                  Soumya
                  <ExternalLink className="w-3 h-3 text-indigo-600" />
                </a>
              </div>

              {/* View Portfolio Button */}
              <a
                href="https://soumya-here.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-xs inline-flex items-center gap-1.5 transition-all shadow-xs hover:scale-[1.02]"
              >
                <span>Portfolio</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              {/* About & Legal Trigger */}
              <button
                type="button"
                onClick={() => { sounds.playClick(); setIsAboutModalOpen(true); }}
                className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-xs inline-flex items-center gap-1.5 transition-all shadow-xs hover:bg-indigo-800"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>About & Legal</span>
              </button>
            </div>
          </div>

          {/* Legal Disclaimer Box */}
          <div className="p-4 sm:p-5 bg-amber-50/70 border border-amber-200/90 rounded-2xl text-amber-950 text-left space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-amber-900 font-extrabold text-xs sm:text-sm font-heading">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Clear Legal Disclaimer & Fair Dealing Notice</span>
              </div>
              <button
                type="button"
                onClick={() => { sounds.playClick(); setIsAboutModalOpen(true); }}
                className="text-indigo-700 hover:text-indigo-900 font-bold underline text-xs"
              >
                Read Full Legal Policy
              </button>
            </div>
            <p className="text-[11px] sm:text-xs text-amber-900/90 leading-relaxed font-normal">
              <strong>Non-Affiliation Notice:</strong> This website is an independent educational training portal and is <strong>NOT affiliated with, endorsed by, sponsored by, or officially associated with the Railway Recruitment Boards (RRB), Ministry of Railways, or the Government of India</strong>. All official exam notifications, authentic schedules, and answer keys are published exclusively at <a href="https://indianrailways.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-bold">indianrailways.gov.in</a>.
            </p>
            <p className="text-[11px] sm:text-xs text-amber-900/90 leading-relaxed font-normal">
              <strong>Educational Fair Dealing:</strong> All past year questions, memory recalls from March 2026 / April 2025 shift examinations, and syllabus patterns are utilized strictly for <strong>academic analysis, private study, and student training</strong> under the <strong>Fair Dealing provisions of Section 52(1)(a) of the Indian Copyright Act, 1957</strong>.
            </p>
          </div>

          {/* Bottom metadata row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-[11px] text-slate-500">
            <p>
              Connected Candidate: <span className="font-mono font-bold text-slate-700">{user?.email}</span> • Strict 90% Passing Verification Active 🩺
            </p>
            <p>
              © {new Date().getFullYear()} Soumya (<a href="https://soumya-here.vercel.app" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-bold">https://soumya-here.vercel.app</a>). All rights reserved.
            </p>
          </div>

        </div>
      </footer>

      {/* Test Taking Modal */}
      {activeTestDay && (
        <MockTestModal
          day={activeTestDay}
          onClose={() => setActiveTestDay(null)}
          onSubmitTest={handleSubmitTest}
        />
      )}

      {/* Result & Evaluation Modal */}
      {lastResult && (
        <ResultModal
          day={lastResult.day}
          attempt={lastResult.attempt}
          questions={lastResult.questions}
          onClose={() => setLastResult(null)}
          onRetry={handleRetryFromResults}
          onOpenRevision={handleRevisionFromResults}
        />
      )}

      {/* Revision Modal */}
      {activeRevisionDay && (
        <RevisionModal
          day={activeRevisionDay}
          onClose={() => setActiveRevisionDay(null)}
          onLaunchTest={() => {
            const day = activeRevisionDay;
            setActiveRevisionDay(null);
            setActiveTestDay(day);
          }}
        />
      )}

      {/* Attempt History Modal */}
      {activeHistoryDay && (
        <AttemptHistoryModal
          day={activeHistoryDay}
          progress={progress[activeHistoryDay.id]}
          onClose={() => setActiveHistoryDay(null)}
          onRetake={() => {
            const day = activeHistoryDay;
            setActiveHistoryDay(null);
            setActiveTestDay(day);
          }}
        />
      )}

      {/* Timeline Dates Editor Modal */}
      {isTimelineEditorOpen && (
        <TimelineEditorModal
          timeline={timeline}
          onClose={() => setIsTimelineEditorOpen(false)}
          onSave={handleSaveTimeline}
          onResetToDefault={handleResetTimeline}
        />
      )}

      {/* Reset Confirmation Modal */}
      {isResetConfirmOpen && (
        <ResetConfirmModal
          onClose={() => setIsResetConfirmOpen(false)}
          onConfirmReset={handleConfirmReset}
        />
      )}

      {/* About & Legal Disclaimer Modal */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />

    </div>
  );
}

export default App;
