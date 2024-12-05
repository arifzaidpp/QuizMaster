import React from 'react';
import { Clock, HelpCircle } from 'lucide-react';

export function QuizHeader({ title, currentQuestion, totalQuestions, timeRemaining }) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
          <div className="flex items-center gap-2 mt-2 text-gray-600 dark:text-gray-300">
            <HelpCircle className="w-4 h-4" />
            <span>Question {currentQuestion} of {totalQuestions}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-900 dark:text-white">
          <Clock className="w-5 h-5" />
          <span className="text-xl font-semibold">{formatTime(timeRemaining)}</span>
        </div>
      </div>
    </div>
  );
}