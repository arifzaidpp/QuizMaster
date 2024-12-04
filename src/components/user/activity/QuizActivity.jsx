import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, Users } from 'lucide-react';

export function QuizActivity({ type }) {
  const activities = type === 'attempted' ? [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      score: '92%',
      time: '25m',
      date: '2h ago'
    },
    {
      id: 2,
      title: 'React Hooks Deep Dive',
      score: '88%',
      time: '18m',
      date: '1d ago'
    }
  ] : [
    {
      id: 1,
      title: 'CSS Grid Mastery',
      participants: 45,
      avgScore: '85%',
      date: '3h ago'
    },
    {
      id: 2,
      title: 'TypeScript Basics',
      participants: 32,
      avgScore: '78%',
      date: '2d ago'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        {type === 'attempted' ? 'Recent Attempts' : 'Quiz Performance'}
      </h3>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
          >
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">
                {activity.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {activity.date}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {type === 'attempted' ? (
                <>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {activity.score}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {activity.time}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      {activity.participants}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {activity.avgScore}
                    </span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}