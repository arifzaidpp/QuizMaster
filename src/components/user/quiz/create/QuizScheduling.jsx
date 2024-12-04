import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

export function QuizScheduling({ quizData, setQuizData }) {
  const handleSchedulingChange = (e) => {
    const { name, checked, value, type } = e.target;
    setQuizData({
      ...quizData,
      scheduling: {
        ...quizData.scheduling,
        [name]: type === 'checkbox' ? checked : value,
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Quiz Scheduling
        </h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Schedule Quiz</span>
            </div>
            <input
              type="checkbox"
              name="enabled"
              checked={quizData.scheduling?.enabled || false}
              onChange={handleSchedulingChange}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
          </label>

          {/* Scheduling Fields - Always visible on lg */}
          <div
            className={`mt-4 space-y-4 ${
              quizData.scheduling?.enabled ? 'block' : 'hidden lg:block'
            }`}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Start Time
              </label>
              <input
                type="datetime-local"
                name="startTime"
                value={quizData.scheduling?.startTime || ''}
                onChange={handleSchedulingChange}
                min={new Date().toISOString().slice(0, 16)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                End Time
              </label>
              <input
                type="datetime-local"
                name="endTime"
                value={quizData.scheduling?.endTime || ''}
                onChange={handleSchedulingChange}
                min={quizData.scheduling?.startTime || new Date().toISOString().slice(0, 16)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Info Alert */}
          {quizData.scheduling?.enabled && quizData.scheduling?.startTime && quizData.scheduling?.endTime && (
            <div className="flex items-start gap-2 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-600 dark:text-blue-400">
                <p className="font-medium">Quiz will be automatically:</p>
                <ul className="mt-1 list-disc list-inside">
                  <li>Published at: {new Date(quizData.scheduling.startTime).toLocaleString()}</li>
                  <li>Ended at: {new Date(quizData.scheduling.endTime).toLocaleString()}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
