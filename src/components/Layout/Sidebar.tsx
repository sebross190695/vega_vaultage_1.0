import React from 'react';
import { Gamepad2, Coins, Gift, Users, Tag, Settings, History, TrendingUp, Zap, Home } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'profile', label: 'Profile', icon: Home },
    { id: 'slots', label: 'Slots', icon: Gamepad2 },
    { id: 'original-games', label: 'Original Games', icon: Coins },
    { id: 'free-spins', label: 'Free Spins', icon: Gift },
    { id: 'faucet', label: 'Faucet', icon: Zap },
    { id: 'contests', label: 'Contests', icon: TrendingUp },
    { id: 'affiliation', label: 'Affiliation', icon: Users },
    { id: 'promotions', label: 'Promotions', icon: Tag },
    { id: 'transactions', label: 'Transactions', icon: History },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-gray-900 border-r border-purple-500/30 min-h-screen">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
