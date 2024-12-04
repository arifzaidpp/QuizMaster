import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import { AuthLayout } from './AuthLayout';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <AuthLayout
        title="Check your email"
        subtitle="We've sent you a link to reset your password"
      >
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            If you don't see it, check your spam folder or{' '}
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              try again
            </button>
          </p>
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-500 dark:text-blue-400 font-medium"
          >
            Return to sign in
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email and we'll send you a reset link"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email address"
          type="email"
          required
          icon={Mail}
          placeholder="you@example.com"
        />

        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full"
        >
          Send reset link
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="text-center">
          <Link
            to="/login"
            className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Back to sign in
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}