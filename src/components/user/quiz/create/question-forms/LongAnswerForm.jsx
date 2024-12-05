import React from 'react';

export function LongAnswerForm({ data, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Model Answer
      </label>
      <textarea
        value={data.answer || ''}
        onChange={(e) => onChange({ ...data, answer: e.target.value })}
        required
        rows={4}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        placeholder="Enter a model answer for reference"
      />
    </div>
  );
}