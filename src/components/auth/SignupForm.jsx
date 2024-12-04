import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { AuthLayout } from './AuthLayout';
import { SocialAuth } from './SocialAuth';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export function SignupForm() {
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
      title="Create an account"
      subtitle="Join thousands of quiz enthusiasts"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Full name"
          type="text"
          required
          icon={User}
          placeholder="John Doe"
        />

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
          placeholder="Create a password"
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

        <div className="text-sm">
          <p className="text-gray-500 dark:text-gray-400">
            By signing up, you agree to our{' '}
            <Link to="/terms" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
              Privacy Policy
            </Link>
          </p>
        </div>

        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full"
        >
          Create account
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <SocialAuth />

        <div className="text-center">
          <Link
            to="/login"
            className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Already have an account? Sign in
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}