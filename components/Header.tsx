import React from 'react';
import { Logo } from './IconComponents';
import type { User } from '../types';

interface HeaderProps {
  currentUser: User | null;
  onLogout: () => void;
  onNavigate: (view: 'home' | 'login' | 'register' | 'admin') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentUser, onLogout, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-lg border-b border-base-300">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}><Logo /></a>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-slate-300">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="hover:text-brand-primary transition-colors">Courses</a>
          <a href="#" className="hover:text-brand-primary transition-colors">About</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Creators</a>
          {currentUser?.role === 'admin' && (
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('admin'); }} className="text-brand-secondary hover:text-pink-400 transition-colors font-semibold">Admin Dashboard</a>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
              <span className="text-slate-300 hidden sm:inline">Welcome, {currentUser.username}</span>
              <button onClick={onLogout} className="bg-base-300 hover:bg-base-200 text-slate-300 font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300">
                Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={() => onNavigate('login')} className="hidden sm:block text-slate-300 hover:text-white transition-colors">
                Sign In
              </button>
              <button onClick={() => onNavigate('register')} className="bg-brand-primary hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
