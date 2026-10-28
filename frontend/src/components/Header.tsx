import React, { useState } from 'react';
import { UserProfile } from '../types';
import {
  Stethoscope, Volume2, VolumeX, Calendar,
  RotateCcw, Award, LogOut, Menu, X, Scale
} from 'lucide-react';
import { sounds } from '../services/soundEffects';

interface HeaderProps {
  user: UserProfile | null;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenTimelineEditor: () => void;
  onOpenResetConfirm: () => void;
  onOpenAbout: () => void;
  onSignOut: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  soundEnabled,
  onToggleSound,
  onOpenTimelineEditor,
  onOpenResetConfirm,
  onOpenAbout,
  onSignOut,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    sounds.playClick();
    setMobileMenuOpen(o => !o);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">

        {/* ── Brand ── */}
        <div className="flex items-center gap-2 sm:gap-3.5 min-w-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 hover:scale-105 transition-transform duration-200">
            <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-xl lg:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 bg-clip-text text-transparent truncate max-w-[170px] xs:max-w-none">
                Nursing Exam Prep
              </h1>
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200 shrink-0">
                CEN 05/2026
              </span>
            </div>
            <p className="hidden sm:block text-[11px] sm:text-xs text-slate-500 font-medium truncate">
              RRB Nursing Superintendent · Strict 90% Verification
            </p>
          </div>
        </div>

        {/* ── Desktop controls (md+) ── */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
          {/* 90% badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-800 rounded-xl border border-amber-200 text-xs font-bold shadow-xs">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Target: 90% to Tick</span>
          </div>

          {/* User card */}
          {user && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/80">
              <div className="relative shrink-0">
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/20"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(user.name)}`;
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center shadow-xs">
                  <svg className="w-2.5 h-2.5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>
              </div>
              <div className="hidden lg:block text-left">
                <span className="block text-xs font-extrabold text-slate-800 leading-tight truncate max-w-[110px]">{user.name}</span>
                <span className="block text-[10px] text-slate-500 font-mono leading-tight truncate max-w-[110px]">{user.email}</span>
              </div>
              <button
                onClick={() => { sounds.playClick(); onSignOut(); }}
                title="Sign out"
                className="p-1 text-slate-400 hover:text-rose-600 hover:bg-white rounded-lg transition-colors ml-1"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Sound */}
          <button
            onClick={() => { onToggleSound(); sounds.playClick(); }}
            title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
            className={`p-2.5 rounded-xl border text-sm font-medium transition-all ${soundEnabled
              ? 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100'
              : 'bg-slate-100 border-slate-200 text-slate-400 hover:bg-slate-200'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Dates */}
          <button
            onClick={() => { sounds.playClick(); onOpenTimelineEditor(); }}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors border border-slate-200"
          >
            <Calendar className="w-4 h-4 text-slate-500" />
            <span className="hidden lg:inline">Dates</span>
          </button>

          {/* Reset */}
          <button
            onClick={() => { sounds.playClick(); onOpenResetConfirm(); }}
            className="flex items-center gap-1 px-2.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs font-semibold transition-colors border border-rose-200"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden lg:inline">Reset</span>
          </button>

          {/* About & Legal */}
          <button
            onClick={() => { sounds.playClick(); onOpenAbout(); }}
            title="About Platform & Legal Disclaimer"
            className="flex items-center gap-1.5 px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs font-semibold transition-colors border border-indigo-200"
          >
            <Scale className="w-4 h-4 text-indigo-600" />
            <span className="hidden lg:inline">About</span>
          </button>
        </div>

        {/* ── Mobile right: avatar + hamburger ── */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          {user && (
            <div className="relative">
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/30"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(user.name)}`;
                }}
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-white flex items-center justify-center shadow-xs">
                <svg className="w-2 h-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </div>
            </div>
          )}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown menu ── */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-lg">
          <div className="px-4 py-3 space-y-2">
            
            {/* User info */}
            {user && (
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="relative shrink-0">
                  <img src={user.avatarUrl} alt={user.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500/20"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(user.name)}`;
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-sm font-extrabold text-slate-900 truncate">{user.name}</span>
                  <span className="block text-xs text-slate-500 font-mono truncate">{user.email}</span>
                </div>
                <button
                  onClick={() => { sounds.playClick(); onSignOut(); setMobileMenuOpen(false); }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs font-bold transition-colors border border-rose-200"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}

            {/* Action row */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => { onToggleSound(); sounds.playClick(); }}
                className={`flex flex-col items-center gap-1 py-3 rounded-2xl border text-xs font-bold transition-all ${soundEnabled
                  ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                  : 'bg-slate-100 border-slate-200 text-slate-500'
                }`}
              >
                {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                <span>{soundEnabled ? 'Sound On' : 'Muted'}</span>
              </button>

              <button
                onClick={() => { sounds.playClick(); onOpenTimelineEditor(); setMobileMenuOpen(false); }}
                className="flex flex-col items-center gap-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl border border-slate-200 text-xs font-bold transition-colors"
              >
                <Calendar className="w-5 h-5 text-slate-500" />
                <span>Edit Dates</span>
              </button>

              <button
                onClick={() => { sounds.playClick(); onOpenResetConfirm(); setMobileMenuOpen(false); }}
                className="flex flex-col items-center gap-1 py-3 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-2xl border border-rose-200 text-xs font-bold transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Reset</span>
              </button>
            </div>

            {/* About & Legal button */}
            <button
              onClick={() => { sounds.playClick(); onOpenAbout(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-2xl border border-indigo-200 text-xs font-bold transition-colors"
            >
              <Scale className="w-4 h-4 text-indigo-600" />
              <span>About & Legal Disclaimer</span>
            </button>

            {/* 90% rule reminder */}
            <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 text-xs font-semibold">
              <Award className="w-4 h-4 text-amber-600 shrink-0" />
              <span>90% score required to earn each tick ✓</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
