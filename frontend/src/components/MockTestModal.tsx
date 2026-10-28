import React, { useState, useEffect, useCallback } from 'react';
import { StudyDay, Question, MockAttempt } from '../types';
import { generateCuratedQuestions, shuffleQuestionOptions } from '../data/questionBank';
import { 
  Clock, 
  AlertCircle, 
  Bookmark, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Grid, 
  X, 
  CheckCircle2 
} from 'lucide-react';
import { sounds } from '../services/soundEffects';

interface MockTestModalProps {
  day: StudyDay;
  onClose: () => void;
  onSubmitTest: (attempt: MockAttempt, questions: Question[]) => void;
}

export const MockTestModal: React.FC<MockTestModalProps> = ({
  day,
  onClose,
  onSubmitTest,
}) => {
  // Generate and prepare questions
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // User answers map: questionId -> selectedOptionIndex (0..3) or null
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  
  // Marked for review set of questionIds
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set());

  // Timer states
  const totalSeconds = day.timeLimitMins * 60;
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);

  // Initialize test with shuffled options
  useEffect(() => {
    const rawQuestions = generateCuratedQuestions(day);
    const prepared = rawQuestions.map(q => shuffleQuestionOptions(q));
    setQuestions(prepared);

    // Initial empty answers
    const initAnswers: Record<string, number | null> = {};
    prepared.forEach(q => {
      initAnswers[q.id] = null;
    });
    setAnswers(initAnswers);
    setSecondsLeft(day.timeLimitMins * 60);
  }, [day]);

  // Handle final evaluation and submission
  const finalizeSubmission = useCallback(() => {
    if (questions.length === 0) return;

    let score = 0;
    questions.forEach(q => {
      const selected = answers[q.id];
      if (selected !== null && selected !== undefined && selected === q.correctIndex) {
        score++;
      }
    });

    const totalQuestions = questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= 90;
    const timeTakenSeconds = Math.max(1, totalSeconds - secondsLeft);

    const attempt: MockAttempt = {
      id: `attempt-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      dayId: day.id,
      score,
      totalQuestions,
      percentage,
      passed,
      timeTakenSeconds,
      attemptedAt: new Date().toISOString(),
      answers,
    };

    onSubmitTest(attempt, questions);
  }, [questions, answers, day.id, totalSeconds, secondsLeft, onSubmitTest]);

  // Countdown timer
  useEffect(() => {
    if (secondsLeft <= 0) {
      finalizeSubmission();
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev === 300) {
          sounds.playWarning(); // 5-minute warning
        }
        if (prev <= 1) {
          clearInterval(timer);
          finalizeSubmission();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft, finalizeSubmission]);

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs">
        <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-3">
          <div className="w-5 h-5 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin" />
          <span className="font-bold text-slate-800 text-sm">Preparing Day {day.dayNumber} Mock Test...</span>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const currentAnswer = answers[currentQ.id];
  const isCurrentMarked = markedForReview.has(currentQ.id);

  // Stats for palette & confirmation
  const answeredCount = Object.values(answers).filter(val => val !== null && val !== undefined).length;
  const unansweredCount = questions.length - answeredCount;
  const markedCount = markedForReview.size;

  // Format timer MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainderSecs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (index: number) => {
    sounds.playClick();
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: index
    }));
  };

  const handleClearResponse = () => {
    sounds.playClick();
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: null
    }));
  };

  const handleToggleMarkReview = () => {
    sounds.playClick();
    setMarkedForReview(prev => {
      const updated = new Set(prev);
      if (updated.has(currentQ.id)) {
        updated.delete(currentQ.id);
      } else {
        updated.add(currentQ.id);
      }
      return updated;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-100 overflow-hidden select-none">
      
      {/* Top Exam Navigation Bar */}
      <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between shadow-2xs shrink-0">
        
        {/* Left: Day & Test info */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowLeaveConfirm(true)}
            title="Leave test"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-black uppercase text-indigo-700">
                Day {day.dayNumber} {day.isFullMock ? 'Full CBT Mock' : 'Topic Test'}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-bold text-slate-500">
                {questions.length} Questions
              </span>
            </div>
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 truncate max-w-[200px] sm:max-w-md">
              {day.title}
            </h2>
          </div>
        </div>

        {/* Center: Live Timer */}
        <div className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl font-mono text-sm sm:text-base font-bold tracking-wider shadow-2xs border ${
          secondsLeft < 300
            ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse'
            : secondsLeft < 900
            ? 'bg-amber-50 text-amber-700 border-amber-300'
            : 'bg-slate-50 text-slate-800 border-slate-200'
        }`}>
          <Clock className="w-4 h-4 shrink-0" />
          <span>{formatTime(secondsLeft)}</span>
        </div>

        {/* Right: Question Palette Toggle & Submit */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              sounds.playClick();
              setIsPaletteOpen(!isPaletteOpen);
            }}
            className="flex items-center space-x-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-bold border border-slate-200 transition-colors"
          >
            <Grid className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">Palette</span>
            <span className="bg-indigo-600 text-white text-[10px] px-1.5 py-0.2 rounded-full">
              {answeredCount}/{questions.length}
            </span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              setShowSubmitConfirm(true);
            }}
            className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-xs sm:text-sm font-extrabold shadow-sm shadow-emerald-600/20 transition-all"
          >
            Submit Test
          </button>
        </div>
      </header>

      {/* Progress Bar under header */}
      <div className="w-full bg-slate-200 h-1.5 shrink-0">
        <div
          className="bg-indigo-600 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Main Body */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Question Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-between max-w-4xl mx-auto w-full">
          
          <div className="space-y-6">
            
            {/* Question Top Metadata */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-black">
                  Question {currentIndex + 1} of {questions.length}
                </span>
                <span className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                  {currentQ.section}
                </span>
                <span className="hidden sm:inline-block text-xs font-medium text-slate-400">
                  {currentQ.topic}
                </span>
              </div>

              <div className="flex items-center space-x-2 text-xs font-bold">
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  +1.00
                </span>
                <span className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                  -0.33
                </span>
              </div>
            </div>

            {/* Question Text */}
            <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed font-heading">
              {currentQ.question}
            </div>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((option, optIdx) => {
                const isSelected = currentAnswer === optIdx;
                const letter = String.fromCharCode(65 + optIdx); // A, B, C, D

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start space-x-3.5 group ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/70 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                    }`}>
                      {letter}
                    </span>
                    <span className={`text-sm sm:text-base pt-0.5 font-medium leading-relaxed ${
                      isSelected ? 'text-indigo-950 font-bold' : 'text-slate-800'
                    }`}>
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Action Footer Navigation */}
          <div className="pt-8 pb-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 mt-8">
            
            {/* Left controls: Clear & Mark */}
            <div className="flex items-center space-x-2">
              {currentAnswer !== null && (
                <button
                  onClick={handleClearResponse}
                  className="flex items-center space-x-1.5 px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>
              )}

              <button
                onClick={handleToggleMarkReview}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                  isCurrentMarked
                    ? 'bg-purple-100 border-purple-300 text-purple-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isCurrentMarked ? 'fill-purple-700 text-purple-700' : ''}`} />
                <span>{isCurrentMarked ? 'Marked for Review' : 'Mark for Review'}</span>
              </button>
            </div>

            {/* Right controls: Prev & Next */}
            <div className="flex items-center space-x-2">
              <button
                disabled={currentIndex === 0}
                onClick={() => {
                  sounds.playClick();
                  setCurrentIndex(prev => Math.max(0, prev - 1));
                }}
                className={`flex items-center space-x-1 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-colors ${
                  currentIndex === 0
                    ? 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-800'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {currentIndex < questions.length - 1 ? (
                <button
                  onClick={() => {
                    sounds.playClick();
                    setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1));
                  }}
                  className="flex items-center space-x-1 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    sounds.playClick();
                    setShowSubmitConfirm(true);
                  }}
                  className="flex items-center space-x-1 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors"
                >
                  <span>Review & Submit</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Question Palette Sidebar */}
        {isPaletteOpen && (
          <aside className="w-80 bg-white border-l border-slate-200 p-4 sm:p-5 flex flex-col justify-between shrink-0 shadow-lg">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="font-extrabold text-slate-900 text-sm font-heading flex items-center space-x-2">
                  <Grid className="w-4 h-4 text-indigo-600" />
                  <span>Question Palette</span>
                </h3>
                <button
                  onClick={() => setIsPaletteOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Legend status indicators */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-bold text-slate-600">
                <div className="flex items-center space-x-1.5">
                  <span className="w-3.5 h-3.5 rounded-md bg-emerald-500 shrink-0" />
                  <span>Answered ({answeredCount})</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-3.5 h-3.5 rounded-md bg-slate-200 shrink-0" />
                  <span>Unanswered ({unansweredCount})</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-3.5 h-3.5 rounded-md bg-purple-500 shrink-0" />
                  <span>Marked ({markedCount})</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-3.5 h-3.5 rounded-md border-2 border-indigo-600 shrink-0" />
                  <span>Current</span>
                </div>
              </div>

              {/* Grid of numbers */}
              <div className="max-h-[50vh] overflow-y-auto pr-1">
                <div className="grid grid-cols-5 gap-2 pt-2">
                  {questions.map((q, idx) => {
                    const ans = answers[q.id];
                    const isAns = ans !== null && ans !== undefined;
                    const isMkd = markedForReview.has(q.id);
                    const isCurr = currentIndex === idx;

                    let bgClass = "bg-slate-100 text-slate-700 hover:bg-slate-200";
                    if (isAns && isMkd) {
                      bgClass = "bg-blue-600 text-white font-bold";
                    } else if (isAns) {
                      bgClass = "bg-emerald-600 text-white font-bold";
                    } else if (isMkd) {
                      bgClass = "bg-purple-600 text-white font-bold";
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          sounds.playClick();
                          setCurrentIndex(idx);
                        }}
                        className={`h-9 rounded-xl text-xs font-bold transition-all flex items-center justify-center relative ${bgClass} ${
                          isCurr ? 'ring-2 ring-indigo-600 ring-offset-2 scale-105' : ''
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Submit inside palette */}
            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={() => {
                  sounds.playClick();
                  setShowSubmitConfirm(true);
                }}
                className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-extrabold rounded-xl shadow-xs transition-colors"
              >
                Submit Test
              </button>
            </div>

          </aside>
        )}

      </div>

      {/* Submit Confirmation Dialog */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl border border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 font-heading">
                  Confirm Submission
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Review your responses before finalizing
                </p>
              </div>
            </div>

            {/* Response Breakdown Cards */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl">
                <span className="block text-2xl font-black text-emerald-700">{answeredCount}</span>
                <span className="text-[11px] font-bold text-emerald-800">Answered</span>
              </div>
              <div className="p-3 bg-slate-100 border border-slate-200 rounded-2xl">
                <span className="block text-2xl font-black text-slate-700">{unansweredCount}</span>
                <span className="text-[11px] font-bold text-slate-600">Unanswered</span>
              </div>
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-2xl">
                <span className="block text-2xl font-black text-purple-700">{markedCount}</span>
                <span className="text-[11px] font-bold text-purple-800">Marked</span>
              </div>
            </div>

            {unansweredCount > 0 && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs flex items-start space-x-2 font-medium">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  You still have <strong>{unansweredCount} unanswered questions</strong>. The passing bar is strictly <strong>90%</strong>. Are you sure you want to proceed?
                </span>
              </div>
            )}

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-sm transition-colors"
              >
                Keep Reviewing
              </button>
              <button
                onClick={() => {
                  setShowSubmitConfirm(false);
                  finalizeSubmission();
                }}
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-sm shadow-md shadow-emerald-600/20 transition-colors"
              >
                Yes, Submit Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Leave Exam Confirmation Dialog */}
      {showLeaveConfirm && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 space-y-4 shadow-2xl border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 mx-auto flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900 font-heading">
              Leave Current Test?
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Leaving now will cancel your active attempt and answers. Your checklist progress will not be updated.
            </p>
            <div className="flex items-center space-x-2 pt-2">
              <button
                onClick={() => setShowLeaveConfirm(false)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
              >
                Stay & Continue
              </button>
              <button
                onClick={() => {
                  setShowLeaveConfirm(false);
                  onClose();
                }}
                className="flex-1 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs transition-colors"
              >
                Leave Test
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
