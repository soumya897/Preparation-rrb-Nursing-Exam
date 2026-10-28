import React, { useEffect } from 'react';
import {
  ShieldAlert,
  X,
  ExternalLink,
  User,
  BookOpen,
  Award,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Sparkles,
  Heart
} from 'lucide-react';
import { sounds } from '../services/soundEffects';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        sounds.playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          sounds.playClick();
          onClose();
        }
      }}
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-slate-200/90 flex items-center justify-between bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base sm:text-lg font-extrabold font-heading tracking-tight">
                  About & Legal Disclaimer
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                  CEN 05/2026
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Preparation For Nursing Exam • Educational Tracker
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          {/* Creator Profile Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-blue-50 border border-indigo-100/80 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs uppercase tracking-wider text-indigo-600 font-extrabold">Creator & Developer</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                      Portfolio Verified
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 font-heading">
                    Soumya
                  </h4>
                </div>
              </div>

              {/* Portfolio Link Button */}
              <a
                href="https://soumya-here.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
              >
                <span>Visit My Portfolio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-slate-600 text-xs sm:text-[13px]">
              Hi! I am <strong className="text-slate-800">Soumya</strong>, the creator and developer of this independent educational tracker. Explore my latest projects, web apps, and portfolio at{' '}
              <a
                href="https://soumya-here.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-bold underline underline-offset-2 inline-flex items-center gap-1"
              >
                soumya-here.vercel.app <ExternalLink className="w-3 h-3 inline" />
              </a>.
            </p>
          </div>

          {/* Platform Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Platform Highlights & Methodology</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-semibold">420+ Authentic Shift MCQs</strong>
                  <span>From March 2026 (CEN 03/2025) and April 2025 (CEN 04/2024) official question papers with English rationales and Bengali translations.</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start space-x-2.5">
                <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-semibold">Strict 90% Pass Verification</strong>
                  <span>Every day requires 90% score before unlocking the completion tick, ensuring clinical mastery.</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start space-x-2.5">
                <BookOpen className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-semibold">10 Clinical & General Subjects</strong>
                  <span>Fundamentals, Med-Surg, OBG, Pediatrics, Community Health, Pharmacology, Anatomy, Reasoning, Arithmetic & Science.</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start space-x-2.5">
                <Heart className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-semibold">5 Scheduled Full-Length CBTs</strong>
                  <span>100-question timed mocks simulating official exam conditions with -1/3 negative marking.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 text-amber-950 space-y-3">
            <div className="flex items-center space-x-2 text-amber-900">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
              <h4 className="font-extrabold text-sm sm:text-base font-heading">
                Comprehensive Legal Disclaimer & Notice
              </h4>
            </div>

            <div className="space-y-2.5 text-xs sm:text-[13px] text-amber-900/90 leading-relaxed font-normal">
              <p>
                <strong>1. Non-Affiliation with Government Bodies:</strong> This website and platform is an <strong>independent, private educational tool</strong> developed solely to assist nursing aspirants in their examination revision. It is <strong>NOT affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with</strong> the Railway Recruitment Boards (RRB), the Ministry of Railways, the Government of India, or any of their subsidiaries or affiliates.
              </p>

              <p>
                <strong>2. Official Source Notice:</strong> The official notices, examination dates, official answer keys, and authentic recruitment announcements are solely published on official Government of India portals (<a href="https://indianrailways.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-bold text-amber-950">indianrailways.gov.in</a> and respective regional RRB websites).
              </p>

              <p>
                <strong>3. Fair Dealing for Educational Purposes:</strong> Past examination question topics, memory-recalled shift questions, and syllabus structures are referenced strictly for <strong>educational review, private study, academic analysis, and candidate preparation</strong> under the doctrine of <strong>Fair Dealing</strong> pursuant to <strong>Section 52(1)(a) of the Indian Copyright Act, 1957</strong>. No claim of proprietary ownership is made over official government question patterns or trademarks.
              </p>

              <p>
                <strong>4. Medical & Educational Accuracy:</strong> All rationales, explanations, and answers are curated in good faith for competitive examination training and do not constitute formal medical or clinical directives. Candidates are advised to consult standard nursing textbooks (e.g., Brunner & Suddarth, Potter & Perry) and official notifications for authoritative information.
              </p>
            </div>
          </div>

          {/* Copyright & Trademark notice */}
          <div className="text-[11px] text-slate-500 space-y-1">
            <p>
              © {new Date().getFullYear()} Soumya (<a href="https://soumya-here.vercel.app" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">https://soumya-here.vercel.app</a>). All rights reserved.
            </p>
            <p>
              All trademarks, service marks, and trade names (including &ldquo;RRB&rdquo; and &ldquo;Nursing Superintendent&rdquo;) referenced are used solely for identification purposes to describe the examination category.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3.5 sm:px-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0">
          <span className="text-[11px] text-slate-500 font-medium text-center sm:text-left">
            Crafted for dedicated nursing exam preparation 🩺
          </span>
          <button
            type="button"
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="w-full sm:w-auto px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
};
