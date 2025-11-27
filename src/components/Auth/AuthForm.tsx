import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export const AuthForm: React.FC = () => {
  const { loginDemo, loading, error } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDemoLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await loginDemo();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 border border-purple-500/30 rounded-lg p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">VegaVault</h1>
          <p className="text-purple-400 text-center mb-8">Crypto Casino Platform</p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleDemoLogin} className="space-y-6">
            <button
              type="submit"
              disabled={loading || isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition duration-200"
            >
              {loading || isSubmitting ? 'Loading...' : 'Login with Demo Account'}
            </button>
          </form>

          <p className="text-gray-400 text-sm text-center mt-6">
            Test the app with our demo credentials
          </p>
        </div>
      </div>
    </div>
  );
};
