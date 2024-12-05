import React from 'react';
import { Plus, Minus } from 'lucide-react';

export function MultipleChoiceForm({ data, onChange }) {
  const options = data.options || ['', ''];
  const correctOption = data.correctOption || 0;

  const addOption = () => {
    onChange({
      ...data,
      options: [...options, ''],
    });
  };

  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    onChange({
      ...data,
      options: newOptions,
      correctOption: correctOption >= index ? Math.max(0, correctOption - 1) : correctOption,
    });
  };

  const updateOption = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    onChange({
      ...data,
      options: newOptions,
    });
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Options
      </label>
      {options.map((option, index) => (
        <div key={index} className="flex items-center gap-4">
          <input
            type="radio"
            checked={correctOption === index}
            onChange={() => onChange({ ...data, correctOption: index })}
            className="text-blue-600"
          />
          <input
            type="text"
            value={option}
            onChange={(e) => updateOption(index, e.target.value)}
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
  );
}