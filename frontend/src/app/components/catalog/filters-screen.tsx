import { motion } from "motion/react";
import { useState } from "react";
import { X, MapPin, DollarSign, Star, Calendar } from "lucide-react";

interface FiltersScreenProps {
  onClose: () => void;
  onApply: (filters: FilterState) => void;
}

interface FilterState {
  category: string[];
  priceRange: [number, number];
  distance: number;
  rating: number;
  availability: string;
}

const categories = [
  { id: "tools", name: "Инструменты", icon: "🔧" },
  { id: "sports", name: "Спорт", icon: "⚽" },
  { id: "electronics", name: "Электроника", icon: "📱" },
  { id: "kids", name: "Детское", icon: "👶" },
  { id: "events", name: "Мероприятия", icon: "🎉" },
  { id: "other", name: "Другое", icon: "📦" },
];

export function FiltersScreen({ onClose, onApply }: FiltersScreenProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    priceRange: [0, 5000],
    distance: 500,
    rating: 0,
    availability: "all",
  });

  const handleCategoryToggle = (categoryId: string) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category.includes(categoryId)
        ? prev.category.filter((c) => c !== categoryId)
        : [...prev.category, categoryId],
    }));
  };

  const handleReset = () => {
    setFilters({
      category: [],
      priceRange: [0, 5000],
      distance: 500,
      rating: 0,
      availability: "all",
    });
  };

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  const activeFiltersCount =
    filters.category.length +
    (filters.rating > 0 ? 1 : 0) +
    (filters.availability !== "all" ? 1 : 0);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 bg-white z-50 flex flex-col"
    >
      {/* Header */}
      <div className="border-b border-[#E5E7EB] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-colors"
            >
              <X className="w-5 h-5 text-[#111827]" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-[#111827]">Фильтры</h1>
              {activeFiltersCount > 0 && (
                <p className="text-sm text-[#6B7280]">
                  Выбрано: {activeFiltersCount}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={handleReset}
            className="text-sm text-[#4F46E5] font-semibold hover:text-[#4338CA]"
          >
            Сбросить
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
          {/* Categories */}
          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-4">Категории</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  onClick={() => handleCategoryToggle(category.id)}
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    filters.category.includes(category.id)
                      ? "bg-[#EEF2FF] border-[#4F46E5]"
                      : "bg-white border-[#E5E7EB] hover:border-[#4F46E5]"
                  }`}
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div
                    className={`text-sm font-semibold ${
                      filters.category.includes(category.id)
                        ? "text-[#4F46E5]"
                        : "text-[#111827]"
                    }`}
                  >
                    {category.name}
                  </div>
                  {filters.category.includes(category.id) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="mt-2 w-6 h-6 bg-[#4F46E5] rounded-full flex items-center justify-center mx-auto"
                    >
                      <span className="text-white text-sm">✓</span>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </section>

          {/* Price Range */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-5 h-5 text-[#6B7280]" />
              <h2 className="text-lg font-semibold text-[#111827]">Цена за день</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#6B7280]">От</span>
                <span className="font-semibold text-[#4F46E5]">
                  {filters.priceRange[0]}₽
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="5000"
                step="50"
                value={filters.priceRange[0]}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    priceRange: [Number(e.target.value), prev.priceRange[1]],
                  }))
                }
                className="w-full h-2 bg-[#E5E7EB] rounded-full appearance-none cursor-pointer slider"
              />
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#6B7280]">До</span>
                <span className="font-semibold text-[#4F46E5]">
                  {filters.priceRange[1]}₽
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="5000"
                step="50"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    priceRange: [prev.priceRange[0], Number(e.target.value)],
                  }))
                }
                className="w-full h-2 bg-[#E5E7EB] rounded-full appearance-none cursor-pointer slider"
              />
            </div>
          </section>

          {/* Distance */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#6B7280]" />
              <h2 className="text-lg font-semibold text-[#111827]">Расстояние</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">Максимум</span>
                <span className="font-semibold text-[#4F46E5]">
                  {filters.distance}м
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="1000"
                step="50"
                value={filters.distance}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    distance: Number(e.target.value),
                  }))
                }
                className="w-full h-2 bg-[#E5E7EB] rounded-full appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-[#6B7280]">
                <span>50м</span>
                <span>1000м</span>
              </div>
            </div>
          </section>

          {/* Rating */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-[#6B7280]" />
              <h2 className="text-lg font-semibold text-[#111827]">Минимальный рейтинг</h2>
            </div>
            <div className="flex gap-2">
              {[0, 3, 4, 4.5, 5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setFilters((prev) => ({ ...prev, rating }))}
                  className={`flex-1 py-3 rounded-xl border-2 transition-all ${
                    filters.rating === rating
                      ? "bg-[#EEF2FF] border-[#4F46E5]"
                      : "bg-white border-[#E5E7EB] hover:border-[#4F46E5]"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    {rating === 0 ? (
                      <span className="text-sm font-semibold">Любой</span>
                    ) : (
                      <>
                        <Star
                          className={`w-4 h-4 ${
                            filters.rating === rating
                              ? "fill-[#F59E0B] text-[#F59E0B]"
                              : "text-[#6B7280]"
                          }`}
                        />
                        <span
                          className={`text-sm font-semibold ${
                            filters.rating === rating
                              ? "text-[#4F46E5]"
                              : "text-[#6B7280]"
                          }`}
                        >
                          {rating}+
                        </span>
                      </>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Availability */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-[#6B7280]" />
              <h2 className="text-lg font-semibold text-[#111827]">Доступность</h2>
            </div>
            <div className="space-y-2">
              {[
                { id: "all", label: "Все", description: "Включая недоступные" },
                {
                  id: "available",
                  label: "Только доступные",
                  description: "Можно арендовать прямо сейчас",
                },
                {
                  id: "today",
                  label: "Доступны сегодня",
                  description: "Можно забрать сегодня",
                },
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, availability: option.id }))
                  }
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    filters.availability === option.id
                      ? "bg-[#EEF2FF] border-[#4F46E5]"
                      : "bg-white border-[#E5E7EB] hover:border-[#4F46E5]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                        filters.availability === option.id
                          ? "border-[#4F46E5] bg-[#4F46E5]"
                          : "border-[#E5E7EB]"
                      }`}
                    >
                      {filters.availability === option.id && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div
                        className={`font-semibold mb-1 ${
                          filters.availability === option.id
                            ? "text-[#4F46E5]"
                            : "text-[#111827]"
                        }`}
                      >
                        {option.label}
                      </div>
                      <div className="text-sm text-[#6B7280]">{option.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#E5E7EB] p-4">
        <button
          onClick={handleApply}
          className="w-full py-4 bg-[#4F46E5] text-white rounded-2xl font-semibold hover:bg-[#4338CA] transition-colors"
        >
          Применить фильтры
        </button>
      </div>
    </motion.div>
  );
}
