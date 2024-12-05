import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { QuizHeader } from './QuizHeader';
import { QuizQuestion } from './QuizQuestion';
import { QuizNavigation } from './QuizNavigation';
import { QuizSubmitModal } from './QuizSubmitModal';

export function QuizPage() {
  const { quizId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes in seconds

  // Mock quiz data - In real app, fetch from API
  const quiz = {
    id: quizId,
    title: 'JavaScript Fundamentals',
    duration: 30,
    questions: [
      {
        id: 1,
        text: 'What is the output of typeof null?',
        type: 'multiple-choice',
        options: ['object', 'null', 'undefined', 'number'],
        correctAnswer: 0,
      },
      {
        id: 2,
        text: 'Which method removes the last element from an array?',
        type: 'multiple-choice',
        options: ['pop()', 'push()', 'shift()', 'unshift()'],
        correctAnswer: 0,
      },
    ],
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    // Handle quiz submission
    console.log('Submitted answers:', answers);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <QuizHeader
          title={quiz.title}
          currentQuestion={currentQuestion + 1}
          totalQuestions={quiz.questions.length}
          timeRemaining={timeRemaining}
        />

        <div className="mt-8">
          <QuizQuestion
            question={quiz.questions[currentQuestion]}
            selectedAnswer={answers[quiz.questions[currentQuestion].id]}
            onAnswer={handleAnswer}
          />
        </div>

        <QuizNavigation
          currentQuestion={currentQuestion}
          totalQuestions={quiz.questions.length}
          onPrevious={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
          onNext={() => setCurrentQuestion((prev) => Math.min(quiz.questions.length - 1, prev + 1))}
          onSubmit={() => setShowSubmitModal(true)}
        />

        <QuizSubmitModal
          isOpen={showSubmitModal}
          onClose={() => setShowSubmitModal(false)}
          onSubmit={handleSubmit}
          answeredQuestions={Object.keys(answers).length}
          totalQuestions={quiz.questions.length}
        />
      </div>
    </div>
  );
}