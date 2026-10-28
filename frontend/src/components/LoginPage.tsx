import React, { useState } from 'react';
import { UserProfile } from '../types';
import { authService } from '../services/authService';
import { isSupabaseConfigured } from '../services/supabaseClient';
import {
  Stethoscope,
  Award,
  Sparkles,
  Calendar,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
  HelpCircle,
  X,
  ExternalLink,
  Copy,
  Check,
  Scale,
  ShieldAlert
} from 'lucide-react';
import { sounds } from '../services/soundEffects';
import { AboutModal } from './AboutModal';

interface LoginPageProps {
  onLoginSuccess: (user: UserProfile) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [customEmail, setCustomEmail] = useState('');
  const [customName, setCustomName] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  // Handle standard Google login
  const handleGoogleLogin = async () => {
    sounds.playClick();
    setLoading(true);
    setErrorMsg(null);

    try {
      const result = await authService.signInWithGoogle();
      if (result.success && result.user) {
        onLoginSuccess(result.user);
      } else if (!result.success) {
        setErrorMsg(result.error || 'Google login could not be initiated.');
      }
    } catch {
      setErrorMsg('Unexpected error during Google login.');
    } finally {
      setLoading(false);
    }
  };

  // Quick 1-click demo login
  const handleQuickDemoLogin = () => {
    sounds.playClick();
    const user = authService.signInWithGoogleAccount('Nursing Candidate', 'candidate@example.com');
    onLoginSuccess(user);
  };

  // Custom Google account submission
  const handleCustomAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customEmail.trim()) {
      setErrorMsg('Please enter a valid Google account email.');
      return;
    }
    sounds.playClick();
    const user = authService.signInWithGoogleAccount(
      customName.trim() || customEmail.split('@')[0],
      customEmail.trim()
    );
    onLoginSuccess(user);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center relative overflow-hidden selection:bg-indigo-500 selection:text-white py-12 px-4 sm:px-6 lg:px-8">

      {/* Background glowing gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

      <div className="max-w-md w-full mx-auto space-y-8 relative z-10">

        {/* Brand identity header */}
        <div className="text-center space-y-3">
          <div className="inline-flex w-16 h-16 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 items-center justify-center text-white shadow-xl shadow-blue-500/25 ring-4 ring-white/10 mb-2 transform hover:scale-105 transition-transform">
            <Stethoscope className="w-8 h-8 stroke-[2.2]" />
          </div>

          <div className="space-y-1">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>RRB Nursing Superintendent CEN 05/2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
              Preparation For Nursing Exam
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto font-medium">
              30-Day Preparation Timeline & Mandatory 90% Mock Test Verification System
            </p>
          </div>
        </div>

        {/* Card Box */}
        <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">

          <div className="text-center space-y-1">
            <div className="flex items-center justify-center space-x-2">
              <h2 className="text-lg font-bold text-white font-heading">
                Sign In with Google
              </h2>
              {isSupabaseConfigured ? (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Live OAuth
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => { sounds.playClick(); setShowAboutModal(true); }}
                  className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/30 flex items-center space-x-1 transition-colors"
                >
                  <HelpCircle className="w-3 h-3" />
                  <span>About & Info</span>
                </button>
              )}
            </div>
            <p className="text-xs text-slate-400">
              Your test progress, checklist ticks, and scores will be saved specifically to this account.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-xs text-rose-300 flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Main Primary Google Login Button */}
          <div className="space-y-3">
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center space-x-3 py-3.5 px-4 bg-white hover:bg-slate-50 text-slate-800 font-extrabold rounded-2xl shadow-lg shadow-black/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm group cursor-pointer"
            >
              {/* Official Google G SVG Icon */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{loading ? 'Connecting to Google...' : 'Continue with Google'}</span>
            </button>

            {/* Quick 1-Click Candidate Profile */}
            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-slate-700"></div>
              <span className="flex-shrink mx-3 text-slate-500 text-[11px] font-bold uppercase tracking-wider">or 1-click candidate profile</span>
              <div className="flex-grow border-t border-slate-700"></div>
            </div>

            <button
              onClick={handleQuickDemoLogin}
              className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-700/60 hover:bg-slate-700 text-left border border-slate-600/60 transition-all group cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
                  NC
                </div>
                <div>
                  <span className="block text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                    Demo Candidate (Quick Access)
                  </span>
                  <span className="block text-[11px] text-slate-400 font-mono">
                    candidate@example.com
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all mr-1" />
            </button>

            {/* Switch / Custom Google account input toggle */}
            {!showCustomInput ? (
              <div className="flex items-center justify-between pt-1 text-xs">
                <button
                  type="button"
                  onClick={() => setShowCustomInput(true)}
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  Sign in with another Google account?
                </button>
                <button
                  type="button"
                  onClick={() => { sounds.playClick(); setShowAboutModal(true); }}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center space-x-1"
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>About & Legal</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleCustomAccountSubmit} className="space-y-2.5 pt-2 border-t border-slate-700">
                <input
                  type="text"
                  placeholder="Your Full Name (e.g. Dr. Ananya)"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-indigo-500"
                />
                <input
                  type="email"
                  placeholder="Your Google Email (name@gmail.com)"
                  value={customEmail}
                  onChange={(e) => setCustomEmail(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-indigo-500"
                />
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
                  >
                    Sign In with this Account
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCustomInput(false)}
                    className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-xl text-xs transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Account feature preview */}
          <div className="pt-4 border-t border-slate-700/80 space-y-2.5 text-xs text-slate-400">
            <div className="flex items-center space-x-2 text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Isolated score tracking for your specific account</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300 font-semibold">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Mandatory 90% score required to earn checklist tick</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300 font-semibold">
              <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Full 30-day timeline with 5 scheduled CBT mocks</span>
            </div>
          </div>

        </div>

        {/* Developer Credit & Legal Disclaimer Footer */}
        <div className="space-y-3 text-center">
          
          {/* Developer Portfolio Link */}
          <div className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-800/80 border border-slate-700/70 rounded-2xl text-xs text-slate-300 shadow-sm backdrop-blur-xs">
            <span>Designed & Developed by</span>
            <a
              href="https://soumya-here.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-extrabold underline underline-offset-2 inline-flex items-center gap-1 transition-colors"
            >
              Soumya
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-500">•</span>
            <a
              href="https://soumya-here.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 transition-colors text-[11px]"
            >
              Portfolio
            </a>
          </div>

          {/* Legal Disclaimer Box */}
          <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-2xl text-[11px] text-slate-400 text-left space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-400 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                Legal Disclaimer
              </span>
              <button
                type="button"
                onClick={() => { sounds.playClick(); setShowAboutModal(true); }}
                className="text-indigo-400 hover:text-indigo-300 font-semibold underline text-[10px]"
              >
                Read Full Notice
              </button>
            </div>
            <p className="leading-relaxed">
              This independent platform is created solely for educational preparation and revision. It is <strong>NOT affiliated with, endorsed by, or connected to the Railway Recruitment Boards (RRB), Ministry of Railways, or the Government of India</strong>. All past question references are utilized under the educational Fair Dealing doctrine (Sec. 52, Indian Copyright Act, 1957).
            </p>
          </div>

          <p className="text-[11px] text-slate-500">
            Preparation For Nursing Exam • RRB Nursing Superintendent CEN 05/2026 🩺
          </p>

        </div>

      </div>

      {/* About & Legal Modal */}
      <AboutModal
        isOpen={showAboutModal}
        onClose={() => setShowAboutModal(false)}
      />

    </div>
  );
};
