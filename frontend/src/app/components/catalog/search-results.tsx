import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, SlidersHorizontal, Grid, List, Star, MapPin } from "lucide-react";

interface SearchResultsProps {
  query: string;
  onBack: () => void;
  onFilters: () => void;
  onItemClick: (itemId: number) => void;
}

const mockResults = [
  {
    id: 1,
    title: "Дрель Bosch GSB 550",
    category: "Инструменты",
    price: 300,
    owner: "Алексей К.",
    rating: 4.9,
    reviews: 24,
    distance: "50м",
    image: "🔧",
    available: true,
  },
  {
    id: 2,
    title: "Дрель ударная Makita HP1631",
    category: "Инструменты",
    price: 350,
    owner: "Игорь М.",
    rating: 4.7,
    reviews: 18,
    distance: "120м",
    image: "🔨",
    available: true,
  },
  {
    id: 3,
    title: "Дрель-шуруповёрт аккумуляторная",
    category: "Инструменты",
    price: 250,
    owner: "Сергей П.",
    rating: 4.8,
    reviews: 32,
    distance: "200м",
    image: "🔧",
    available: false,
  },
  {
    id: 4,
    title: "Перфоратор Bosch GBH 2-26",
    category: "Инструменты",
    price: 400,
    owner: "Владимир К.",
    rating: 5.0,
    reviews: 15,
    distance: "300м",
    image: "⚒️",
    available: true,
  },
];

type ViewMode = "grid" | "list";
type SortOption = "relevance" | "price-asc" | "price-desc" | "rating" | "distance";

export function SearchResults({
  query,
  onBack,
  onFilters,
  onItemClick,
}: SearchResultsProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortOption>("relevance");

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={onBack}
              className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[#111827]" />
            </button>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-[#111827]">
                Результаты поиска
              </h1>
              <p className="text-sm text-[#6B7280]">
                По запросу "{query}" • {mockResults.length} результатов
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="flex-1 px-4 py-2 bg-[#F3F4F6] rounded-xl text-sm font-medium text-[#111827] outline-none"
            >
              <option value="relevance">По релевантности</option>
              <option value="price-asc">Сначала дешёвые</option>
              <option value="price-desc">Сначала дорогие</option>
              <option value="rating">По рейтингу</option>
              <option value="distance">По расстоянию</option>
            </select>

            {/* View Toggle */}
            <div className="flex gap-1 bg-[#F3F4F6] rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-white shadow-sm"
                    : "hover:bg-[#E5E7EB]"
                }`}
              >
                <Grid
                  className={`w-5 h-5 ${
                    viewMode === "grid" ? "text-[#4F46E5]" : "text-[#6B7280]"
                  }`}
                />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-white shadow-sm"
                    : "hover:bg-[#E5E7EB]"
                }`}
              >
                <List
                  className={`w-5 h-5 ${
                    viewMode === "list" ? "text-[#4F46E5]" : "text-[#6B7280]"
                  }`}
                />
              </button>
            </div>

            {/* Filters */}
            <button
              onClick={onFilters}
              className="px-4 py-2 bg-[#4F46E5] rounded-xl hover:bg-[#4338CA] transition-colors flex items-center gap-2"
            >
              <SlidersHorizontal className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white">Фильтры</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockResults.map((item, index) => (
              <GridItemCard
                key={item.id}
                item={item}
                index={index}
                onClick={onItemClick}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {mockResults.map((item, index) => (
              <ListItemCard
                key={item.id}
                item={item}
                index={index}
                onClick={onItemClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function GridItemCard({
  item,
  index,
  onClick,
}: {
  item: any;
  index: number;
  onClick: (id: number) => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(item.id)}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all text-left"
    >
      {/* Image */}
      <div className="relative aspect-square bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] flex items-center justify-center">
        <div className="text-6xl">{item.image}</div>
        {!item.available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">Недоступно</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="text-xs text-[#6B7280] mb-1">{item.category}</div>
        <h3 className="font-semibold text-[#111827] mb-2 line-clamp-1">
          {item.title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
            <span className="text-sm font-semibold text-[#111827]">{item.rating}</span>
          </div>
          <span className="text-xs text-[#6B7280]">({item.reviews})</span>
          <div className="flex-1" />
          <div className="flex items-center gap-1 text-xs text-[#6B7280]">
            <MapPin className="w-3 h-3" />
            {item.distance}
          </div>
        </div>

        <div className="text-xs text-[#6B7280] mb-3">{item.owner}</div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-[#4F46E5]">{item.price}₽</span>
            <span className="text-xs text-[#6B7280]">/день</span>
          </div>
          {item.available && (
            <div className="px-3 py-1 bg-[#D1FAE5] text-[#065F46] text-xs font-semibold rounded-full">
              Доступно
            </div>
          )}
        </div>
      </div>
    </motion.button>
  );
}

function ListItemCard({
  item,
  index,
  onClick,
}: {
  item: any;
  index: number;
  onClick: (id: number) => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(item.id)}
      className="w-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all text-left flex items-center gap-4"
    >
      {/* Image */}
      <div className="relative w-24 h-24 flex-shrink-0 bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] rounded-xl flex items-center justify-center">
        <div className="text-4xl">{item.image}</div>
        {!item.available && (
          <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
            <span className="text-white font-semibold text-xs">Недоступно</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="text-xs text-[#6B7280] mb-1">{item.category}</div>
        <h3 className="font-semibold text-[#111827] mb-2 truncate">{item.title}</h3>

        <div className="flex items-center gap-4 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
            <span className="text-sm font-semibold text-[#111827]">{item.rating}</span>
            <span className="text-xs text-[#6B7280]">({item.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-[#6B7280]">
            <MapPin className="w-4 h-4" />
            {item.distance}
          </div>
        </div>

        <div className="text-sm text-[#6B7280]">{item.owner}</div>
      </div>

      {/* Price */}
      <div className="text-right flex-shrink-0">
        <div className="mb-2">
          <div className="text-2xl font-bold text-[#4F46E5]">{item.price}₽</div>
          <div className="text-xs text-[#6B7280]">за день</div>
        </div>
        {item.available && (
          <div className="px-3 py-1 bg-[#D1FAE5] text-[#065F46] text-xs font-semibold rounded-full">
            Доступно
          </div>
        )}
      </div>
    </motion.button>
  );
}
