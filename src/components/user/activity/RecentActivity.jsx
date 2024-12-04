import React from 'react';
import { motion } from 'framer-motion';

const activities = [
  {
    id: 1,
    user: 'Alice Smith',
    action: 'completed',
    quiz: 'JavaScript Fundamentals',
    time: '2m ago',
    score: '85%',
  },
  {
    id: 2,
    user: 'Bob Johnson',
    action: 'started',
    quiz: 'React Hooks Deep Dive',
    time: '5m ago',
  },
  {
    id: 3,
    user: 'Carol Williams',
    action: 'completed',
    quiz: 'JavaScript Fundamentals',
    time: '10m ago',
    score: '92%',
  },
];

export function RecentActivity() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activity.user}`}
              alt={activity.user}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="text-sm text-gray-900 dark:text-white">
                <span className="font-medium">{activity.user}</span>{' '}
                {activity.action}{' '}
                <span className="font-medium">{activity.quiz}</span>
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {activity.time}
              </p>
            </div>
            {activity.score && (
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                {activity.score}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}