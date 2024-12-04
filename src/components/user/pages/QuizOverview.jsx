import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export function QuizOverview() {
  const quizData = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [12, 3, 5],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(209, 213, 219, 0.8)',
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(209, 213, 219, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Quiz Progress Overview
      </h2>
      <div className="max-w-xs mx-auto">
        <Doughnut data={quizData} />
      </div>
    </div>
  );
}