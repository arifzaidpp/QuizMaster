import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic
  };

  return (
    <form onSubmit={handleSearch} className="hidden md:block flex-1 mx-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search quizzes..."
          className="w-full max-w-md pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 
                   bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white
                   focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>
    </form>
  );
}