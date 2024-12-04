import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, HelpCircle, Edit, Trash, Play, Copy, Power } from 'lucide-react';
import { toast } from 'react-hot-toast';

export function QuizCard({ quiz }) {
  const statusColors = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    draft: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    ended: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  };

  const handleQuizAction = () => {
    switch (quiz.status) {
      case 'active':
        // End the quiz
        toast.success('Quiz ended successfully');
        break;
      case 'draft':
        // Publish the quiz
        toast.success('Quiz published successfully');
        break;
      case 'ended':
        // No action for ended quizzes
        toast.error('This quiz has ended');
        break;
      default:
        break;
    }
  };

  const handleCopyQuiz = () => {
    // Logic to copy quiz
    toast.success('Quiz copied successfully');
  };

  const getActionButton = () => {
    switch (quiz.status) {
      case 'active':
        return (
          <button 
            onClick={handleQuizAction}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            <Power className="w-4 h-4" />
            End Quiz
          </button>
        );
      case 'draft':
        return (
          <button 
            onClick={handleQuizAction}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <Play className="w-4 h-4" />
            Publish Quiz
          </button>
        );
      case 'ended':
        return (
          <button 
            disabled
            className="flex items-center gap-2 px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed"
          >
            <Power className="w-4 h-4" />
            Quiz Ended
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {quiz.title}
          </h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[quiz.status]}`}>
            {quiz.status}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {quiz.description}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Users className="w-4 h-4" />
            <span>{quiz.participants}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <HelpCircle className="w-4 h-4" />
            <span>{quiz.questions}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4" />
            <span>{quiz.timeLimit}m</span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="space-x-2">
            <button 
              onClick={handleCopyQuiz}
              className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              title="Copy Quiz"
            >
              <Copy className="w-5 h-5" />
            </button>
            <button 
              className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              title="Edit Quiz"
            >
              <Edit className="w-5 h-5" />
            </button>
            <button 
              className="p-2 text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              title="Delete Quiz"
            >
              <Trash className="w-5 h-5" />
            </button>
          </div>
          {getActionButton()}
        </div>
      </div>
    </motion.div>
  );
}