import React, { useState, useEffect } from 'react';
import { StudyDay, Question, MockAttempt } from '../types';
import confetti from 'canvas-confetti';
import {
  Trophy,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  Clock,
  ChevronDown,
  ChevronUp,
  X,
  Languages
} from 'lucide-react';
import { sounds } from '../services/soundEffects';

interface ResultModalProps {
  day: StudyDay;
  attempt: MockAttempt;
  questions: Question[];
  onClose: () => void;
  onRetry: () => void;
  onOpenRevision: () => void;
}

const FUNNY_FAILURE_MESSAGES = [
  "😡 First properly revise the topics! Don't try to just complete the checklist without studying. Go back, revise properly, and then take the mock test again!",
  "🚨 90% is the strict target! Go revise your weak topics and come back. No shortcuts!",
  "😤 Checkbox tick korlei preparation complete hoy na! Revise properly and try again!",
  "📚 Back to revision, Nurse Madam! Earn that tick with 90% or more!"
];

export const ResultModal: React.FC<ResultModalProps> = ({
  day,
  attempt,
  questions,
  onClose,
  onRetry,
  onOpenRevision,
}) => {
  const [filter, setFilter] = useState<'ALL' | 'CORRECT' | 'INCORRECT' | 'UNANSWERED'>('ALL');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(0);

  const isPassed = attempt.percentage >= 90;

  // Trigger celebration or playful warning on mount
  useEffect(() => {
    if (isPassed) {
      sounds.playSuccess();
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } else {
      sounds.playBuzzer();
      setSelectedMessageIndex(Math.floor(Math.random() * FUNNY_FAILURE_MESSAGES.length));
    }
  }, [isPassed]);

  // Statistics calculation
  const total = attempt.totalQuestions;
  const correct = attempt.score;
  const unanswered = questions.filter(q => attempt.answers[q.id] === null || attempt.answers[q.id] === undefined).length;
  const incorrect = total - correct - unanswered;

  // Format time taken
  const mins = Math.floor(attempt.timeTakenSeconds / 60);
  const secs = attempt.timeTakenSeconds % 60;
  const timeFormatted = `${mins}m ${secs}s`;

  // Filtered review questions
  const filteredQuestions = questions.filter(q => {
    const userAns = attempt.answers[q.id];
    const isAns = userAns !== null && userAns !== undefined;
    const isCorr = isAns && userAns === q.correctIndex;

    if (filter === 'CORRECT') return isCorr;
    if (filter === 'INCORRECT') return isAns && !isCorr;
    if (filter === 'UNANSWERED') return !isAns;
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full my-auto overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[92vh]">

        {/* Top Header */}
        <div className={`p-6 sm:p-8 text-center relative ${isPassed
          ? 'bg-gradient-to-b from-emerald-600 to-teal-700 text-white'
          : 'bg-gradient-to-b from-rose-600 via-rose-700 to-amber-700 text-white animate-shake'
          }`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge Icon */}
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center mb-3 shadow-inner">
            {isPassed ? (
              <Trophy className="w-9 h-9 text-amber-300" />
            ) : (
              <AlertTriangle className="w-9 h-9 text-amber-200" />
            )}
          </div>

          {/* Big Headline */}
          {isPassed ? (
            <div className="space-y-1">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider text-emerald-100 mb-1">
                Day {day.dayNumber} Cleared!
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
                🎉 Excellent! You earned your tick!
              </h2>
              <p className="text-sm sm:text-base font-semibold text-emerald-100">
                💙 Revision verified. Day completed successfully!
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-black/20 text-xs font-black uppercase tracking-wider text-rose-200 mb-1">
                90% Target Not Met — Checkbox Unchecked!
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight font-heading leading-tight">
                {FUNNY_FAILURE_MESSAGES[selectedMessageIndex]}
              </h2>
              <p className="text-xs sm:text-sm text-rose-100 font-medium">
                Don't worry! Genuine revision is what builds a true Nursing Superintendent. Review your mistakes below and conquer it!
              </p>
            </div>
          )}

          {/* Score Badge */}
          <div className="mt-5 inline-flex items-center space-x-3 px-5 py-2.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
            <span className="text-2xl sm:text-3xl font-black">{attempt.percentage}%</span>
            <span className="text-white/60">|</span>
            <span className="text-sm sm:text-base font-bold">
              {correct} / {total} Correct
            </span>
            <span className="text-white/60">|</span>
            <span className={`text-xs font-extrabold uppercase px-2 py-0.5 rounded-md ${isPassed ? 'bg-emerald-400 text-emerald-950' : 'bg-rose-300 text-rose-950'
              }`}>
              {isPassed ? 'PASSED (>=90%)' : 'REVISION NEEDED (<90%)'}
            </span>
          </div>

        </div>

        {/* Action Toolbar on Failure / Success */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                sounds.playClick();
                onOpenRevision();
              }}
              className="flex items-center space-x-1.5 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs sm:text-sm font-bold border border-indigo-200 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Revise Topics</span>
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                onRetry();
              }}
              className="flex items-center space-x-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-bold transition-colors shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Mock Test</span>
            </button>
          </div>

          <div className="flex items-center space-x-2 text-xs font-bold text-slate-500">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>Time: {timeFormatted}</span>
          </div>
        </div>

        {/* Question Review Section */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">

          {/* Filter Pills */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <h3 className="font-extrabold text-sm sm:text-base text-slate-900 font-heading">
              Detailed Question Review ({filteredQuestions.length})
            </h3>
            <div className="flex items-center space-x-1 text-xs">
              {(['ALL', 'CORRECT', 'INCORRECT', 'UNANSWERED'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => {
                    sounds.playClick();
                    setFilter(f);
                  }}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${filter === f
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                >
                  {f === 'ALL' && `All (${total})`}
                  {f === 'CORRECT' && `Correct (${correct})`}
                  {f === 'INCORRECT' && `Wrong (${incorrect})`}
                  {f === 'UNANSWERED' && `Skipped (${unanswered})`}
                </button>
              ))}
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-3">
            {filteredQuestions.map((q, idx) => {
              const userAns = attempt.answers[q.id];
              const isAnswered = userAns !== null && userAns !== undefined;
              const isCorrect = isAnswered && userAns === q.correctIndex;
              const isExpanded = expandedQuestions.has(q.id);

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border p-4 transition-all ${isCorrect
                    ? 'bg-emerald-50/40 border-emerald-200'
                    : isAnswered
                      ? 'bg-rose-50/40 border-rose-200'
                      : 'bg-slate-50 border-slate-200'
                    }`}
                >

                  {/* Question header row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start space-x-2.5">
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5 ${isCorrect
                        ? 'bg-emerald-600 text-white'
                        : isAnswered
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-300 text-slate-700'
                        }`}>
                        {idx + 1}
                      </span>
                      <div>
                        <div className="flex items-center space-x-2 text-[11px] font-bold text-slate-500 mb-1">
                          <span className="uppercase text-indigo-700">{q.section}</span>
                          <span>•</span>
                          <span>{q.topic}</span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          {q.question}
                        </h4>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleExpand(q.id)}
                      className="p-1 text-slate-400 hover:text-slate-600 shrink-0"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Options review */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-2 text-xs">
                    {q.options.map((opt, optIdx) => {
                      const isOptionCorrect = optIdx === q.correctIndex;
                      const isUserChoice = userAns === optIdx;

                      let style = "bg-white border-slate-200 text-slate-700";
                      if (isOptionCorrect) {
                        style = "bg-emerald-100 border-emerald-300 text-emerald-900 font-bold";
                      } else if (isUserChoice) {
                        style = "bg-rose-100 border-rose-300 text-rose-900 font-bold line-through";
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 rounded-xl border flex items-center justify-between ${style}`}
                        >
                          <span className="flex items-center space-x-2">
                            <span className="font-mono font-bold">{String.fromCharCode(65 + optIdx)}.</span>
                            <span>{opt}</span>
                          </span>
                          {isOptionCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                          {isUserChoice && !isOptionCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Rationale & Bengali High-Yield Explanation (Always visible or expandable) */}
                  <div className="mt-3 pt-3 border-t border-slate-200/80 space-y-2">
                    <div className="bg-white/80 p-3 rounded-xl border border-slate-200 text-xs text-slate-800 leading-relaxed">
                      <strong className="text-indigo-900 font-extrabold block mb-1">
                        💡 Clinical Rationale (English):
                      </strong>
                      {q.explanationEn}
                    </div>

                    {q.explanationBn && (
                      <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-200/80 text-xs text-amber-950 font-bengali leading-relaxed">
                        <div className="flex items-center space-x-1.5 font-bold text-amber-900 mb-1">
                          <Languages className="w-3.5 h-3.5" />
                          <span>স্মরণ রাখবে (Bengali High-Yield Tip):</span>
                        </div>
                        {q.explanationBn}
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500">
            Preparation For Nursing Exam • 90% Strict Gate
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors"
          >
            Back to Checklist
          </button>
        </div>

      </div>
    </div>
  );
};
