import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

type FormType = 'login' | 'signup';

export const AuthForm: React.FC = () => {
  const { login, signup, loginDemo, loading, error } = useAuth();
  const [formType, setFormType] = useState<FormType>('login');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (formType === 'signup') {
      if (!formData.username.trim()) {
        setFormError('Username is required');
        return;
      }
      if (!formData.email.trim()) {
        setFormError('Email is required');
        return;
      }
      if (!formData.password) {
        setFormError('Password is required');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setFormError('Passwords do not match');
        return;
      }

      try {
        await signup(formData.username, formData.email, formData.password);
      } catch {
        // Error handled by context
      }
    } else {
      if (!formData.email.trim()) {
        setFormError('Email is required');
        return;
      }
      if (!formData.password) {
        setFormError('Password is required');
        return;
      }

      try {
        await login(formData.email, formData.password);
      } catch {
        // Error handled by context
      }
    }
  };

  const handleDemoLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginDemo();
  };

  const toggleFormType = () => {
    setFormType(formType === 'login' ? 'signup' : 'login');
    setFormData({ username: '', email: '', password: '', confirmPassword: '' });
    setFormError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 border border-purple-500/30 rounded-lg p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">VegaVault</h1>
          <p className="text-purple-400 text-center mb-8">Crypto Casino Platform</p>

          {(error || formError) && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded mb-6">
              {formError || error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {formType === 'signup' && (
              <div>
                <label className="block text-gray-300 mb-2 text-sm">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  placeholder="Enter your username"
                />
              </div>
            )}

            <div>
              <label className="block text-gray-300 mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 text-sm">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500"
                placeholder="Enter your password"
              />
            </div>

            {formType === 'signup' && (
              <div>
                <label className="block text-gray-300 mb-2 text-sm">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  placeholder="Re-enter your password"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition duration-200"
            >
              {loading ? 'Loading...' : formType === 'signup' ? 'Sign Up' : 'Login'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={toggleFormType}
              className="text-purple-400 hover:text-purple-300 text-sm"
            >
              {formType === 'signup'
                ? 'Already have an account? Login'
                : "Don't have an account? Sign Up"}
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <button
              onClick={handleDemoLogin}
              disabled={loading}
              className="w-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition duration-200"
            >
              {loading ? 'Loading...' : 'Try Demo Account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
