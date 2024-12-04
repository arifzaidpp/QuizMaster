import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Lock, Users, Eye, Shuffle, Repeat, Shield } from 'lucide-react';

export function QuizSettings({ quizData, setQuizData }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Quiz Settings
        </h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Attempts Allowed
          </label>
          <div className="flex items-center gap-4">
            <select
              value={quizData.maxAttempts || 'unlimited'}
              onChange={(e) => {
                const value = e.target.value === 'unlimited' ? null : Number(e.target.value);
                setQuizData({ ...quizData, maxAttempts: value });
              }}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="unlimited">Unlimited</option>
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <Repeat className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Secure Mode</span>
            </div>
            <input
              type="checkbox"
              checked={quizData.isSecure}
              onChange={(e) => setQuizData({ ...quizData, isSecure: e.target.checked })}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
          </label>
          {quizData.isSecure && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Enables additional security features and monitoring
            </p>
          )}
        </div>

        <div>
          <label className="flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Require Password</span>
            </div>
            <input
              type="checkbox"
              checked={quizData.requirePassword}
              onChange={(e) => setQuizData({ ...quizData, requirePassword: e.target.checked })}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
          </label>
          {quizData.requirePassword && (
            <input
              type="password"
              placeholder="Enter quiz password"
              className="mt-2 w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              value={quizData.password || ''}
              onChange={(e) => setQuizData({ ...quizData, password: e.target.value })}
            />
          )}
        </div>

        <div>
          <label className="flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Limit Participants</span>
            </div>
            <input
              type="checkbox"
              checked={quizData.limitParticipants}
              onChange={(e) => setQuizData({ ...quizData, limitParticipants: e.target.checked })}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
          </label>
          {quizData.limitParticipants && (
            <input
              type="number"
              placeholder="Maximum participants"
              className="mt-2 w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              value={quizData.maxParticipants || ''}
              onChange={(e) => setQuizData({ ...quizData, maxParticipants: e.target.value })}
            />
          )}
        </div>

        <div>
          <label className="flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>Show Results Immediately</span>
            </div>
            <input
              type="checkbox"
              checked={quizData.showResultsImmediately}
              onChange={(e) => setQuizData({ ...quizData, showResultsImmediately: e.target.checked })}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
          </label>
        </div>

        <div>
          <label className="flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <Shuffle className="w-4 h-4" />
              <span>Randomize Questions</span>
            </div>
            <input
              type="checkbox"
              checked={quizData.randomizeQuestions}
              onChange={(e) => setQuizData({ ...quizData, randomizeQuestions: e.target.checked })}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
          </label>
        </div>
      </div>
    </motion.div>
  );
}