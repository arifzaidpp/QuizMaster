import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Edit2, GripVertical } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export function QuestionCard({ id, question, index, onDelete, onUpdate }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
  };

  const getQuestionPreview = () => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-2">
            {question.options.map((option, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="radio"
                  disabled
                  checked={i === question.correctOption}
                  className="text-blue-600"
                />
                <span className="text-gray-600 dark:text-gray-300">{option}</span>
              </div>
            ))}
          </div>
        );
      case 'short-answer':
        return (
          <div className="px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600">
            <p className="text-gray-600 dark:text-gray-300">{question.answer}</p>
          </div>
        );
      case 'long-answer':
        return (
          <div className="px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600">
            <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{question.answer}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md ${
        isDragging ? 'shadow-lg opacity-75' : ''
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-2">
              <button
                className="cursor-grab active:cursor-grabbing p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                {...attributes}
                {...listeners}
              >
                <GripVertical className="w-5 h-5 text-gray-400" />
              </button>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                Question {index + 1}
              </span>
            </div>
            <div>
              <p className="text-gray-900 dark:text-white mb-4">{question.text}</p>
              {getQuestionPreview()}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onDelete(index)}
              className="p-2 text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}