import React from 'react';
import { Tag } from 'lucide-react';

export const Promotions: React.FC = () => {
  const promotions = [
    { id: 1, title: 'Welcome Bonus', description: '100% up to $500', active: true },
    { id: 2, title: 'Reload Bonus', description: '50% up to $250', active: true },
    { id: 3, title: 'VIP Cashback', description: 'Up to 10% cashback', active: false },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Promotions</h1>
        <p className="text-gray-400">Check out our latest offers</p>
      </div>

      <div className="space-y-4">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className="bg-gray-800 border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 transition"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <Tag className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="text-lg font-bold text-white">{promo.title}</h3>
                  <p className="text-gray-400">{promo.description}</p>
                </div>
              </div>
              {promo.active && (
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Active
                </span>
              )}
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 rounded-lg transition">
              Claim Offer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
