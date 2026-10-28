import React, { useState } from 'react';
import { StudyDay } from '../types';
import { Calendar, Save, RotateCcw, X, Info } from 'lucide-react';
import { sounds } from '../services/soundEffects';

interface TimelineEditorModalProps {
  timeline: StudyDay[];
  onClose: () => void;
  onSave: (updated: StudyDay[]) => void;
  onResetToDefault: () => void;
}

export const TimelineEditorModal: React.FC<TimelineEditorModalProps> = ({
  timeline,
  onClose,
  onSave,
  onResetToDefault,
}) => {
  const [editedTimeline, setEditedTimeline] = useState<StudyDay[]>([...timeline]);
  const [bulkStartDate, setBulkStartDate] = useState(timeline[0]?.dateStr || "2026-10-24");

  // Handle single day date change
  const handleDateChange = (id: number, newDateStr: string) => {
    setEditedTimeline(prev =>
      prev.map(d => {
        if (d.id === id) {
          const parsed = new Date(newDateStr);
          const display = isNaN(parsed.getTime())
            ? newDateStr
            : parsed.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
          return {
            ...d,
            dateStr: newDateStr,
            displayDate: display
          };
        }
        return d;
      })
    );
  };

  // Bulk shift all 30 days starting from a new date
  const handleBulkShift = () => {
    sounds.playClick();
    const start = new Date(bulkStartDate);
    if (isNaN(start.getTime())) return;

    const shifted = editedTimeline.map((d, idx) => {
      const nextDate = new Date(start);
      nextDate.setDate(start.getDate() + idx);
      const dateStr = nextDate.toISOString().split('T')[0];
      const displayDate = nextDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      return {
        ...d,
        dateStr,
        displayDate
      };
    });

    setEditedTimeline(shifted);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full my-auto overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[88vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Timeline & Schedule Configuration
              </div>
              <h3 className="text-base sm:text-lg font-extrabold font-heading">
                Adjust Exam Dates (RRB CEN 05/2026)
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
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 text-xs flex items-start space-x-3">
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              If Railway Recruitment Board (RRB) publishes a revised examination schedule, you can adjust the start date below to automatically realign all 30 days, or customize individual day dates.
            </p>
          </div>

          {/* Quick Bulk Shift */}
          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Quick Bulk Realignment
            </h4>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex-1">
                <label className="block text-[11px] font-bold text-slate-500 mb-1">
                  New Start Date (Day 1):
                </label>
                <input
                  type="date"
                  value={bulkStartDate}
                  onChange={(e) => setBulkStartDate(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-800"
                />
              </div>
              <button
                type="button"
                onClick={handleBulkShift}
                className="self-end px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
              >
                Recalculate All 30 Days
              </button>
            </div>
          </div>

          {/* Individual Day Dates */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Individual Day Dates
            </h4>
            <div className="space-y-2 max-h-[40vh] overflow-y-auto pr-1">
              {editedTimeline.map((d) => (
                <div
                  key={d.id}
                  className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between gap-3 text-xs"
                >
                  <div className="min-w-[120px]">
                    <span className="font-extrabold text-indigo-700 block">Day {d.dayNumber}</span>
                    <span className="text-slate-500 truncate block text-[11px]">{d.title}</span>
                  </div>
                  <input
                    type="date"
                    value={d.dateStr}
                    onChange={(e) => handleDateChange(d.id, e.target.value)}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800"
                  />
                  <span className="text-slate-600 font-bold text-right min-w-[110px]">
                    {d.displayDate}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => {
              sounds.playClick();
              onResetToDefault();
              onClose();
            }}
            className="flex items-center space-x-1.5 px-3 py-2 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-bold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-xl border border-slate-200 text-xs transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                onSave(editedTimeline);
                onClose();
              }}
              className="flex items-center space-x-1.5 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl text-xs sm:text-sm shadow-md shadow-indigo-600/20 transition-all"
            >
              <Save className="w-4 h-4" />
              <span>Save Schedule</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
