import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export function Button({
  children,
  isLoading,
  className = '',
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        flex items-center justify-center px-4 py-2
        bg-gradient-to-r from-blue-600 to-blue-700
        dark:from-blue-500 dark:to-blue-600
        text-white font-medium rounded-md
        hover:from-blue-700 hover:to-blue-800
        dark:hover:from-blue-600 dark:hover:to-blue-700
        focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-blue-500 dark:focus:ring-blue-400
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors
        ${className}
      `}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        children
      )}
    </motion.button>
  );
}