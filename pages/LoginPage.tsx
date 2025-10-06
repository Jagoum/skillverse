import React, { useState } from 'react';
import type { User } from '../types';

interface LoginPageProps {
  onLogin: (user: User) => void;
  onSwitchToRegister: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onSwitchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Hardcoded admin credentials check
    if (username === 'adminuser' && password === 'VeryStrongPassword678') {
      onLogin({ username: 'adminuser', role: 'admin' });
      return;
    }

    // Check against registered users in local storage (mock)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((user: User) => user.username === username && user.password === password);
    
    if (foundUser) {
       onLogin({ username: foundUser.username, role: 'user' });
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="container mx-auto px-6 py-20 flex justify-center items-center">
      <div className="w-full max-w-md bg-base-200 p-8 rounded-xl shadow-2xl border border-base-300">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Sign In</h2>
        {error && <p className="bg-red-500/20 text-red-400 text-center p-3 rounded-lg mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-slate-400 mb-2">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full bg-base-300 border border-base-300 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-400 mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-base-300 border border-base-300 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-primary hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-slate-400 mt-6">
          Don't have an account?{' '}
          <button onClick={onSwitchToRegister} className="font-semibold text-brand-primary hover:text-indigo-400">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
