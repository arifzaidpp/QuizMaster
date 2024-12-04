import React from 'react';
import { AttemptedQuizzes } from '../stats/AttemptedQuizzes';
import { CreatedQuizzes } from '../stats/CreatedQuizzes';
import { QuizActivity } from '../activity/QuizActivity';

export function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Dashboard Overview
      </h1>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Attempted Quizzes Analysis */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Your Quiz Attempts
          </h2>
          <AttemptedQuizzes />
          <QuizActivity type="attempted" />
        </div>

        {/* Created Quizzes Analysis */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Your Created Quizzes
          </h2>
          <CreatedQuizzes />
          <QuizActivity type="created" />
        </div>
      </div>
    </div>
  );
}