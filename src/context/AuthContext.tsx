import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface User {
  id: string;
  email: string;
  username: string;
  balance: number;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  loginDemo: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem('authUser');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: queryError } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .eq('password', password)
        .maybeSingle();

      if (queryError) throw queryError;

      if (!data) {
        throw new Error('Invalid email or password');
      }

      const userData: User = {
        id: data.id,
        email: data.email,
        username: data.username,
        balance: Number(data.balance),
      };

      setUser(userData);
      localStorage.setItem('authUser', JSON.stringify(userData));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (username: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { count, error: countError } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true });

      if (countError) throw countError;

      const userCount = count || 0;
      const newUserId = `vv_${userCount + 1}`;

      const { data: emailCheck } = await supabase
        .from('users')
        .select('email')
        .eq('email', email)
        .maybeSingle();

      if (emailCheck) {
        throw new Error('Email already exists');
      }

      const { data: usernameCheck } = await supabase
        .from('users')
        .select('username')
        .eq('username', username)
        .maybeSingle();

      if (usernameCheck) {
        throw new Error('Username already exists');
      }

      const { data, error: insertError } = await supabase
        .from('users')
        .insert([
          {
            id: newUserId,
            username,
            email,
            password,
            balance: 1000,
          },
        ])
        .select()
        .single();

      if (insertError) throw insertError;

      const userData: User = {
        id: data.id,
        email: data.email,
        username: data.username,
        balance: Number(data.balance),
      };

      setUser(userData);
      localStorage.setItem('authUser', JSON.stringify(userData));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Signup failed';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const loginDemo = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await supabase
        .from('users')
        .select('*')
        .eq('email', 'demo@vegavault.com')
        .maybeSingle();

      let userData: User;

      if (!data) {
        const { data: newUser, error: insertError } = await supabase
          .from('users')
          .insert([
            {
              id: 'vv_demo',
              username: 'DemoUser',
              email: 'demo@vegavault.com',
              password: 'demopassword',
              balance: 1000,
            },
          ])
          .select()
          .single();

        if (insertError) throw insertError;

        userData = {
          id: newUser.id,
          email: newUser.email,
          username: newUser.username,
          balance: Number(newUser.balance),
        };
      } else {
        userData = {
          id: data.id,
          email: data.email,
          username: data.username,
          balance: Number(data.balance),
        };
      }

      setUser(userData);
      localStorage.setItem('authUser', JSON.stringify(userData));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
    localStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, signup, loginDemo, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
