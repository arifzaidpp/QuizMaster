import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Mail, MessageSquare, Star } from 'lucide-react';

export function NotificationSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    quizReminders: true,
    resultAlerts: true,
    marketingEmails: false,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const notifications = [
    {
      id: 'emailNotifications',
      icon: Mail,
      title: 'Email Notifications',
      description: 'Receive notifications about your quiz activity via email',
    },
    {
      id: 'quizReminders',
      icon: Bell,
      title: 'Quiz Reminders',
      description: 'Get reminded about upcoming and pending quizzes',
    },
    {
      id: 'resultAlerts',
      icon: Star,
      title: 'Result Alerts',
      description: 'Be notified when your quiz results are available',
    },
    {
      id: 'marketingEmails',
      icon: MessageSquare,
      title: 'Marketing Emails',
      description: 'Receive updates about new features and promotions',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Notification Settings
        </h2>
      </div>

      <div className="space-y-6">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <notification.icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {notification.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {notification.description}
                </p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings[notification.id]}
                onChange={() => handleToggle(notification.id)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                           peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
                           dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
                           after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                           after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                           after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
            </label>
          </div>
        ))}
      </div>
    </motion.div>
  );
}