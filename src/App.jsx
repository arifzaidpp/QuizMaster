import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeToggle } from './components/landingPage/ThemeToggle';
import { LandingPage } from './components/landingPage/LandingPage';
import { LoginForm } from './components/auth/LoginForm';
import { SignupForm } from './components/auth/SignupForm';
import { ForgotPasswordForm } from './components/auth/ForgotPasswordForm';
import { DashboardLayout } from './components/user/layout/DashboardLayout';
import { Dashboard } from './components/user/pages/Dashboard';
import { AvailableQuizzes } from './components/user/pages/AvailableQuizzes';
import { YourQuizzes } from './components/user/pages/YourQuizzes';
import { QuizHistory } from './components/user/pages/QuizHistory';
import { CreateQuiz } from './components/user/pages/CreateQuiz';
import { UserProfile } from "./components/user/profile/UserProfile";
import { QuizPage } from './components/user/quiz/take/QuizPage';
import { SubscriptionPage } from './components/user/subscription/SubscriptionPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<div><ThemeToggle /><LoginForm /></div>} />
          <Route path="/signup" element={<div><ThemeToggle /><SignupForm /></div>} />
          <Route path="/forgot-password" element={<div><ThemeToggle /><ForgotPasswordForm /></div>} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="available" element={<AvailableQuizzes />} />
            <Route path="your-quizzes" element={<YourQuizzes />} />
            <Route path="history" element={<QuizHistory />} />
            <Route path="add-quiz" element={<CreateQuiz />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="subscription" element={<SubscriptionPage page="subscription" />} />
            <Route path='pricing' element={<SubscriptionPage page="pricing" />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;