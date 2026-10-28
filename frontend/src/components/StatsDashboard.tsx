import React from 'react';
import { StudyDay, DayProgress, UserProfile } from '../types';
import { Flame, CheckCircle2, Trophy, BarChart3, Clock, ArrowRight } from 'lucide-react';

interface StatsDashboardProps {
  user: UserProfile | null;
  timeline: StudyDay[];
  progress: Record<number, DayProgress>;
  onSelectDay: (day: StudyDay) => void;
}

export const StatsDashboard: React.FC<StatsDashboardProps> = ({
  user,
  timeline,
  progress,
  onSelectDay,
}) => {
  const totalDays = timeline.length;
  const completedDays = Object.values(progress).filter(p => p.completed).length;
  const progressPercent = totalDays > 0 ? Math.round((completedDays / totalDays) * 100) : 0;

  const allAttempts = Object.values(progress).flatMap(p => p.attempts);
  const totalAttempts = allAttempts.length;

  const averageScore = totalAttempts > 0
    ? Math.round(allAttempts.reduce((acc, curr) => acc + curr.percentage, 0) / totalAttempts)
    : 0;

  const highestScore = totalAttempts > 0
    ? Math.round(Math.max(...allAttempts.map(a => a.percentage)))
    : 0;

  let currentStreak = 0;
  for (let i = 1; i <= totalDays; i++) {
    if (progress[i]?.completed) currentStreak++;
    else break;
  }

  const upcomingMock = timeline.find(day => day.isFullMock && !progress[day.id]?.completed);
  const activeDay = timeline.find(day => !progress[day.id]?.completed) || timeline[0];
  const displayName = user?.name ? user.name.split(' ')[0] : 'Student';

  return (
    <section className="mb-6 sm:mb-8 space-y-4 sm:space-y-6">

      {/* ── Hero Welcome Banner ── */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-indigo-900 p-5 sm:p-8 text-white shadow-xl shadow-indigo-950/10">
        {/* Decorative orbs */}
        <div className="absolute -right-12 -top-12 w-56 sm:w-64 h-56 sm:h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute right-1/4 -bottom-12 w-40 sm:w-48 h-40 sm:h-48 rounded-full bg-cyan-400/10 blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Text block */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-blue-200 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
              <span>RRB CEN 05/2026 Mission Mode</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading leading-tight">
              Let's prepare, {displayName}! 💙
            </h2>
            <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed max-w-xl">
              Every day's tick requires a mandatory{' '}
              <strong className="text-amber-300 font-bold">90% score</strong> on the mock test.
              No shortcuts — thorough revision earns the Nursing Superintendent badge!
            </p>
          </div>

          {/* Today's mission CTA */}
          {activeDay && (
            <button
              onClick={() => onSelectDay(activeDay)}
              className="group w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 px-5 py-4 bg-white text-indigo-900 hover:bg-blue-50 rounded-2xl font-bold shadow-lg shadow-indigo-950/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="text-left">
                <span className="block text-[11px] font-semibold text-indigo-600 uppercase tracking-wider">
                  Today's Mission
                </span>
                <span className="block text-sm sm:text-base font-extrabold text-slate-900">
                  Day {activeDay.dayNumber} — {activeDay.displayDate}
                </span>
              </div>
              <div className="w-9 h-9 rounded-xl bg-indigo-100 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          )}
        </div>
      </div>

      {/* ── KPI Stats Grid ── */}
      {/* Mobile: 2 cols, Tablet: 4 cols, Desktop: 5 cols */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">

        {/* Progress — spans 2 cols on mobile */}
        <div className="col-span-2 sm:col-span-2 lg:col-span-1 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">Overall Progress</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-slate-900">{completedDays}</span>
              <span className="text-sm font-semibold text-slate-400">/ {totalDays} Days</span>
            </div>
            <div className="mt-3 w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="mt-1.5 block text-xs font-bold text-emerald-600">
              {progressPercent}% Syllabus Cleared
            </span>
          </div>
        </div>

        {/* Streak */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Streak</span>
            <Flame className={`w-5 h-5 ${currentStreak > 0 ? 'text-amber-500 fill-amber-500 animate-bounce' : 'text-slate-300'}`} />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 flex items-end gap-1">
              <span>{currentStreak}</span>
              <span className="text-sm font-bold text-slate-400 pb-0.5">Days</span>
            </div>
            <p className="mt-1 text-xs text-slate-500 font-medium">
              {currentStreak >= 3 ? '🔥 Unstoppable!' : 'Keep going!'}
            </p>
          </div>
        </div>

        {/* Avg Score */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Avg Score</span>
            <BarChart3 className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              {totalAttempts > 0 ? `${averageScore}%` : '—'}
            </div>
            <p className="mt-1 text-xs text-slate-500 font-medium">
              {totalAttempts > 0 ? `${totalAttempts} tests taken` : 'No tests yet'}
            </p>
          </div>
        </div>

        {/* Best Score */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Best Score</span>
            <Trophy className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              {totalAttempts > 0 ? `${highestScore}%` : '—'}
            </div>
            <p className="mt-1 text-xs text-slate-500 font-medium">
              {highestScore >= 90 ? '🌟 90%+ Standard Met!' : 'Target: 90%'}
            </p>
          </div>
        </div>

        {/* Next CBT — spans 2 cols on mobile */}
        <div className="col-span-2 sm:col-span-4 lg:col-span-1 bg-gradient-to-br from-indigo-50 to-blue-50 p-4 sm:p-5 rounded-2xl border border-indigo-200/80 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-indigo-700 mb-2">
            <span className="text-xs font-extrabold uppercase tracking-wider">Next Full CBT</span>
            <Clock className="w-5 h-5 text-indigo-600" />
          </div>
          {upcomingMock ? (
            <div className="flex sm:flex-col lg:flex-col items-center sm:items-start gap-3 sm:gap-1">
              <div className="text-xl font-black text-indigo-950">Day {upcomingMock.dayNumber}</div>
              <div className="text-xs font-bold text-indigo-700">{upcomingMock.displayDate}</div>
              <div className="mt-1 text-[11px] font-semibold text-indigo-800/80">⏱️ 100 Qs / 90 Mins</div>
            </div>
          ) : (
            <div className="text-xs font-bold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>All 5 CBTs Done!</span>
            </div>
          )}
        </div>
      </div>

      {/* ── Golden Rule Strip ── */}
      <div className="bg-amber-50 border border-amber-200/90 rounded-2xl p-3.5 sm:p-4 flex items-start sm:items-center gap-3 text-amber-900">
        <div className="w-8 h-8 rounded-xl bg-amber-200 flex items-center justify-center shrink-0 text-base">
          😂
        </div>
        <p className="text-xs sm:text-sm font-medium leading-relaxed">
          <strong className="font-extrabold">The Golden Rule: "No Passing, No Tick!"</strong>
          {' '}— Clicking any incomplete checkbox triggers the day's mock test immediately.
          You must score at least <strong>90%</strong> to earn that verified green tick!
        </p>
      </div>

    </section>
  );
};
