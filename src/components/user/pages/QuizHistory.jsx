import React from 'react';
import { Clock, Award, TrendingUp } from 'lucide-react';

const quizHistory = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    date: '2024-02-20',
    score: 85,
    timeSpent: '25m',
    improvement: '+5%',
  },
  {
    id: 2,
    title: 'React Hooks Deep Dive',
    date: '2024-02-18',
    score: 92,
    timeSpent: '18m',
    improvement: '+8%',
  },
];

export function QuizHistory() {
  return (
    <div className="space-y-8 overflow-hidden">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Quiz History
      </h1>
      
      {/* Mobile view - Cards */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {quizHistory.map((quiz) => (
          <div key={quiz.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
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
          </div>
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
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {quizHistory.map((quiz) => (
                <tr key={quiz.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {quiz.title}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}