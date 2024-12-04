import { motion } from 'framer-motion';
import { Brain, ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router';

export function Hero() {
  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <section className="relative min-h-screen py-16 flex items-center justify-center px-4 overflow-hidden" id='home'>
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyOHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 dark:opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <div className="relative">
                <div className="absolute inset-0 animate-pulse bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-xl" />
                <Brain className="w-24 h-24 text-blue-600 dark:text-blue-400 relative" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                Master Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-400 dark:to-purple-400 text-transparent bg-clip-text">
                Knowledge
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
            >
              Create engaging quizzes, track progress, and learn together in a secure environment
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-glow flex items-center justify-center gap-2"
                onClick={navigateToSignup}
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center gap-2"
              >
                Watch Demo
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform rotate-6 blur-xl opacity-30 dark:opacity-40 animate-pulse" />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200/80 dark:bg-gray-700/80 rounded-full w-3/4 animate-pulse" />
                    <div className="h-4 bg-gray-200/80 dark:bg-gray-700/80 rounded-full w-1/2 animate-pulse" />
                    <div className="h-12 bg-blue-100/80 dark:bg-blue-900/50 rounded-lg animate-pulse" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-purple-100/80 dark:bg-purple-900/50 rounded-lg animate-pulse" />
                      <div className="h-24 bg-purple-100/80 dark:bg-purple-900/50 rounded-lg animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}