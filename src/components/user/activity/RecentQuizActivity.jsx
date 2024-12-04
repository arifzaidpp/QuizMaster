import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock } from 'lucide-react';

const activities = [
  {
    id: 1,
    user: 'Sarah Johnson',
    action: 'completed',
    quiz: 'JavaScript Basics',
    score: '92%',
    time: '2h ago',
  },
  {
    id: 2,
    user: 'Michael Chen',
    action: 'started',
    quiz: 'React Fundamentals',
    time: '3h ago',
  },
  {
    id: 3,
    user: 'Emily Davis',
    action: 'completed',
    quiz: 'CSS Grid Mastery',
    score: '88%',
    time: '5h ago',
  },
];

export function RecentQuizActivity() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Recent Activity
      </h3>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activity.user}`}
              alt={activity.user}
              className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 dark:text-white">
                <span className="font-medium">{activity.user}</span>
                {' '}{activity.action}{' '}
                <span className="font-medium">{activity.quiz}</span>
              </p>
              <div className="flex items-center gap-4 mt-1">
                {activity.score && (
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">{activity.score}</span>
                  </div>
                )}
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{activity.time}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}