import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Search, X, Clock, TrendingUp, ArrowUpRight } from "lucide-react";

interface SearchScreenProps {
  onClose: () => void;
  onSearch: (query: string) => void;
}

const recentSearches = [
  "Дрель",
  "Велосипед",
  "Проектор",
  "Палатка",
];

const popularSearches = [
  { query: "Перфоратор", count: 234 },
  { query: "Детская коляска", count: 189 },
  { query: "Сноуборд", count: 156 },
  { query: "Фотоаппарат", count: 142 },
  { query: "Пылесос", count: 128 },
];

const suggestions = [
  "Дрель Bosch GSB 550",
  "Дрель ударная Makita",
  "Дрель аккумуляторная",
];

export function SearchScreen({ onClose, onSearch }: SearchScreenProps) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    setShowSuggestions(query.length > 0);
  }, [query]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    onSearch(searchQuery);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 flex flex-col"
    >
      {/* Header */}
      <div className="border-b border-[#E5E7EB] p-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-[#F3F4F6] rounded-xl">
            <Search className="w-5 h-5 text-[#6B7280]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && query) {
                  handleSearch(query);
                }
              }}
              placeholder="Что ищете?"
              autoFocus
              className="flex-1 bg-transparent outline-none text-[#111827] placeholder:text-[#6B7280]"
            />
            {query && (
              <button onClick={() => setQuery("")} className="p-1">
                <X className="w-4 h-4 text-[#6B7280]" />
              </button>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-[#6B7280] hover:text-[#111827] font-semibold"
          >
            Отмена
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <AnimatePresence mode="wait">
            {showSuggestions ? (
              <motion.div
                key="suggestions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Autocomplete Suggestions */}
                <div className="space-y-2">
                  {suggestions
                    .filter((s) =>
                      s.toLowerCase().includes(query.toLowerCase())
                    )
                    .map((suggestion, index) => (
                      <motion.button
                        key={suggestion}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        onClick={() => handleSearch(suggestion)}
                        className="w-full flex items-center gap-3 p-4 bg-white hover:bg-[#F9FAFB] rounded-xl transition-colors text-left border border-[#E5E7EB]"
                      >
                        <Search className="w-5 h-5 text-[#6B7280]" />
                        <span className="flex-1 text-[#111827]">{suggestion}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#6B7280]" />
                      </motion.button>
                    ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="history"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* Recent Searches */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-[#6B7280]" />
                    <h2 className="font-semibold text-[#111827]">Недавние</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <motion.button
                        key={search}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        onClick={() => handleSearch(search)}
                        className="px-4 py-2 bg-[#F3F4F6] hover:bg-[#E5E7EB] rounded-full text-sm text-[#111827] transition-colors"
                      >
                        {search}
                      </motion.button>
                    ))}
                  </div>
                </section>

                {/* Popular Searches */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-[#F59E0B]" />
                    <h2 className="font-semibold text-[#111827]">Популярные запросы</h2>
                  </div>
                  <div className="space-y-2">
                    {popularSearches.map((item, index) => (
                      <motion.button
                        key={item.query}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={() => handleSearch(item.query)}
                        className="w-full flex items-center justify-between p-4 bg-white hover:bg-[#F9FAFB] rounded-xl transition-colors border border-[#E5E7EB]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-lg flex items-center justify-center text-white text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-[#111827] font-medium">
                            {item.query}
                          </span>
                        </div>
                        <span className="text-xs text-[#6B7280]">
                          {item.count} запросов
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </section>

                {/* Quick Categories */}
                <section>
                  <h2 className="font-semibold text-[#111827] mb-4">
                    Быстрый доступ
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: "🔧", name: "Инструменты", color: "from-[#F97316] to-[#EA580C]" },
                      { icon: "⚽", name: "Спорт", color: "from-[#10B981] to-[#059669]" },
                      { icon: "📱", name: "Электроника", color: "from-[#3B82F6] to-[#2563EB]" },
                      { icon: "👶", name: "Детское", color: "from-[#EC4899] to-[#DB2777]" },
                    ].map((category, index) => (
                      <motion.button
                        key={category.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                        onClick={() => handleSearch(category.name)}
                        className={`p-4 bg-gradient-to-br ${category.color} rounded-2xl hover:shadow-lg transition-shadow`}
                      >
                        <div className="text-3xl mb-2">{category.icon}</div>
                        <div className="text-sm font-semibold text-white">
                          {category.name}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
