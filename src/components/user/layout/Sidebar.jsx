import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, BookOpen, PenTool, History, X } from 'lucide-react';

const navItems = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/dashboard',
  },
  {
    label: 'Available Quizzes',
    icon: BookOpen,
    path: '/dashboard/available',
  },
  {
    label: 'Your Quizzes',
    icon: PenTool,
    path: '/dashboard/your-quizzes',
  },
  {
    label: 'Quiz History',
    icon: History,
    path: '/dashboard/history',
  },
];

export function Sidebar({ isOpen, onClose }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    );
  } , []);

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={isMobile ? { 
          x: isOpen ? 0 : -256,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30
          }
        } : {}}
        className={`fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-40 md:z-10 ${isMobile ? 'transform' : ''}`}
      >
        <div className="flex justify-between items-center p-4 md:hidden">
          <h2 className="font-semibold text-gray-900 dark:text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => onClose()}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </motion.aside>
    </>
  );
}