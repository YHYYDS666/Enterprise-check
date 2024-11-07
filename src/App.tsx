import React, { useState, useMemo } from 'react';
import { Shield, Database, AlertTriangle } from 'lucide-react';
import SearchBar from './components/SearchBar';
import MatrixRain from './components/MatrixRain';
import ResultCard from './components/ResultCard';
import { SearchResult } from './data/searchData';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchData, setSearchData] = useState<SearchResult[]>([]);

  const searchResults = useMemo(() => {
    if (!searchQuery) return [];
    
    const query = searchQuery.toLowerCase();
    return searchData.filter(item => 
      item.company.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query)
    );
  }, [searchQuery, searchData]);

  const handleSearch = async (query: string) => {
    setIsSearching(true);
    try {
      const response = await fetch(`http://localhost:3003/api/search?query=${encodeURIComponent(query)}`);
      const data: any[] = await response.json();
      setSearchQuery(query);
      // 将爬虫结果转换为 SearchResult 格式
      const results = data.map((item: any, index: number) => ({
        id: searchData.length + index + 1,
        company: query,
        title: item.title,
        summary: item.content,
        severity: item.severity || "medium",
        date: item.date || new Date().toISOString().split('T')[0]
      }));
      // 更新搜索结果
      setSearchData([...searchData, ...results]);
    } catch (error) {
      console.error('搜索失败:', error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 relative">
      <div className="absolute inset-0">
        <MatrixRain />
      </div>
      <div className="relative z-10">
        <header className="p-4 flex items-center justify-between border-b border-green-500/20">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8" />
            <h1 className="text-2xl font-mono font-bold tracking-wider">数据猎手</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Database className="w-6 h-6" />
            <AlertTriangle className="w-6 h-6" />
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-green-400">
              揭露企业秘密
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              访问我们的加密数据库，了解企业违规和数据泄露事件。
              由量子算法驱动的实时情报收集系统。
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <SearchBar onSearch={handleSearch} isSearching={isSearching} />
          </div>

          {searchQuery && !isSearching && (
            <div className="mb-8">
              <p className="text-gray-400 mb-4">
                找到 {searchResults.length} 条相关结果
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {searchResults.map((result) => (
                  <ResultCard key={result.id} result={result} />
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { label: "数据点", value: "250万+" },
              { label: "追踪企业", value: "5万+" },
              { label: "每日更新", value: "1000+" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-green-500/20 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;