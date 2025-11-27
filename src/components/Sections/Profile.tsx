import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Wallet } from 'lucide-react';

export const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Profile</h1>
        <p className="text-gray-400">Manage your account settings and information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 border border-purple-500/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-6 h-6 text-purple-400" />
            <h3 className="text-lg font-semibold">Username</h3>
          </div>
          <p className="text-2xl font-bold text-white">{user.username}</p>
        </div>

        <div className="bg-gray-800 border border-purple-500/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-purple-400" />
            <h3 className="text-lg font-semibold">Email</h3>
          </div>
          <p className="text-lg text-white break-all">{user.email}</p>
        </div>

        <div className="bg-gray-800 border border-purple-500/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Wallet className="w-6 h-6 text-yellow-400" />
            <h3 className="text-lg font-semibold">Balance</h3>
          </div>
          <p className="text-2xl font-bold text-yellow-400">${user.balance.toFixed(2)}</p>
        </div>
      </div>

      <div className="bg-gray-800 border border-purple-500/30 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Account Information</h2>
        <div className="space-y-3 text-gray-300">
          <p><span className="text-purple-400 font-semibold">User ID:</span> {user.id}</p>
          <p><span className="text-purple-400 font-semibold">Account Status:</span> Active</p>
          <p><span className="text-purple-400 font-semibold">Member Since:</span> {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};
