import { motion } from "motion/react";
import { Search, Package, Filter, Inbox, Wifi } from "lucide-react";

interface EmptyStateProps {
  type: "no-results" | "no-items" | "no-filters" | "offline";
  onAction?: () => void;
}

export function EmptyState({ type, onAction }: EmptyStateProps) {
  const configs = {
    "no-results": {
      icon: Search,
      title: "Ничего не найдено",
      description: "Попробуйте изменить запрос или фильтры",
      action: "Сбросить фильтры",
      illustration: "🔍",
    },
    "no-items": {
      icon: Package,
      title: "Пока ничего нет",
      description: "В этой категории ещё нет доступных вещей. Проверьте другие категории или вернитесь позже",
      action: "К каталогу",
      illustration: "📦",
    },
    "no-filters": {
      icon: Filter,
      title: "Не нашли подходящее",
      description: "Измените фильтры, чтобы увидеть больше результатов",
      action: "Изменить фильтры",
      illustration: "🎯",
    },
    offline: {
      icon: Wifi,
      title: "Нет подключения",
      description: "Проверьте интернет-соединение и попробуйте снова",
      action: "Попробовать снова",
      illustration: "📡",
    },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center"
      >
        {/* Animated Illustration */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-8xl"
            >
              {config.illustration}
            </motion.div>
            {/* Pulse Ring */}
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-[#4F46E5] rounded-full"
            />
          </div>
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] rounded-2xl mb-6"
        >
          <Icon className="w-8 h-8 text-[#4F46E5]" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-2xl font-bold text-[#111827] mb-3"
        >
          {config.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="text-[#6B7280] mb-8 leading-relaxed"
        >
          {config.description}
        </motion.p>

        {/* Action Button */}
        {onAction && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAction}
            className="px-8 py-4 bg-[#4F46E5] text-white rounded-2xl font-semibold hover:bg-[#4338CA] transition-colors shadow-lg"
          >
            {config.action}
          </motion.button>
        )}

        {/* Tips (for no-results) */}
        {type === "no-results" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="mt-12 p-6 bg-[#F9FAFB] rounded-2xl text-left"
          >
            <h3 className="font-semibold text-[#111827] mb-3">Попробуйте:</h3>
            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li className="flex items-start gap-2">
                <span className="text-[#4F46E5] font-bold">•</span>
                <span>Проверить правильность написания</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4F46E5] font-bold">•</span>
                <span>Использовать более общие термины</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4F46E5] font-bold">•</span>
                <span>Убрать или изменить фильтры</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4F46E5] font-bold">•</span>
                <span>Посмотреть похожие категории</span>
              </li>
            </ul>
          </motion.div>
        )}

        {/* Popular Categories (for no-items) */}
        {type === "no-items" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="mt-12"
          >
            <h3 className="font-semibold text-[#111827] mb-4">
              Популярные категории
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🔧", name: "Инструменты" },
                { icon: "⚽", name: "Спорт" },
                { icon: "📱", name: "Электроника" },
                { icon: "👶", name: "Детское" },
              ].map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#4F46E5] hover:shadow-md transition-all"
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="text-sm font-semibold text-[#111827]">
                    {category.name}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

// Loading State Component
export function LoadingState() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-[#E5E7EB] border-t-[#4F46E5] rounded-full mx-auto mb-4"
        />
        <p className="text-[#6B7280]">Загрузка...</p>
      </motion.div>
    </div>
  );
}

// Skeleton Loader for Items
export function ItemSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="space-y-4 p-4"
      >
        <div className="aspect-square bg-[#F3F4F6] rounded-xl" />
        <div className="space-y-2">
          <div className="h-4 bg-[#F3F4F6] rounded w-3/4" />
          <div className="h-4 bg-[#F3F4F6] rounded w-1/2" />
          <div className="h-6 bg-[#F3F4F6] rounded w-1/3 mt-4" />
        </div>
      </motion.div>
    </div>
  );
}
