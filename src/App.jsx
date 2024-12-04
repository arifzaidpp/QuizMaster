import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeToggle } from './components/landingPage/ThemeToggle';
import { LandingPage } from './components/landingPage/LandingPage';
import { LoginForm } from './components/auth/LoginForm';
import { SignupForm } from './components/auth/SignupForm';
import { ForgotPasswordForm } from './components/auth/ForgotPasswordForm';


function App() {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const target = e.target;
      if (!(target instanceof HTMLAnchorElement)) return;
      const id = target.getAttribute('href')?.replace('#', '');
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <ThemeToggle />
        <Toaster position="top-right" />
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;