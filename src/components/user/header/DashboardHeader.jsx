import React, { useEffect, useState } from 'react';
import { UserNav } from './UserNav';
import { SearchBar } from './SearchBar';
import { NotificationBell } from './NotificationBell';
import { ThemeToggle } from './ThemeToggle';
import { Brain, Menu } from 'lucide-react';

export function DashboardHeader({ onMenuClick }) {
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 640) {
      setIsSmallMobile(true);
    } else {
      setIsSmallMobile(false);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 640) {
        setIsSmallMobile(true);
      } else {
        setIsSmallMobile(false);
      }
    });
  } , []);
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
            >
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                QuizMaster
              </span>
            </div>
          </div>
          
          <SearchBar />
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {!isSmallMobile && <NotificationBell />}
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  );
}