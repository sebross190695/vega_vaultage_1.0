import React from 'react';
import { Gamepad2 } from 'lucide-react';

export const Slots: React.FC = () => {
  const slots = [
    { id: 1, name: 'Lucky Sevens', multiplier: '3x' },
    { id: 2, name: 'Diamond Rush', multiplier: '5x' },
    { id: 3, name: 'Gold Fever', multiplier: '4x' },
    { id: 4, name: 'Crypto Spins', multiplier: '2x' },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Slots</h1>
        <p className="text-gray-400">Play our collection of slot machines</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {slots.map((slot) => (
          <div
            key={slot.id}
            className="bg-gray-800 border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <Gamepad2 className="w-6 h-6 text-purple-400" />
              <h3 className="font-bold text-white">{slot.name}</h3>
            </div>
            <p className="text-yellow-400 font-bold text-lg mb-4">Max: {slot.multiplier}</p>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 rounded-lg transition">
              Play Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
