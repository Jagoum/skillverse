import React, { useState, useEffect } from 'react';
import type { User } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'login' | 'register' | 'admin'>('home');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for logged-in user in session storage on initial load
    const storedUser = sessionStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }

    // Ensure default admin user exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const adminExists = users.some((user: any) => user.email === 'admin@user.com');
    if (!adminExists) {
      users.push({
        username: 'admin',
        email: 'admin@user.com',
        password: 'VeryStrongPassword678',
        role: 'admin'
      });
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, []);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    if (user.role === 'admin') {
      setView('admin');
    } else {
      setView('home');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('currentUser');
    setView('home');
  };

  const handleRegister = (user: Omit<User, 'role'>) => {
    // In a real app, this would be an API call.
    // Here, we'll just log them in as a regular user.
    const newUser: User = { ...user, role: 'user' };
    
    // Mock storing the user
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    handleLogin(newUser);
  };
  
  const renderContent = () => {
    switch (view) {
      case 'login':
        return <LoginPage onLogin={handleLogin} onSwitchToRegister={() => setView('register')} />;
      case 'register':
        return <RegisterPage onRegister={handleRegister} onSwitchToLogin={() => setView('login')} />;
      case 'admin':
        if (currentUser?.role === 'admin') {
          return <AdminDashboard user={currentUser} />;
        }
        // Fallback to home if not an admin
        return <HomePage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-slate-300 font-sans">
      <Header currentUser={currentUser} onLogout={handleLogout} onNavigate={setView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
