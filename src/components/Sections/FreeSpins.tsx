import React from 'react';
import { Trophy } from 'lucide-react';

export const FreeSpins: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">My Free Spins</h2>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white/5 border border-[#00beef]/30 rounded-xl p-8">
          <div className="text-center mb-6">
            <Trophy className="w-16 h-16 text-[#00beef] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Free Spins Balance</h3>
            <p className="text-white/60">Use your free spins on selected slot games</p>
          </div>

          <div className="bg-black/50 border border-[#00beef]/20 rounded-lg p-6 mb-6">
            <div className="text-center">
              <p className="text-white/60 text-sm mb-2">Available Free Spins</p>
              <p className="text-[#00beef] text-5xl font-bold">0</p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-white/60 text-sm text-center">
              No free spins available. Check promotions for new offers!
            </p>
            <button className="w-full py-3 bg-[#00beef] text-black font-bold rounded-lg hover:bg-[#00beef]/90 transition-colors">
              View Promotions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
