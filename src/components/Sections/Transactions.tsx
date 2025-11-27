import React, { useState } from 'react';
import { ArrowDown, ArrowUp, RefreshCw, Wallet, History } from 'lucide-react';

export const Transactions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw' | 'exchange' | 'history'>('deposit');

  const transactions = [
    { id: 1, type: 'Deposit', amount: '+$100.00', date: '2024-11-27', status: 'Completed' },
    { id: 2, type: 'Withdrawal', amount: '-$50.00', date: '2024-11-26', status: 'Completed' },
    { id: 3, type: 'Bonus', amount: '+$25.50', date: '2024-11-25', status: 'Completed' },
    { id: 4, type: 'Game Win', amount: '+$75.25', date: '2024-11-24', status: 'Completed' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Transactions</h2>

      <div className="flex gap-2 mb-6 overflow-x-auto">
        <button
          onClick={() => setActiveTab('deposit')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            activeTab === 'deposit'
              ? 'bg-[#00beef] text-black'
              : 'bg-white/5 text-white/60 hover:bg-white/10'
          }`}
        >
          <ArrowDown className="w-4 h-4" />
          Deposit
        </button>
        <button
          onClick={() => setActiveTab('withdraw')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            activeTab === 'withdraw'
              ? 'bg-[#00beef] text-black'
              : 'bg-white/5 text-white/60 hover:bg-white/10'
          }`}
        >
          <ArrowUp className="w-4 h-4" />
          Withdraw
        </button>
        <button
          onClick={() => setActiveTab('exchange')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            activeTab === 'exchange'
              ? 'bg-[#00beef] text-black'
              : 'bg-white/5 text-white/60 hover:bg-white/10'
          }`}
        >
          <RefreshCw className="w-4 h-4" />
          Exchange
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            activeTab === 'history'
              ? 'bg-[#00beef] text-black'
              : 'bg-white/5 text-white/60 hover:bg-white/10'
          }`}
        >
          <Wallet className="w-4 h-4" />
          History
        </button>
      </div>

      <div className="max-w-2xl">
        <div className="bg-white/5 border border-[#00beef]/30 rounded-xl p-8">
          {activeTab === 'history' ? (
            <div className="space-y-3">
              <p className="text-white/60 text-center">No transactions yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-white/80 mb-2 text-sm">
                  {activeTab === 'deposit' && 'Deposit Amount'}
                  {activeTab === 'withdraw' && 'Withdraw Amount'}
                  {activeTab === 'exchange' && 'From Amount'}
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full px-4 py-3 bg-black border border-[#00beef]/30 rounded-lg text-white focus:outline-none focus:border-[#00beef]"
                />
              </div>

              {activeTab === 'exchange' && (
                <div>
                  <label className="block text-white/80 mb-2 text-sm">To Amount</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full px-4 py-3 bg-black border border-[#00beef]/30 rounded-lg text-white focus:outline-none focus:border-[#00beef]"
                  />
                </div>
              )}

              <div>
                <label className="block text-white/80 mb-2 text-sm">Wallet Address</label>
                <input
                  type="text"
                  placeholder="Enter wallet address"
                  className="w-full px-4 py-3 bg-black border border-[#00beef]/30 rounded-lg text-white focus:outline-none focus:border-[#00beef]"
                />
              </div>

              <button className="w-full py-3 bg-[#00beef] text-black font-bold rounded-lg hover:bg-[#00beef]/90 transition-colors">
                {activeTab === 'deposit' && 'Deposit'}
                {activeTab === 'withdraw' && 'Withdraw'}
                {activeTab === 'exchange' && 'Exchange'}
              </button>
            </div>
          )}
        </div>
      </div>

      {activeTab === 'history' && (
        <div className="bg-gray-800 border border-purple-500/30 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-6 py-4 text-left text-gray-400 font-semibold">Type</th>
                <th className="px-6 py-4 text-left text-gray-400 font-semibold">Amount</th>
                <th className="px-6 py-4 text-left text-gray-400 font-semibold">Date</th>
                <th className="px-6 py-4 text-left text-gray-400 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-700/50 transition">
                  <td className="px-6 py-4 text-white flex items-center gap-2">
                    <History className="w-4 h-4 text-purple-400" />
                    {tx.type}
                  </td>
                  <td className={`px-6 py-4 font-bold ${tx.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {tx.amount}
                  </td>
                  <td className="px-6 py-4 text-gray-400">{tx.date}</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
