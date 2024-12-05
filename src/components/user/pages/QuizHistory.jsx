import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Award, TrendingUp, Download, RefreshCcw, X, Medal } from 'lucide-react';

const quizHistory = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    date: '2024-02-20',
    score: 85,
    timeSpent: '25m',
    improvement: '+5%',
    maxAttempts: 3,
    attemptsLeft: 2,
    questions: 20,
    correctAnswers: 17,
    certificate: true,
    createdBy: {
      name: 'John Doe',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
    }
  },
  {
    id: 2,
    title: 'React Hooks Deep Dive',
    date: '2024-02-18',
    score: 92,
    timeSpent: '18m',
    improvement: '+8%',
    maxAttempts: 1,
    attemptsLeft: 0,
    questions: 15,
    correctAnswers: 14,
    certificate: true,
    createdBy: {
      name: 'Jane Smith',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane'
    }
  },
];

export function QuizHistory() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleQuizClick = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleCloseDetails = () => {
    setSelectedQuiz(null);
  };

  const QuizDetailsModal = ({ quiz }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleCloseDetails}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Quiz Details
            </h2>
            <button
              onClick={handleCloseDetails}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {quiz.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <img
                    src={quiz.createdBy.avatar}
                    alt={quiz.createdBy.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span>Created by {quiz.createdBy.name}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {quiz.score}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Final Score
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Questions
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {quiz.correctAnswers} / {quiz.questions} correct
                </div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Time Spent
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {quiz.timeSpent}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Attempts
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {quiz.maxAttempts - quiz.attemptsLeft} of {quiz.maxAttempts} used
                </div>
              </div>
              <div className="flex gap-3">
                {quiz.certificate && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <Medal className="w-4 h-4" />
                    Get Certificate
                  </motion.button>
                )}
                {quiz.attemptsLeft > 0 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <RefreshCcw className="w-4 h-4" />
                    Reattempt Quiz
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="space-y-8 overflow-hidden">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Quiz History
      </h1>
      
      {/* Mobile view - Cards */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {quizHistory.map((quiz) => (
          <motion.div
            key={quiz.id}
            whileHover={{ y: -2 }}
            onClick={() => handleQuizClick(quiz)}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 cursor-pointer"
          >
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">
              {quiz.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Date
                </div>
                <div className="text-sm text-gray-900 dark:text-white">
                  {quiz.date}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Score
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-sm text-gray-900 dark:text-white">
                    {quiz.score}%
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Time
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-sm text-gray-900 dark:text-white">
                    {quiz.timeSpent}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Progress
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-sm text-green-600 dark:text-green-400">
                    {quiz.improvement}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop view - Table */}
      <div className="hidden lg:block bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Quiz Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Score
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Progress
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Attempts Left
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {quizHistory.map((quiz) => (
                <motion.tr
                  key={quiz.id}
                  onClick={() => handleQuizClick(quiz)}
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <img
                        src={quiz.createdBy.avatar}
                        alt={quiz.createdBy.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {quiz.title}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          by {quiz.createdBy.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-300">
                      {quiz.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-sm text-gray-900 dark:text-white">
                        {quiz.score}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-sm text-gray-900 dark:text-white">
                        {quiz.timeSpent}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm text-green-600 dark:text-green-400">
                        {quiz.improvement}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {quiz.attemptsLeft} of {quiz.maxAttempts}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {selectedQuiz && <QuizDetailsModal quiz={selectedQuiz} />}
      </AnimatePresence>
    </div>
  );
}