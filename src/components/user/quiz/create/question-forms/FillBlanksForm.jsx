import React from 'react';
import { Plus, Minus } from 'lucide-react';

export function FillBlanksForm({ data, onChange }) {
  const blanks = data.blanks || [''];

  const addBlank = () => {
    onChange({
      ...data,
      blanks: [...blanks, ''],
    });
  };

  const removeBlank = (index) => {
    onChange({
      ...data,
      blanks: blanks.filter((_, i) => i !== index),
    });
  };

  const updateBlank = (index, value) => {
    const newBlanks = [...blanks];
    newBlanks[index] = value;
    onChange({
      ...data,
      blanks: newBlanks,
    });
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Blank Answers
      </label>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Use [blank] in your question text to indicate where the blanks should appear.
      </p>
      {blanks.map((blank, index) => (
        <div key={index} className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Blank {index + 1}:
          </span>
          <input
            type="text"
            value={blank}
            onChange={(e) => updateBlank(index, e.target.value)}
            placeholder="Enter correct answer"
            required
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          {blanks.length > 1 && (
            <button
              type="button"
              onClick={() => removeBlank(index)}
              className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full"
            >
              <Minus className="w-5 h-5" />
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addBlank}
        className="flex items-center gap-2 text-blue-600 dark:text-blue-400"
      >
        <Plus className="w-4 h-4" />
        Add Blank
      </button>
    </div>
  );
}