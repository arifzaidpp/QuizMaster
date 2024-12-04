import React from 'react';
import { DashboardHeader } from './header/DashboardHeader';
import { QuizList } from './quizzes/QuizList';
import { CreateQuizButton } from './quizzes/CreateQuizButton';
import { DashboardStats } from './stats/DashboardStats';
import { RecentActivity } from './activity/RecentActivity';

export function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Your Quizzes
              </h2>
              <CreateQuizButton />
            </div>
            <QuizList />
          </div>
          <div className="space-y-8">
            <DashboardStats />
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
}