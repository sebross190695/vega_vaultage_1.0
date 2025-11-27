import React from 'react';
import { Users } from 'lucide-react';

export const Affiliation: React.FC = () => {

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Affiliation</h1>
        <p className="text-gray-400">Earn commissions by referring friends</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Referrals</h3>
          <p className="text-3xl font-bold text-purple-400">12</p>
        </div>
        <div className="bg-gray-800 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Commission Rate</h3>
          <p className="text-3xl font-bold text-green-400">15%</p>
        </div>
        <div className="bg-gray-800 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Earned</h3>
          <p className="text-3xl font-bold text-yellow-400">$342.50</p>
        </div>
      </div>

      <div className="bg-gray-800 border border-purple-500/30 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Your Referral Link</h2>
        <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-between">
          <code className="text-purple-400">https://vegavault.com/ref/demo-user-001</code>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
            Copy
          </button>
        </div>
      </div>

      <div className="bg-gray-800 border border-purple-500/30 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Users className="w-6 h-6" />
          Recent Referrals
        </h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center pb-3 border-b border-gray-700">
            <span className="text-gray-300">John Doe</span>
            <span className="text-yellow-400">+$45.20</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-gray-700">
            <span className="text-gray-300">Jane Smith</span>
            <span className="text-yellow-400">+$67.80</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Mike Johnson</span>
            <span className="text-yellow-400">+$230.50</span>
          </div>
        </div>
      </div>
    </div>
  );
};
