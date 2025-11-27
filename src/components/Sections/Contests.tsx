import React from 'react';
import { Trophy } from 'lucide-react';

export const Contests: React.FC = () => {
  const contests = [
    { name: 'Weekly Wagering', prize: '$10,000', ends: '3 days', participants: 1247 },
    { name: 'Slots Tournament', prize: '$5,000', ends: '5 days', participants: 892 },
    { name: 'High Roller Challenge', prize: '$25,000', ends: '12 days', participants: 456 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Contests</h2>
      <div className="space-y-4">
        {contests.map((contest) => (
          <div
            key={contest.name}
            className="bg-white/5 border border-[#00beef]/30 rounded-xl p-6 hover:border-[#00beef] transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-[#00beef]/20 rounded-lg">
                  <Trophy className="w-8 h-8 text-[#00beef]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{contest.name}</h3>
                  <p className="text-white/60">
                    {contest.participants} participants competing
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-white/60 text-sm">Prize Pool</p>
                  <p className="text-[#00beef] font-bold text-xl">{contest.prize}</p>
                </div>
                <div className="text-center">
                  <p className="text-white/60 text-sm">Ends In</p>
                  <p className="text-white font-bold text-xl">{contest.ends}</p>
                </div>
                <button className="px-6 py-3 bg-[#00beef] text-black font-bold rounded-lg hover:bg-[#00beef]/90 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
