import React from 'react';
import { motion } from 'framer-motion';
import { Clock, HelpCircle, Users, Award, ArrowRight, RefreshCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AvailableQuizCard({ quiz }) {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate(`/quiz/${quiz.id}`);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <img
              src={quiz.author.avatar}
              alt={quiz.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {quiz.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                by {quiz.author.name}
              </p>
            </div>
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm font-medium">
            {quiz.difficulty}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {quiz.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4" />
            <span>{quiz.duration} mins</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <HelpCircle className="w-4 h-4" />
            <span>{quiz.questions} questions</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Users className="w-4 h-4" />
            <span>{quiz.participants} taken</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Award className="w-4 h-4" />
            <span>{quiz.avgScore}% avg score</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <RefreshCcw className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {quiz.attemptsLeft} of {quiz.maxAttempts} attempts left
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartQuiz}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Start Quiz
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}