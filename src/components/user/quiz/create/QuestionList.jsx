import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { QuestionCard } from './QuestionCard';
import { AddQuestionModal } from './AddQuestionModal';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

export function QuestionList({ quizData, setQuizData }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingQuestionIndex, setEditingQuestionIndex] = React.useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleEditQuestion = (index) => {
    setEditingQuestionIndex(index);
    setIsModalOpen(true);
  };

  const handleQuestionSave = (question) => {
    if (editingQuestionIndex !== null) {
      const updatedQuestions = [...quizData.questions];
      updatedQuestions[editingQuestionIndex] = {
        ...question,
        id: quizData.questions[editingQuestionIndex].id
      };
      setQuizData({
        ...quizData,
        questions: updatedQuestions
      });
      setEditingQuestionIndex(null);
    } else {
      const newQuestion = {
        ...question,
        id: `question-${Date.now()}`
      };
      setQuizData({
        ...quizData,
        questions: [...quizData.questions, newQuestion]
      });
    }
  };

  const removeQuestion = (index) => {
    setQuizData({
      ...quizData,
      questions: quizData.questions.filter((_, i) => i !== index)
    });
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      const oldIndex = quizData.questions.findIndex(q => q.id === active.id);
      const newIndex = quizData.questions.findIndex(q => q.id === over.id);
      
      setQuizData({
        ...quizData,
        questions: arrayMove(quizData.questions, oldIndex, newIndex)
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Questions
        </h2>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setEditingQuestionIndex(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5" />
          Add Question
        </motion.button>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext
          items={quizData.questions.map(q => q.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-4">
            {quizData.questions.map((question, index) => (
              <QuestionCard
                key={question.id}
                id={question.id}
                question={question}
                index={index}
                onDelete={removeQuestion}
                onEdit={handleEditQuestion}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {quizData.questions.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
          <p className="text-gray-500 dark:text-gray-400">
            No questions added yet. Click the button above to add your first question.
          </p>
        </div>
      )}

      <AddQuestionModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingQuestionIndex(null);
        }}
        onAdd={handleQuestionSave}
        editingQuestion={editingQuestionIndex !== null ? quizData.questions[editingQuestionIndex] : null}
      />
    </div>
  );
}