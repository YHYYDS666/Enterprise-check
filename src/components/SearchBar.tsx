import React, { useState } from 'react';
import { Search, Loader } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isSearching: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isSearching }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative group z-50">
      <div className="relative z-50">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-gray-800/50 border-2 border-green-500/20 rounded-lg py-4 px-6 pl-12
                   text-green-400 placeholder-gray-500 focus:outline-none focus:border-green-500
                   transition-all duration-300 backdrop-blur-sm"
          placeholder="输入公司名称或关键词搜索..."
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          {isSearching ? (
            <Loader className="w-6 h-6 animate-spin text-green-500" />
          ) : (
            <Search className="w-6 h-6 text-green-500" />
          )}
        </div>
      </div>
      
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 opacity-0 
                    group-hover:opacity-20 transition-opacity duration-300" />
    </form>
  );
};

export default SearchBar;