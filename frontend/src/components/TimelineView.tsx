import React, { useState } from 'react';
import { StudyDay, DayProgress } from '../types';
import { 
  Check, 
  Clock, 
  BookOpen, 
  Sparkles, 
  Search, 
  History, 
  Stethoscope, 
  Brain, 
  Target,
  FileCheck2,
  Lock
} from 'lucide-react';
import { sounds } from '../services/soundEffects';

interface TimelineViewProps {
  timeline: StudyDay[];
  progress: Record<number, DayProgress>;
  sequentialMode: boolean;
  onLaunchTest: (day: StudyDay) => void;
  onOpenRevision: (day: StudyDay) => void;
  onOpenHistory: (day: StudyDay) => void;
}

export const TimelineView: React.FC<TimelineViewProps> = ({
  timeline,
  progress,
  sequentialMode,
  onLaunchTest,
  onOpenRevision,
  onOpenHistory,
}) => {
  const [filter, setFilter] = useState<'ALL' | 'PENDING' | 'COMPLETED' | 'FULL_MOCKS'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Group by week
  const weeks = [
    { number: 1, title: "Week 1: Fundamentals — 24–30 October 2026" },
    { number: 2, title: "Week 2: Clinical Nursing — 31 October–6 November 2026" },
    { number: 3, title: "Week 3: Maternal, Child & Community — 7–13 November 2026" },
    { number: 4, title: "Week 4: Revision & CBT Mocks — 14–20 November 2026" },
    { number: 5, title: "Final Revision — 21–22 November 2026" },
  ];

  // Helper to determine day status
  const getDayStatus = (day: StudyDay, dayIndex: number): {
    status: 'locked' | 'completed' | 'failed' | 'test-required' | 'not-started';
    label: string;
    badgeClass: string;
  } => {
    const dayProgress = progress[day.id];
    
    // Check lock if sequential mode is on
    if (sequentialMode && dayIndex > 0) {
      const prevDayId = timeline[dayIndex - 1].id;
      if (!progress[prevDayId]?.completed) {
        return {
          status: 'locked',
          label: 'Locked',
          badgeClass: 'bg-slate-100 text-slate-500 border-slate-200'
        };
      }
    }

    if (dayProgress?.completed) {
      return {
        status: 'completed',
        label: `Passed (${Math.round(dayProgress.bestScore)}%)`,
        badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-300 font-bold'
      };
    }

    if (dayProgress?.attempts && dayProgress.attempts.length > 0) {
      const lastScore = dayProgress.attempts[0].percentage;
      return {
        status: 'failed',
        label: `Failed (${Math.round(lastScore)}%) — Revise!`,
        badgeClass: 'bg-rose-50 text-rose-700 border-rose-300 font-bold'
      };
    }

    if (day.isFullMock) {
      return {
        status: 'test-required',
        label: 'Full CBT Test Required',
        badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-300 font-bold'
      };
    }

    return {
      status: 'not-started',
      label: 'Test Pending',
      badgeClass: 'bg-amber-50 text-amber-700 border-amber-300 font-semibold'
    };
  };

  // Filtered timeline
  const filteredTimeline = timeline.filter(day => {
    const dayProg = progress[day.id];
    const isCompleted = !!dayProg?.completed;

    if (filter === 'PENDING' && isCompleted) return false;
    if (filter === 'COMPLETED' && !isCompleted) return false;
    if (filter === 'FULL_MOCKS' && !day.isFullMock) return false;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchTopic = day.nursingTopic.toLowerCase().includes(query) ||
                         day.generalTopic.toLowerCase().includes(query) ||
                         day.title.toLowerCase().includes(query) ||
                         day.displayDate.toLowerCase().includes(query);
      if (!matchTopic) return false;
    }

    return true;
  });

  return (
    <div className="space-y-8">
      
      {/* Search and Filters Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {(['ALL', 'PENDING', 'COMPLETED', 'FULL_MOCKS'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => {
                sounds.playClick();
                setFilter(mode);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filter === mode
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {mode === 'ALL' && 'All 30 Days'}
              {mode === 'PENDING' && 'Pending Tests'}
              {mode === 'COMPLETED' && 'Completed (Passed)'}
              {mode === 'FULL_MOCKS' && '⚡ 5 Full CBTs'}
            </button>
          ))}
        </div>

        {/* Topic search */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search nursing or general topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Timeline Grouped by Week */}
      {weeks.map(week => {
        const weekDays = filteredTimeline.filter(d => d.weekNumber === week.number);
        if (weekDays.length === 0) return null;

        return (
          <div key={week.number} className="space-y-4">
            
            {/* Week Header */}
            <div className="flex items-center space-x-3 pb-2 border-b border-slate-200">
              <span className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-extrabold font-heading">
                W{week.number}
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight font-heading">
                {week.title}
              </h3>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                {weekDays.length} {weekDays.length === 1 ? 'day' : 'days'}
              </span>
            </div>

            {/* Grid of Day Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {weekDays.map(day => {
                const dayIndex = timeline.findIndex(d => d.id === day.id);
                const { status, label, badgeClass } = getDayStatus(day, dayIndex);
                const dayProg = progress[day.id];
                const isCompleted = !!dayProg?.completed;
                const isLocked = status === 'locked';

                return (
                  <div
                    key={day.id}
                    className={`relative rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                      isCompleted
                        ? 'bg-emerald-50/20 border-emerald-200 shadow-xs'
                        : status === 'failed'
                        ? 'bg-rose-50/20 border-rose-200 shadow-xs'
                        : day.isFullMock
                        ? 'bg-gradient-to-b from-indigo-50/40 to-white border-indigo-200 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    
                    {/* Full mock ribbon */}
                    {day.isFullMock && (
                      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-1 text-white text-[11px] font-extrabold flex items-center justify-between">
                        <span className="flex items-center space-x-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>FULL CBT MOCK TEST</span>
                        </span>
                        <span>100 Qs / 90 Mins</span>
                      </div>
                    )}

                    <div className="p-4 sm:p-5 space-y-4">
                      
                      {/* Top Header: Checkbox + Date + Status */}
                      <div className="flex items-start justify-between gap-3">
                        
                        {/* Interactive Checkbox with Strict Gate */}
                        <div className="flex items-start space-x-3">
                          <button
                            type="button"
                            disabled={isLocked}
                            onClick={() => {
                              sounds.playClick();
                              if (isLocked) return;
                              if (isCompleted) {
                                // Already passed! Open attempt history / results viewer
                                onOpenHistory(day);
                              } else {
                                // Incomplete! Launch mock test automatically (No passing, no tick!)
                                onLaunchTest(day);
                              }
                            }}
                            title={
                              isCompleted
                                ? "Day verified and completed! Click to view past score & history."
                                : "Click to take mock test (90% required to complete day)"
                            }
                            className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all shrink-0 mt-0.5 ${
                              isCompleted
                                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20 ring-2 ring-emerald-500/30'
                                : status === 'failed'
                                ? 'border-2 border-rose-400 bg-rose-50 text-rose-600 hover:bg-rose-100'
                                : isLocked
                                ? 'border-2 border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed'
                                : 'border-2 border-indigo-400 bg-indigo-50/50 hover:bg-indigo-100 text-indigo-600 hover:scale-105'
                            }`}
                          >
                            {isCompleted ? (
                              <Check className="w-4 h-4 stroke-[3]" />
                            ) : isLocked ? (
                              <Lock className="w-3.5 h-3.5" />
                            ) : status === 'failed' ? (
                              <span className="text-xs font-black">!</span>
                            ) : (
                              <span className="text-[10px] font-bold">90%</span>
                            )}
                          </button>

                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-black uppercase tracking-wider text-indigo-700">
                                Day {day.dayNumber}
                              </span>
                              <span className="text-slate-300">•</span>
                              <span className="text-xs font-bold text-slate-600">
                                {day.displayDate}
                              </span>
                            </div>
                            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug mt-0.5">
                              {day.title}
                            </h4>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold border shrink-0 ${badgeClass}`}>
                          {label}
                        </span>
                      </div>

                      {/* Topics Summary */}
                      <div className="space-y-2 text-xs">
                        
                        {/* Nursing Topic */}
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                          <div className="flex items-center space-x-1.5 text-blue-700 font-extrabold">
                            <Stethoscope className="w-3.5 h-3.5 shrink-0" />
                            <span>Nursing Syllabus</span>
                          </div>
                          <p className="text-slate-700 font-medium leading-relaxed">
                            {day.nursingTopic}
                          </p>
                        </div>

                        {/* General Topic */}
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                          <div className="flex items-center space-x-1.5 text-indigo-700 font-extrabold">
                            <Brain className="w-3.5 h-3.5 shrink-0" />
                            <span>General Subjects</span>
                          </div>
                          <p className="text-slate-700 font-medium leading-relaxed">
                            {day.generalTopic}
                          </p>
                        </div>

                      </div>

                      {/* MCQ Target & Timing badge */}
                      <div className="flex items-center justify-between text-xs font-bold text-slate-500 pt-1">
                        <div className="flex items-center space-x-1.5">
                          <Target className="w-3.5 h-3.5 text-amber-500" />
                          <span>MCQ Target: {day.mcqTarget}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <Clock className="w-3.5 h-3.5 text-indigo-500" />
                          <span>{day.questionCount} Qs / {day.timeLimitMins}m</span>
                        </div>
                      </div>

                    </div>

                    {/* Card Action Footer */}
                    <div className="p-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                      
                      {/* Revision Button */}
                      <button
                        onClick={() => {
                          sounds.playClick();
                          onOpenRevision(day);
                        }}
                        className="flex-1 flex items-center justify-center space-x-1 py-2 px-3 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-xl border border-slate-200 text-xs transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Revise</span>
                      </button>

                      {/* Mock Test Button */}
                      <button
                        disabled={isLocked}
                        onClick={() => {
                          sounds.playClick();
                          if (isLocked) return;
                          onLaunchTest(day);
                        }}
                        className={`flex-1 flex items-center justify-center space-x-1 py-2 px-3 font-bold rounded-xl text-xs transition-all ${
                          isLocked
                            ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                            : isCompleted
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
                        }`}
                      >
                        <FileCheck2 className="w-3.5 h-3.5" />
                        <span>{isCompleted ? 'Retake Test' : 'Take Mock Test'}</span>
                      </button>

                      {/* Attempt History (if exists) */}
                      {dayProg?.attempts && dayProg.attempts.length > 0 && (
                        <button
                          onClick={() => {
                            sounds.playClick();
                            onOpenHistory(day);
                          }}
                          title="View previous attempt scores"
                          className="p-2 bg-white hover:bg-slate-100 text-slate-600 rounded-xl border border-slate-200 transition-colors"
                        >
                          <History className="w-3.5 h-3.5" />
                        </button>
                      )}

                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        );
      })}

    </div>
  );
};
