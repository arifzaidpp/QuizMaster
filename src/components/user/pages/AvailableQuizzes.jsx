import React from 'react';
import { QuizList } from '../quizzes/QuizList';

export function AvailableQuizzes() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Available Quizzes
      </h1>
      <QuizList />
    </div>
  );
}