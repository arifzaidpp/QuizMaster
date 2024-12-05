import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Square } from 'lucide-react';
import { MultipleChoiceForm } from './question-forms/MultipleChoiceForm';
import { ShortAnswerForm } from './question-forms/ShortAnswerForm';
import { LongAnswerForm } from './question-forms/LongAnswerForm';
import { FillBlanksForm } from './question-forms/FillBlanksForm';
import { MatchingForm } from './question-forms/MatchingForm';

export function AddQuestionModal({ isOpen, onClose, onAdd, editingQuestion }) {
  const [questionType, setQuestionType] = useState('multiple-choice');
  const [questionText, setQuestionText] = useState('');
  const [questionData, setQuestionData] = useState({});
  const textareaRef = useRef(null);

  useEffect(() => {
    if (editingQuestion) {
      setQuestionType(editingQuestion.type);
      setQuestionText(editingQuestion.text);
      const { type, text, id, ...rest } = editingQuestion;
      setQuestionData(rest);
    }
  }, [editingQuestion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const question = {
      type: questionType,
      text: questionText,
      ...questionData
    };
    onAdd(question);
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setQuestionType('multiple-choice');
    setQuestionText('');
    setQuestionData({});
  };

  const insertBlank = () => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = questionText;
    const newText = text.substring(0, start) + '[blank]' + text.substring(end);
    setQuestionText(newText);
    
    const currentBlanks = questionData.blanks || [''];
    if ((newText.match(/\[blank\]/g) || []).length > currentBlanks.length) {
      setQuestionData({
        ...questionData,
        blanks: [...currentBlanks, ''],
      });
    }

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + 7, start + 7);
    }, 0);
  };

  const renderQuestionForm = () => {
    switch (questionType) {
      case 'multiple-choice':
        return (
          <MultipleChoiceForm
            data={questionData}
            onChange={setQuestionData}
          />
        );
      case 'short-answer':
        return (
          <ShortAnswerForm
            data={questionData}
            onChange={setQuestionData}
          />
        );
      case 'long-answer':
        return (
          <LongAnswerForm
            data={questionData}
            onChange={setQuestionData}
          />
        );
      case 'fill-blanks':
        return (
          <FillBlanksForm
            data={questionData}
            onChange={setQuestionData}
          />
        );
      case 'matching':
        return (
          <MatchingForm
            data={questionData}
            onChange={setQuestionData}
          />
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {editingQuestion ? 'Edit Question' : 'Add Question'}
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Question Type
              </label>
              <select
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="multiple-choice">Multiple Choice</option>
                <option value="short-answer">Short Answer</option>
                <option value="long-answer">Long Answer</option>
                <option value="fill-blanks">Fill in the Blanks</option>
                <option value="matching">Match the Following</option>
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Question Text
                </label>
                {questionType === 'fill-blanks' && (
                  <button
                    type="button"
                    onClick={insertBlank}
                    className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 
                             text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50"
                  >
                    <Square className="w-4 h-4" />
                    Insert Blank
                  </button>
                )}
              </div>
              <textarea
                ref={textareaRef}
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                required
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {renderQuestionForm()}

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {editingQuestion ? 'Save Changes' : 'Add Question'}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}