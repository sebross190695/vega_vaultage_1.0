import React from 'react';
import { Coins } from 'lucide-react';

const games = [
  { id: 1, name: 'Dice Roll', rtp: '97%' },
  { id: 2, name: 'Crash', rtp: '98%' },
  { id: 3, name: 'Plinko', rtp: '96%' },
  { id: 4, name: 'Wheel', rtp: '95%' },
];

export const OriginalGames: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Original Games</h1>
        <p className="text-gray-400">Play our exclusive original games</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-gray-800 border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <Coins className="w-6 h-6 text-purple-400" />
              <h3 className="font-bold text-white">{game.name}</h3>
            </div>
            <p className="text-yellow-400 font-bold text-lg mb-4">RTP: {game.rtp}</p>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 rounded-lg transition">
              Play Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
