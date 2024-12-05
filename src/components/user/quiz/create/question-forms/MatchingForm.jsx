import React from 'react';
import { Plus, Minus, ArrowDown } from 'lucide-react';

export function MatchingForm({ data, onChange }) {
  const pairs = data.pairs || [{ left: '', right: '' }];

  const addPair = () => {
    onChange({
      ...data,
      pairs: [...pairs, { left: '', right: '' }],
    });
  };

  const removePair = (index) => {
    onChange({
      ...data,
      pairs: pairs.filter((_, i) => i !== index),
    });
  };

  const updatePair = (index, side, value) => {
    const newPairs = [...pairs];
    newPairs[index] = {
      ...newPairs[index],
      [side]: value,
    };
    onChange({
      ...data,
      pairs: newPairs,
    });
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Matching Pairs
      </label>
      {pairs.map((pair, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              value={pair.left}
              onChange={(e) => updatePair(index, 'left', e.target.value)}
              placeholder="Left item"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                       focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <div className="sm:hidden absolute right-[-12px] top-1/2 -translate-y-1/2">
              <ArrowDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="hidden sm:flex items-center">
            <span className="text-gray-500 dark:text-gray-400">→</span>
          </div>
          <div className="flex-1 flex items-start sm:items-center gap-2">
            <input
              type="text"
              value={pair.right}
              onChange={(e) => updatePair(index, 'right', e.target.value)}
              placeholder="Right item"
              required
              className="w-[calc(100%-40px)] px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                       focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            {pairs.length > 1 && (
              <button
                type="button"
                onClick={() => removePair(index)}
                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full flex-shrink-0"
              >
                <Minus className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addPair}
        className="flex items-center gap-2 text-blue-600 dark:text-blue-400"
      >
        <Plus className="w-4 h-4" />
        Add Pair
      </button>
    </div>
  );
}