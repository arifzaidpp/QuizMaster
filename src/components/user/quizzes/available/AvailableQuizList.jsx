import React from 'react';
import { AvailableQuizCard } from './AvailableQuizCard';

const availableQuizzes = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    description: 'Test your knowledge of JavaScript basics including variables, functions, and objects.',
    duration: 30,
    questions: 20,
    difficulty: 'Intermediate',
    author: {
      name: 'John Doe',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
    },
    participants: 150,
    avgScore: 85,
    maxAttempts: 3,
    attemptsLeft: 2,
  },
  {
    id: 2,
    title: 'React Hooks Deep Dive',
    description: 'Advanced quiz covering all aspects of React Hooks and state management.',
    duration: 45,
    questions: 25,
    difficulty: 'Advanced',
    author: {
      name: 'Jane Smith',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane'
    },
    participants: 89,
    avgScore: 78,
    maxAttempts: 1,
    attemptsLeft: 1,
  },
];

export function AvailableQuizList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {availableQuizzes.map((quiz) => (
        <AvailableQuizCard key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
}