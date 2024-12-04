import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, Award } from 'lucide-react';

export function QuizBasicInfo({ quizData, setQuizData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Basic Information
      </h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Quiz Title
          </label>
          <input
            type="text"
            value={quizData.title}
            onChange={(e) => setQuizData({ ...quizData, title: e.target.value })}
            placeholder="Enter quiz title"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description
          </label>
          <textarea
            value={quizData.description}
            onChange={(e) => setQuizData({ ...quizData, description: e.target.value })}
            placeholder="Enter quiz description"
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Duration (minutes)
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                value={quizData.duration}
                onChange={(e) => setQuizData({ ...quizData, duration: parseInt(e.target.value) })}
                min="1"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Passing Score (%)
            </label>
            <div className="relative">
              <Award className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                value={quizData.passingScore}
                onChange={(e) => setQuizData({ ...quizData, passingScore: parseInt(e.target.value) })}
                min="0"
                max="100"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}