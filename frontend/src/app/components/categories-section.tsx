import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

const categories = [
  {
    emoji: "🔧",
    name: "Инструменты",
    gradient: "from-[#F97316] to-[#EA580C]",
    examples: "Дрели, перфораторы, шуруповёрты",
    popular: "Дрель Bosch — от 200₽",
    stats: "1200+ вещей",
  },
  {
    emoji: "⚽",
    name: "Спорт и туризм",
    gradient: "from-[#10B981] to-[#059669]",
    examples: "Велосипеды, лыжи, палатки",
    popular: "Велосипед Trek — от 400₽",
    stats: "800+ вещей",
  },
  {
    emoji: "📱",
    name: "Электроника",
    gradient: "from-[#3B82F6] to-[#2563EB]",
    examples: "Проекторы, камеры, объективы",
    popular: "Проектор Epson — от 500₽",
    stats: "500+ вещей",
  },
  {
    emoji: "👶",
    name: "Детское",
    gradient: "from-[#EC4899] to-[#DB2777]",
    examples: "Коляски, кроватки, игрушки",
    popular: "Коляска Bugaboo — от 300₽",
    stats: "600+ вещей",
  },
  {
    emoji: "🎉",
    name: "Мероприятия",
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    examples: "Посуда, мебель, декор",
    popular: "Шатёр 3x3м — от 1000₽",
    stats: "400+ вещей",
  },
  {
    emoji: "📦",
    name: "Другое",
    gradient: "from-[#6B7280] to-[#4B5563]",
    examples: "Всё остальное",
    popular: "Пароочиститель — от 350₽",
    stats: "300+ вещей",
  },
];

export function CategoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Что арендуют соседи
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              {...category}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  emoji,
  name,
  gradient,
  examples,
  popular,
  stats,
  index,
  isInView,
}: {
  emoji: string;
  name: string;
  gradient: string;
  examples: string;
  popular: string;
  stats: string;
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-shadow h-full"
      >
        {/* Icon Background */}
        <div className="relative mb-6">
          <div
            className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg mx-auto`}
          >
            <motion.div
              animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="text-4xl"
            >
              {emoji}
            </motion.div>
          </div>
        </div>

        {/* Category Name */}
        <h3 className="text-xl font-semibold text-[#111827] text-center mb-3">
          {name}
        </h3>

        {/* Examples */}
        <p className="text-sm text-[#6B7280] text-center mb-4 min-h-[40px]">
          {examples}
        </p>

        {/* Popular Item */}
        <div className="bg-[#F9FAFB] rounded-xl p-3 mb-3">
          <p className="text-xs text-[#6B7280] mb-1">Популярное:</p>
          <p className="text-sm font-semibold text-[#111827]">{popular}</p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-2 text-[#4F46E5] font-semibold text-sm">
          <span>{stats}</span>
        </div>

        {/* Hover Button */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={
            isHovered
              ? { opacity: 1, height: "auto", marginTop: 16 }
              : { opacity: 0, height: 0, marginTop: 0 }
          }
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <button
            className={`w-full py-3 bg-gradient-to-r ${gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-shadow`}
          >
            Смотреть категорию
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
