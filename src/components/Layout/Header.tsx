import React from 'react';
import { LogOut, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-900 border-b border-purple-500/30 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">V</span>
          </div>
          <h1 className="text-2xl font-bold text-white">VegaVault</h1>
        </div>

        <div className="flex items-center gap-4">
          {user && (
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
              <User className="w-4 h-4 text-purple-400" />
              <span className="text-white font-semibold">{user.username}</span>
            </div>
          )}

          {user && (
            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-700 px-4 py-2 rounded-lg">
              <span className="text-white font-bold">${Number(user.balance).toFixed(2)}</span>
            </div>
          )}

          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 px-4 py-2 rounded-lg transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
