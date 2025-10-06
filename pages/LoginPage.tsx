import React, { useState } from 'react';
import type { User } from '../types';
import { EyeIcon, EyeOffIcon } from '../components/IconComponents';

interface LoginPageProps {
  onLogin: (user: User) => void;
  onSwitchToRegister: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Hardcoded admin credentials check
    if (email === 'admin@user.com' && password === 'VeryStrongPassword678') {
      onLogin({ username: 'admin', email: 'admin@user.com', role: 'admin' });
      return;
    }

    // Check against registered users in local storage (mock)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((user: any) => user.email === email && user.password === password);
    
    if (foundUser) {
       onLogin({ username: foundUser.username, email: foundUser.email, role: 'user' });
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="container mx-auto px-6 py-20 flex justify-center items-center">
      <div className="w-full max-w-md bg-base-200 p-8 rounded-xl shadow-2xl border border-base-300">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Sign In</h2>
        {error && <p className="bg-red-500/20 text-red-400 text-center p-3 rounded-lg mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-base-300 border border-base-300 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-400 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-base-300 border border-base-300 text-white rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
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
