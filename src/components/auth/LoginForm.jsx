import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import { AuthLayout } from './AuthLayout';
import { SocialAuth } from './SocialAuth';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email address"
          type="email"
          required
          icon={Mail}
          placeholder="you@example.com"
        />

        <Input
          label="Password"
          type={showPassword ? 'text' : 'password'}
          required
          icon={Lock}
          placeholder="Enter your password"
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          }
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>

          <Link
            to="/forgot-password"
            className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Forgot your password?
          </Link>
        </div>

        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full"
        >
          Sign in
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <SocialAuth />

        <div className="text-center">
          <Link
            to="/signup"
            className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}