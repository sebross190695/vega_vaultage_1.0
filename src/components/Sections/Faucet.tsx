import React from 'react';
import { Zap } from 'lucide-react';

export const Faucet: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Faucet</h1>
        <p className="text-gray-400">Earn free crypto every hour</p>
      </div>

      <div className="bg-gray-800 border border-purple-500/30 rounded-lg p-8">
        <div className="flex items-center gap-4 mb-6">
          <Zap className="w-12 h-12 text-yellow-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Hourly Faucet</h2>
            <p className="text-gray-400">Claim free cryptocurrency</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 mb-6">
          <p className="text-gray-300 mb-4">
            Next claim available in{' '}
            <span className="text-yellow-400 font-bold">45 minutes</span>
          </p>
          <button
            disabled
            className="w-full bg-gray-700 text-gray-400 font-bold py-3 rounded-lg cursor-not-allowed"
          >
            Claim Available Soon
          </button>
        </div>

        <div className="text-gray-400 text-sm">
          <p>• Claim once per hour</p>
          <p>• Minimum claim: 0.001 BTC</p>
          <p>• Maximum claim: 0.1 BTC</p>
        </div>
      </div>
    </div>
  );
};
