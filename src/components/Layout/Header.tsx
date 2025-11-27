import { LogOut, Menu, User, Wallet } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface HeaderProps {
  onMenuToggle: () => void;
  onNavigate: (section: string) => void;
}

export default function Header({ onMenuToggle, onNavigate }: HeaderProps) {
  const { user, logout } = useAuth();

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-gray-900 border-b border-purple-500/30 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
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
              <span className="text-white font-bold">${user.balance.toFixed(2)}</span>
            </div>
          )}

          <button
            onClick={() => onNavigate('profile')}
            className="flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 px-4 py-2 rounded-lg transition"
          >
            <Wallet className="w-4 h-4" />
            Profile
          </button>

          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 px-4 py-2 rounded-lg transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
