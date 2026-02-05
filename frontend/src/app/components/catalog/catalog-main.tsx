import { motion } from "motion/react";
import { useState } from "react";
import { Search, SlidersHorizontal, MapPin, TrendingUp, Star } from "lucide-react";

interface CatalogMainProps {
  onSearch: () => void;
  onFilters: () => void;
  onItemClick: (itemId: number) => void;
  onCategoryClick: (categoryId: string) => void;
}

const quickCategories = [
  { id: "tools", icon: "🔧", name: "Инструменты", count: 1200 },
  { id: "sports", icon: "⚽", name: "Спорт", count: 800 },
  { id: "electronics", icon: "📱", name: "Электроника", count: 500 },
  { id: "kids", icon: "👶", name: "Детское", count: 600 },
  { id: "events", icon: "🎉", name: "Мероприятия", count: 400 },
  { id: "other", icon: "📦", name: "Другое", count: 300 },
];

const popularItems = [
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
    title: "Велосипед Trek Marlin 5",
    category: "Спорт",
    price: 500,
    owner: "Мария В.",
    rating: 5.0,
    reviews: 18,
    distance: "120м",
    image: "🚴",
    available: true,
  },
  {
    id: 3,
    title: "Проектор Epson EH-TW5400",
    category: "Электроника",
    price: 800,
    owner: "Дмитрий С.",
    rating: 4.8,
    reviews: 12,
    distance: "80м",
    image: "📽️",
    available: false,
  },
  {
    id: 4,
    title: "Коляска Bugaboo Cameleon",
    category: "Детское",
    price: 200,
    owner: "Ольга П.",
    rating: 4.7,
    reviews: 15,
    distance: "200м",
    image: "👶",
    available: true,
  },
];

const trendingItems = [
  { id: 5, name: "Перфоратор", image: "🔨", growth: "+45%" },
  { id: 6, name: "Лыжи", image: "⛷️", growth: "+38%" },
  { id: 7, name: "Палатка", image: "⛺", growth: "+32%" },
];

export function CatalogMain({
  onSearch,
  onFilters,
  onItemClick,
  onCategoryClick,
}: CatalogMainProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-[#111827]">Каталог</h1>
              <div className="flex items-center gap-2 text-sm text-[#6B7280] mt-1">
                <MapPin className="w-4 h-4" />
                <span>ЖК Солнечный</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex gap-3">
            <button
              onClick={onSearch}
              className="flex-1 flex items-center gap-3 px-4 py-3 bg-[#F3F4F6] rounded-xl text-left text-[#6B7280] hover:bg-[#E5E7EB] transition-colors"
            >
              <Search className="w-5 h-5" />
              <span>Что ищете?</span>
            </button>
            <button
              onClick={onFilters}
              className="px-4 py-3 bg-[#4F46E5] rounded-xl hover:bg-[#4338CA] transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Quick Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-lg font-semibold text-[#111827] mb-4">Категории</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {quickCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedCategory(category.id);
                  onCategoryClick(category.id);
                }}
                className={`p-4 rounded-2xl text-center transition-all ${
                  selectedCategory === category.id
                    ? "bg-[#4F46E5] shadow-lg"
                    : "bg-white hover:shadow-md"
                }`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div
                  className={`text-xs font-semibold mb-1 ${
                    selectedCategory === category.id
                      ? "text-white"
                      : "text-[#111827]"
                  }`}
                >
                  {category.name}
                </div>
                <div
                  className={`text-xs ${
                    selectedCategory === category.id
                      ? "text-white/80"
                      : "text-[#6B7280]"
                  }`}
                >
                  {category.count}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Trending */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#F59E0B]" />
            <h2 className="text-lg font-semibold text-[#111827]">В тренде</h2>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {trendingItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onItemClick(item.id)}
                className="flex-shrink-0 w-32 p-4 bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-2">{item.image}</div>
                <div className="text-sm font-semibold text-[#111827] mb-1">
                  {item.name}
                </div>
                <div className="text-xs text-[#10B981] font-semibold">
                  {item.growth}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Popular Items */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#111827]">Популярное</h2>
            <button className="text-sm text-[#4F46E5] font-semibold hover:text-[#4338CA]">
              Все →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularItems.map((item, index) => (
              <ItemCard key={item.id} item={item} index={index} onClick={onItemClick} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

function ItemCard({
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
      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
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
        {/* Category */}
        <div className="text-xs text-[#6B7280] mb-1">{item.category}</div>

        {/* Title */}
        <h3 className="font-semibold text-[#111827] mb-2 line-clamp-1">
          {item.title}
        </h3>

        {/* Rating & Reviews */}
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

        {/* Owner */}
        <div className="text-xs text-[#6B7280] mb-3">{item.owner}</div>

        {/* Price */}
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
