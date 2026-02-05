import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, TrendingUp, Star, MapPin } from "lucide-react";

interface CategoryViewProps {
  categoryId: string;
  onBack: () => void;
  onItemClick: (itemId: number) => void;
}

const categoryData: Record<string, { name: string; icon: string; description: string }> = {
  tools: {
    name: "Инструменты",
    icon: "🔧",
    description: "Дрели, перфораторы, шуруповёрты и другой инструмент",
  },
  sports: {
    name: "Спорт и туризм",
    icon: "⚽",
    description: "Велосипеды, лыжи, палатки и спортивный инвентарь",
  },
  electronics: {
    name: "Электроника",
    icon: "📱",
    description: "Проекторы, камеры, объективы и гаджеты",
  },
  kids: {
    name: "Детское",
    icon: "👶",
    description: "Коляски, кроватки, игрушки и детские товары",
  },
  events: {
    name: "Мероприятия",
    icon: "🎉",
    description: "Посуда, мебель, декор для праздников",
  },
  other: {
    name: "Другое",
    icon: "📦",
    description: "Всё остальное, что может пригодиться",
  },
};

const mockItems = {
  tools: [
    {
      id: 1,
      title: "Дрель Bosch GSB 550",
      price: 300,
      owner: "Алексей К.",
      rating: 4.9,
      reviews: 24,
      distance: "50м",
      image: "🔧",
      available: true,
      popular: true,
    },
    {
      id: 2,
      title: "Перфоратор Makita",
      price: 400,
      owner: "Игорь М.",
      rating: 4.8,
      reviews: 18,
      distance: "120м",
      image: "⚒️",
      available: true,
      popular: true,
    },
    {
      id: 3,
      title: "Шуруповёрт DeWalt",
      price: 250,
      owner: "Сергей П.",
      rating: 4.7,
      reviews: 15,
      distance: "200м",
      image: "🔩",
      available: true,
      popular: false,
    },
    {
      id: 4,
      title: "Болгарка Metabo",
      price: 350,
      owner: "Владимир К.",
      rating: 5.0,
      reviews: 12,
      distance: "180м",
      image: "⚙️",
      available: false,
      popular: false,
    },
  ],
};

export function CategoryView({ categoryId, onBack, onItemClick }: CategoryViewProps) {
  const [sortBy, setSortBy] = useState<string>("popular");
  const category = categoryData[categoryId];
  const items = mockItems[categoryId as keyof typeof mockItems] || mockItems.tools;

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#6B7280] hover:text-[#111827] mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Назад</span>
          </button>

          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] rounded-2xl flex items-center justify-center text-4xl">
              {category?.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-[#111827] mb-1">
                {category?.name}
              </h1>
              <p className="text-[#6B7280]">{category?.description}</p>
              <div className="mt-2 text-sm text-[#6B7280]">
                {items.length} доступных вещей
              </div>
            </div>
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 bg-[#F3F4F6] rounded-xl text-sm font-medium text-[#111827] outline-none"
          >
            <option value="popular">Популярное</option>
            <option value="price-asc">Сначала дешёвые</option>
            <option value="price-desc">Сначала дорогие</option>
            <option value="rating">По рейтингу</option>
            <option value="distance">По расстоянию</option>
          </select>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Popular Section */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#F59E0B]" />
            <h2 className="text-lg font-semibold text-[#111827]">Популярное</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items
              .filter((item) => item.popular)
              .map((item, index) => (
                <FeaturedItemCard
                  key={item.id}
                  item={item}
                  index={index}
                  onClick={onItemClick}
                />
              ))}
          </div>
        </section>

        {/* All Items */}
        <section>
          <h2 className="text-lg font-semibold text-[#111827] mb-4">
            Все в категории
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, index) => (
              <ItemCard key={item.id} item={item} index={index} onClick={onItemClick} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function FeaturedItemCard({
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
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(item.id)}
      className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all text-left flex items-center gap-4"
    >
      {/* Image */}
      <div className="relative w-24 h-24 flex-shrink-0 bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] rounded-xl flex items-center justify-center">
        <div className="text-4xl">{item.image}</div>
        {!item.available && (
          <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
            <span className="text-white font-semibold text-xs">Недоступно</span>
          </div>
        )}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F59E0B] rounded-full flex items-center justify-center">
          <TrendingUp className="w-3 h-3 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
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
        <div className="text-2xl font-bold text-[#4F46E5]">{item.price}₽</div>
        <div className="text-xs text-[#6B7280]">за день</div>
      </div>
    </motion.button>
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
