import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import { AuthForm } from './components/Auth/AuthForm';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { Profile } from './components/Sections/Profile';
import { Affiliation } from './components/Sections/Affiliation';
import { Contests } from './components/Sections/Contests';
import { Faucet } from './components/Sections/Faucet';
import { FreeSpins } from './components/Sections/FreeSpins';
import { OriginalGames } from './components/Sections/OriginalGames';
import { Promotions } from './components/Sections/Promotions';
import { Settings } from './components/Sections/Settings';
import { Slots } from './components/Sections/Slots';
import { Transactions } from './components/Sections/Transactions';
import './App.css';

type SectionType = 'profile' | 'slots' | 'original-games' | 'free-spins' | 'faucet' | 'contests' | 'affiliation' | 'promotions' | 'transactions' | 'settings';

function App() {
  const { user, loading } = useAuth();
  const [activeSection, setActiveSection] = useState<SectionType>('profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <Profile />;
      case 'slots':
        return <Slots />;
      case 'original-games':
        return <OriginalGames />;
      case 'free-spins':
        return <FreeSpins />;
      case 'faucet':
        return <Faucet />;
      case 'contests':
        return <Contests />;
      case 'affiliation':
        return <Affiliation />;
      case 'promotions':
        return <Promotions />;
      case 'transactions':
        return <Transactions />;
      case 'settings':
        return <Settings />;
      default:
        return <Profile />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading VegaVault...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthForm />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black text-white">
      <Header />
      <div className="flex">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-1 p-6">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}

export default App;
