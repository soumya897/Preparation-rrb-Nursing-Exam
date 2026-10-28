import React from 'react';
import { StudyDay, DayProgress } from '../types';
import { History, CheckCircle2, XCircle, RotateCcw, X, Clock, Trophy } from 'lucide-react';
import { sounds } from '../services/soundEffects';

interface AttemptHistoryModalProps {
  day: StudyDay;
  progress: DayProgress | undefined;
  onClose: () => void;
  onRetake: () => void;
}

export const AttemptHistoryModal: React.FC<AttemptHistoryModalProps> = ({
  day,
  progress,
  onClose,
  onRetake,
}) => {
  const attempts = progress?.attempts || [];
  const isCompleted = !!progress?.completed;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full my-auto overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <History className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Attempt History & Results
              </div>
              <h3 className="text-base sm:text-lg font-extrabold font-heading">
                Day {day.dayNumber} — {day.displayDate}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          
          {/* Status Banner */}
          {isCompleted ? (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-sm block text-emerald-950">
                  Day Verified & Completed!
                </strong>
                <p className="mt-0.5 leading-relaxed">
                  Best Score: <strong>{Math.round(progress?.bestScore || 0)}%</strong>. 
                  Completed on {new Date(progress?.completedAt || '').toLocaleDateString()}. 
                  Retaking the test for extra practice will never revoke this earned checklist tick!
                </p>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start space-x-3">
              <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-sm block text-amber-950">
                  Checklist Gate Incomplete
                </strong>
                <p className="mt-0.5 leading-relaxed">
                  A score of at least <strong>90%</strong> is required to mark this day complete.
                </p>
              </div>
            </div>
          )}

          {/* Attempts List */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
              Recorded Test Attempts ({attempts.length})
            </h4>

            {attempts.length === 0 ? (
              <p className="text-xs text-slate-400 italic text-center py-6">
                No mock test attempts recorded yet for this day.
              </p>
            ) : (
              attempts.map((att, idx) => {
                const isPassed = att.percentage >= 90;
                const formattedDate = new Date(att.attemptedAt).toLocaleString([], {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                });
                const mins = Math.floor(att.timeTakenSeconds / 60);
                const secs = att.timeTakenSeconds % 60;

                return (
                  <div
                    key={att.id || idx}
                    className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black ${
                        isPassed ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                      }`}>
                        {isPassed ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-black text-slate-900 text-sm">{att.percentage}%</span>
                          <span className="text-slate-400">({att.score}/{att.totalQuestions} correct)</span>
                        </div>
                        <span className="text-[11px] text-slate-500">{formattedDate}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`inline-block px-2 py-0.5 rounded-md font-bold text-[10px] uppercase ${
                        isPassed ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'
                      }`}>
                        {isPassed ? 'Passed' : 'Failed'}
                      </span>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {mins}m {secs}s
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-xl border border-slate-200 text-xs transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
              onRetake();
            }}
            className="flex items-center space-x-1.5 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl text-xs sm:text-sm shadow-md shadow-indigo-600/20 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Mock Test</span>
          </button>
        </div>

      </div>
    </div>
  );
};
