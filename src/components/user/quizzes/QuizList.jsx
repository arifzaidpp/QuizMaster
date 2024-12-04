import React from 'react';
import { QuizCard } from './QuizCard';

const mockQuizzes = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    description: 'Test your knowledge of JavaScript basics',
    participants: 45,
    questions: 20,
    timeLimit: 30,
    status: 'active',
  },
  {
    id: 2,
    title: 'React Hooks Deep Dive',
    description: 'Advanced quiz on React Hooks usage',
    participants: 32,
    questions: 15,
    timeLimit: 25,
    status: 'draft',
  },
  {
    id: 3,
    title: 'CSS Grid Mastery',
    description: 'Master CSS Grid layout techniques',
    participants: 28,
    questions: 18,
    timeLimit: 35,
    status: 'ended',
  },
];

export function QuizList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mockQuizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
}