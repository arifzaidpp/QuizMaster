import React from 'react';
import { Users, Award, Clock } from 'lucide-react';

const stats = [
  {
    label: 'Total Participants',
    value: '1,234',
    icon: Users,
    trend: '+12%',
    trendUp: true,
  },
  {
    label: 'Completion Rate',
    value: '87%',
    icon: Award,
    trend: '+5%',
    trendUp: true,
  },
  {
    label: 'Avg. Time',
    value: '18m',
    icon: Clock,
    trend: '-2m',
    trendUp: false,
  },
];

export function DashboardStats() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Statistics
      </h3>
      <div className="space-y-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <stat.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
            <span className={`text-sm font-medium ${
              stat.trendUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              {stat.trend}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}