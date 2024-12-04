import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Users,
    label: 'Total Participants',
    value: '1,234',
    trend: '+12%',
    trendUp: true,
  },
  {
    icon: Award,
    label: 'Avg. Score',
    value: '87%',
    trend: '+5%',
    trendUp: true,
  },
  {
    icon: Clock,
    label: 'Completion Rate',
    value: '95%',
    trend: '+3%',
    trendUp: true,
  },
  {
    icon: TrendingUp,
    label: 'Active Quizzes',
    value: '8',
    trend: '+2',
    trendUp: true,
  },
];

export function QuizStatistics() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Quiz Statistics
      </h3>
      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                <stat.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                {stat.value}
              </span>
              <span className={`text-sm font-medium flex items-center gap-1
                ${stat.trendUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {stat.trend}
                <TrendingUp className="w-3 h-3" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}