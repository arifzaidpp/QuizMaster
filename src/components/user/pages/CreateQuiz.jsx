import React, { useState } from 'react';
import { QuizBasicInfo } from '../quiz/create/QuizBasicInfo';
import { QuestionList } from '../quiz/create/QuestionList';
import { QuizSettings } from '../quiz/create/QuizSettings';
import { QuizScheduling } from '../quiz/create/QuizScheduling';
import { motion } from 'framer-motion';
import { Save, ArrowLeft, FileDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function CreateQuiz() {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState({
    title: '',
    description: '',
    duration: 60,
    passingScore: 70,
    questions: [],
    maxAttempts: null,
    isSecure: false,
    requirePassword: false,
    password: '',
    limitParticipants: false,
    maxParticipants: '',
    showResultsImmediately: true,
    randomizeQuestions: false,
    status: 'draft',
    scheduling: {
      enabled: false,
      startTime: '',
      endTime: '',
    },
  });

  const handleSave = (asDraft = false) => {
    // Validate required fields
    if (!quizData.title.trim()) {
      toast.error('Quiz title is required');
      return;
    }

    if (quizData.questions.length === 0) {
      toast.error('Add at least one question');
      return;
    }

    // Validate scheduling if enabled
    if (quizData.scheduling.enabled) {
      if (!quizData.scheduling.startTime || !quizData.scheduling.endTime) {
        toast.error('Both start and end time are required when scheduling is enabled');
        return;
      }

      const startTime = new Date(quizData.scheduling.startTime);
      const endTime = new Date(quizData.scheduling.endTime);
      const now = new Date();

      if (startTime < now) {
        toast.error('Start time cannot be in the past');
        return;
      }

      if (endTime <= startTime) {
        toast.error('End time must be after start time');
        return;
      }
    }

    // Handle quiz saving logic
    const finalQuizData = {
      ...quizData,
      status: asDraft ? 'draft' : 'active'
    };

    console.log('Quiz data:', finalQuizData);
    toast.success(asDraft ? 'Quiz saved as draft' : 'Quiz published successfully');
    navigate('/dashboard/your-quizzes');
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Create New Quiz
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSave(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            <FileDown className="w-5 h-5" />
            <span className="hidden sm:inline">Save as Draft</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSave(false)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Save className="w-5 h-5" />
            <span className="hidden sm:inline">Publish Quiz</span>
          </motion.button>
        </div>
      </div>

      <div className="space-y-8">
        {/* Basic Information */}
        <QuizBasicInfo quizData={quizData} setQuizData={setQuizData} />

        {/* Settings and Scheduling - Side by side on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <QuizSettings quizData={quizData} setQuizData={setQuizData} />
          <QuizScheduling quizData={quizData} setQuizData={setQuizData} />
        </div>

        {/* Question List */}
        <QuestionList quizData={quizData} setQuizData={setQuizData} />
      </div>
    </div>
  );
}