import React from 'react';
import { QuizList } from '../quizzes/QuizList';
import { CreateQuizButton } from '../quizzes/CreateQuizButton';
import { QuizStatistics } from '../stats/QuizStatistics';
import { RecentQuizActivity } from '../activity/RecentQuizActivity';
import { QuizPerformanceChart } from '../stats/QuizPerformanceChart';

export function YourQuizzes() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Your Quizzes
        </h1>
        <CreateQuizButton />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Quiz List */}
        <div className="xl:col-span-2 space-y-8">
          {/* <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-6"> */}
            <QuizPerformanceChart />
          {/* </div> */}
          <QuizList />
        </div>

        {/* Sidebar Statistics and Activity */}
        <div className="space-y-8">
          <QuizStatistics />
          <RecentQuizActivity />
        </div>
      </div>
    </div>
  );
}