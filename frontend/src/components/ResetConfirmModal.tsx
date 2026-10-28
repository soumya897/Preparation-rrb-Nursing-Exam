import React, { useState } from 'react';
import { AlertTriangle, RotateCcw, X } from 'lucide-react';
import { sounds } from '../services/soundEffects';

interface ResetConfirmModalProps {
  onClose: () => void;
  onConfirmReset: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  onClose,
  onConfirmReset,
}) => {
  const [confirmText, setConfirmText] = useState('');

  const isConfirmed = confirmText.trim().toUpperCase() === 'RESET';

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl border border-slate-200">
        
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 font-heading">
              Reset All Progress?
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              This will erase all test attempts, streak data, and checklist marks.
            </p>
          </div>
        </div>

        <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-900 leading-relaxed font-medium">
          ⚠️ <strong>Caution:</strong> This action is permanent and cannot be undone. All verified checklist completions and mock test history will be cleared.
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700">
            Type <span className="text-rose-600 font-mono">RESET</span> below to confirm:
          </label>
          <input
            type="text"
            placeholder="RESET"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-mono uppercase tracking-widest text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
          />
        </div>

        <div className="flex items-center space-x-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={!isConfirmed}
            onClick={() => {
              sounds.playClick();
              onConfirmReset();
              onClose();
            }}
            className={`flex-1 py-2.5 font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-all ${
              isConfirmed
                ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-md shadow-rose-600/20'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Confirm Reset</span>
          </button>
        </div>

      </div>
    </div>
  );
};
