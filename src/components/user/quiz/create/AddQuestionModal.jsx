import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus } from 'lucide-react';

export function AddQuestionModal({ isOpen, onClose, onAdd }) {
  const [questionType, setQuestionType] = useState('multiple-choice');
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [correctOption, setCorrectOption] = useState(0);
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const question = {
      type: questionType,
      text: questionText,
      ...(questionType === 'multiple-choice'
        ? { options, correctOption }
        : { answer }),
    };
    onAdd(question);
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setQuestionType('multiple-choice');
    setQuestionText('');
    setOptions(['', '']);
    setCorrectOption(0);
    setAnswer('');
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
    if (correctOption >= index) {
      setCorrectOption(Math.max(0, correctOption - 1));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Add Question
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
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Question Text
              </label>
              <textarea
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                required
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {questionType === 'multiple-choice' ? (
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Options
                </label>
                {options.map((option, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <input
                      type="radio"
                      checked={correctOption === index}
                      onChange={() => setCorrectOption(index)}
                      className="text-blue-600"
                    />
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...options];
                        newOptions[index] = e.target.value;
                        setOptions(newOptions);
                      }}
                      placeholder={`Option ${index + 1}`}
                      required
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                               focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    {options.length > 2 && (
                      <button
                        type="button"
                        onClick={() => removeOption(index)}
                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
                {options.length < 6 && (
                  <button
                    type="button"
                    onClick={addOption}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400"
                  >
                    <Plus className="w-4 h-4" />
                    Add Option
                  </button>
                )}
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Correct Answer
                </label>
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                  rows={questionType === 'long-answer' ? 4 : 2}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                           focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            )}

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
                Add Question
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}