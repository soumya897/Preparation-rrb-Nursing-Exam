import React from 'react';
import { StudyDay } from '../types';
import { BookOpen, Sparkles, X, FileCheck2, Languages, CheckCircle2 } from 'lucide-react';
import { sounds } from '../services/soundEffects';

interface RevisionModalProps {
  day: StudyDay;
  onClose: () => void;
  onLaunchTest: () => void;
}

export const RevisionModal: React.FC<RevisionModalProps> = ({
  day,
  onClose,
  onLaunchTest,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full my-auto overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-blue-700 via-indigo-700 to-indigo-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-blue-200 uppercase tracking-wider">
                Day {day.dayNumber} Quick Revision Notes
              </div>
              <h3 className="text-base sm:text-lg font-extrabold font-heading">
                {day.title}
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
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          
          {/* Syllabus Topics Banner */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-2 text-xs">
            <div>
              <strong className="text-indigo-950 font-bold block">Nursing Focus:</strong>
              <p className="text-indigo-800 font-medium">{day.nursingTopic}</p>
            </div>
            <div>
              <strong className="text-indigo-950 font-bold block">General Focus:</strong>
              <p className="text-indigo-800 font-medium">{day.generalTopic}</p>
            </div>
          </div>

          {/* High-Yield Revision Points */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-slate-900 font-heading flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>High-Yield Clinical Concepts & Mnemonics</span>
            </h4>

            {day.revisionNotes && day.revisionNotes.length > 0 ? (
              day.revisionNotes.map((note, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
                  <h5 className="text-xs font-extrabold text-indigo-700 uppercase tracking-wider">
                    {note.topic}
                  </h5>

                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {note.pointsEn.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {note.bengaliTip && (
                    <div className="p-3 bg-amber-50/90 rounded-xl border border-amber-200 text-xs text-amber-950 font-bengali leading-relaxed">
                      <div className="flex items-center space-x-1.5 font-bold text-amber-900 mb-1">
                        <Languages className="w-3.5 h-3.5" />
                        <span>ক্লিনিক্যাল স্মৃতি-সূত্র (Bengali Note):</span>
                      </div>
                      {note.bengaliTip}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-500 italic">
                Revise core concepts thoroughly from your textbook notes before taking the mock test.
              </p>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-xl border border-slate-200 text-xs transition-colors"
          >
            Close Notes
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
              onLaunchTest();
            }}
            className="flex items-center space-x-1.5 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl text-xs sm:text-sm shadow-md shadow-indigo-600/20 transition-all"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>I'm Ready! Take Mock Test</span>
          </button>
        </div>

      </div>
    </div>
  );
};
