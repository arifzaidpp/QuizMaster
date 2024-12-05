import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, LogOut, WalletCards } from 'lucide-react';
import { useDropdown } from '../../../hooks/useDropdown';
import { useNavigate } from 'react-router-dom';

export function UserNav() {
  const [isOpen, setIsOpen] = useDropdown('user-nav');
  const navigate = useNavigate();

  const handleYourSubscriptionClick = () => {
    setIsOpen(false);
    navigate('/dashboard/subscription');
  }

  const handleUserClick = () => {
    setIsOpen(false);
    navigate('/dashboard/profile');
  }

  return (
    <div className="relative" data-dropdown="user-nav">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
          alt="User avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="hidden md:block text-gray-700 dark:text-gray-200">
          John Doe
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1"
          >
            <button className="w-full px-4 py-2 text-left flex items-center gap-2 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={handleUserClick}>
              <User className="w-4 h-4" />
              Profile
            </button>
            <button className="w-full px-4 py-2 text-left flex items-center gap-2 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={handleYourSubscriptionClick}>
              <WalletCards className="w-4 h-4" />
              Your Subscription
            </button>
            <button className="w-full px-4 py-2 text-left flex items-center gap-2 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <button className="w-full px-4 py-2 text-left flex items-center gap-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}