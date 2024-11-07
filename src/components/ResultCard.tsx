import React from 'react';
import { AlertTriangle, Calendar, ChevronRight } from 'lucide-react';
import { SearchResult } from '../data/searchData';

interface ResultCardProps {
  result: SearchResult;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const severityMap = {
    high: { color: 'text-red-500', text: '高风险' },
    medium: { color: 'text-yellow-500', text: '中风险' },
    low: { color: 'text-blue-500', text: '低风险' }
  };

  const severity = severityMap[result.severity as keyof typeof severityMap] || 
                  { color: 'text-gray-500', text: '未知' };

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-green-500/20 backdrop-blur-sm
                    hover:border-green-500 transition-all duration-300 group cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300
                       transition-colors duration-300">
          {result.title}
        </h3>
        <div className="flex items-center space-x-2">
          <span className={`text-sm ${severity.color}`}>{severity.text}</span>
          <AlertTriangle className={`w-5 h-5 ${severity.color}`} />
        </div>
      </div>
      
      <p className="text-gray-400 mb-4">{result.summary}</p>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4" />
          <span>{result.date}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">{result.company}</span>
          <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ResultCard;