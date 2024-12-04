import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Award, Book, Clock } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'quiz_completed',
    icon: Award,
    title: 'JavaScript Fundamentals Quiz',
    score: '92%',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'quiz_started',
    icon: Book,
    title: 'React Hooks Deep Dive',
    time: '1 day ago',
  },
  {
    id: 3,
    type: 'quiz_completed',
    icon: Award,
    title: 'CSS Grid Mastery',
    score: '88%',
    time: '2 days ago',
  },
  {
    id: 4,
    type: 'quiz_started',
    icon: Book,
    title: 'TypeScript Basics',
    time: '3 days ago',
  },
];

export function ActivityLog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
        
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="relative pl-10">
              <div className="absolute left-0 p-2 bg-white dark:bg-gray-800 rounded-full">
                <activity.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {activity.title}
                </h3>
                <div className="flex items-center gap-4 mt-1">
                  {activity.score && (
                    <span className="text-sm text-green-600 dark:text-green-400">
                      Score: {activity.score}
                    </span>
                  )}
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    {activity.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="text-blue-600 dark:text-blue-400 hover:underline">
          View Full History
        </button>
      </div>
    </motion.div>
  );
}