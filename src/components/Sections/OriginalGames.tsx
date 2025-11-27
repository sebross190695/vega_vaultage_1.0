import React from 'react';
import { Coins } from 'lucide-react';

export const FreeSpins: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Free Spins</h1>
        <p className="text-gray-400">Claim your daily free spins</p>
      </div>

      <div className="bg-gray-800 border border-purple-500/30 rounded-lg p-8">
        <div className="flex items-center gap-4 mb-6">
          <Gift className="w-12 h-12 text-purple-400" />
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Original Games</h1>
            <h2 className="text-2xl font-bold text-white">Daily Free Spins</h2>
            <p className="text-gray-400">Available every 24 hours</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-gray-900 rounded-lg p-6 mb-6"
            >
              <p className="text-gray-300 mb-4">You have <span className="text-yellow-400 font-bold">50 free spins</span> available today!</p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-lg transition">
                Claim Free Spins
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const games = [
  { id: 1, name: 'Dice Roll', rtp: '97%' },
  { id: 2, name: 'Crash', rtp: '98%' },
  { id: 3, name: 'Plinko', rtp: '96%' },
  { id: 4, name: 'Wheel', rtp: '95%' },
];
