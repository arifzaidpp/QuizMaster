import React from 'react';
import { motion } from 'framer-motion';

export function QuizQuestion({ question, selectedAnswer, onAnswer }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
    >
      <h2 className="text-xl text-gray-900 dark:text-white mb-6">
        {question.text}
      </h2>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(question.id, index)}
            className={`w-full p-4 rounded-lg border-2 transition-colors
              ${selectedAnswer === index
                ? 'border-blue-600 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400'
              }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                ${selectedAnswer === index
                  ? 'border-blue-600 dark:border-blue-400'
                  : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                {selectedAnswer === index && (
                  <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </div>
              <span className={`text-left ${
                selectedAnswer === index
                  ? 'text-blue-700 dark:text-blue-300'
                  : 'text-gray-700 dark:text-gray-300'
              }`}>
                {option}
              </span>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
}