import React, { useState } from 'react';
import { Settings as Bell, Lock, Eye } from 'lucide-react';

export const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    twoFactor: false,
    darkMode: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account preferences</p>
      </div>

      <div className="bg-gray-800 border border-purple-500/30 rounded-lg p-6 space-y-6">
        <div className="flex items-center justify-between pb-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-purple-400" />
            <div>
              <h3 className="text-lg font-bold text-white">Email Notifications</h3>
              <p className="text-gray-400 text-sm">Receive updates via email</p>
            </div>
          </div>
          <button
            onClick={() => toggleSetting('emailNotifications')}
            className={`w-12 h-6 rounded-full transition ${settings.emailNotifications ? 'bg-purple-600' : 'bg-gray-700'}`}
          >
            <div className={`w-5 h-5 rounded-full bg-white transition transform ${settings.emailNotifications ? 'translate-x-6' : 'translate-x-0.5'}`} />
          </button>
        </div>

        <div className="flex items-center justify-between pb-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-purple-400" />
            <div>
              <h3 className="text-lg font-bold text-white">SMS Notifications</h3>
              <p className="text-gray-400 text-sm">Receive SMS alerts</p>
            </div>
          </div>
          <button
            onClick={() => toggleSetting('smsNotifications')}
            className={`w-12 h-6 rounded-full transition ${settings.smsNotifications ? 'bg-purple-600' : 'bg-gray-700'}`}
          >
            <div className={`w-5 h-5 rounded-full bg-white transition transform ${settings.smsNotifications ? 'translate-x-6' : 'translate-x-0.5'}`} />
          </button>
        </div>

        <div className="flex items-center justify-between pb-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <Lock className="w-6 h-6 text-purple-400" />
            <div>
              <h3 className="text-lg font-bold text-white">Two-Factor Authentication</h3>
              <p className="text-gray-400 text-sm">Enhanced security</p>
            </div>
          </div>
          <button
            onClick={() => toggleSetting('twoFactor')}
            className={`w-12 h-6 rounded-full transition ${settings.twoFactor ? 'bg-purple-600' : 'bg-gray-700'}`}
          >
            <div className={`w-5 h-5 rounded-full bg-white transition transform ${settings.twoFactor ? 'translate-x-6' : 'translate-x-0.5'}`} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Eye className="w-6 h-6 text-purple-400" />
            <div>
              <h3 className="text-lg font-bold text-white">Dark Mode</h3>
              <p className="text-gray-400 text-sm">Currently enabled</p>
            </div>
          </div>
          <button className="w-12 h-6 rounded-full bg-purple-600">
            <div className="w-5 h-5 rounded-full bg-white transition transform translate-x-6" />
          </button>
        </div>
      </div>

      <div className="bg-gray-800 border border-purple-500/30 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Danger Zone</h2>
        <button className="w-full bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30 font-bold py-3 rounded-lg transition">
          Delete Account
        </button>
      </div>
    </div>
  );
};
