import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="flex justify-center"
          >
            <Brain className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 py-8 px-4 shadow-xl rounded-xl sm:px-10"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}