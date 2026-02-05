import { motion } from "motion/react";
import { useState } from "react";
import { Calendar, Clock, MapPin, MessageCircle, AlertCircle, ChevronRight } from "lucide-react";

interface ActiveRentalsProps {
  onRentalClick: (rentalId: string) => void;
}

const mockRentals = [
  {
    id: "rent-1",
    type: "renting",
    item: {
      title: "Дрель Bosch GSB 550",
      category: "Инструменты",
      image: "🔧",
    },
    owner: {
      name: "Алексей К.",
      avatar: "👨",
    },
    dates: {
      start: "5 фев",
      end: "6 фев",
      remaining: "Заканчивается завтра",
    },
    status: "active",
    statusText: "Активна",
    statusColor: "from-[#10B981] to-[#059669]",
  },
  {
    id: "rent-2",
    type: "lending",
    item: {
      title: "Велосипед Trek Marlin 5",
      category: "Спорт",
      image: "🚴",
    },
    renter: {
      name: "Мария В.",
      avatar: "👩",
    },
    dates: {
      start: "3 фев",
      end: "10 фев",
      remaining: "Осталось 4 дня",
    },
    status: "active",
    statusText: "Сдаётся",
    statusColor: "from-[#F59E0B] to-[#D97706]",
  },
  {
    id: "rent-3",
    type: "renting",
    item: {
      title: "Проектор Epson EH-TW5400",
      category: "Электроника",
      image: "📽️",
    },
    owner: {
      name: "Дмитрий С.",
      avatar: "👨‍💼",
    },
    dates: {
      start: "6 фев",
      end: "6 фев",
      remaining: "Истекает сегодня!",
    },
    status: "expiring",
    statusText: "Истекает",
    statusColor: "from-[#EF4444] to-[#DC2626]",
  },
];

export function ActiveRentals({ onRentalClick }: ActiveRentalsProps) {
  const [filter, setFilter] = useState<"all" | "renting" | "lending">("all");

  const filteredRentals =
    filter === "all"
      ? mockRentals
      : mockRentals.filter((rental) => rental.type === filter);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-[#111827] mb-4">Активные аренды</h1>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            {[
              { id: "all" as const, label: "Все", count: mockRentals.length },
              {
                id: "renting" as const,
                label: "Арендую",
                count: mockRentals.filter((r) => r.type === "renting").length,
              },
              {
                id: "lending" as const,
                label: "Сдаю",
                count: mockRentals.filter((r) => r.type === "lending").length,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                  filter === tab.id
                    ? "bg-[#4F46E5] text-white"
                    : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {filteredRentals.length > 0 ? (
          <div className="space-y-4">
            {filteredRentals.map((rental, index) => (
              <RentalCard
                key={rental.id}
                rental={rental}
                index={index}
                onClick={onRentalClick}
              />
            ))}
          </div>
        ) : (
          <EmptyState filter={filter} />
        )}
      </div>
    </div>
  );
}

function RentalCard({
  rental,
  index,
  onClick,
}: {
  rental: any;
  index: number;
  onClick: (id: string) => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(rental.id)}
      className="w-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all text-left"
    >
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <div
          className={`px-3 py-1 bg-gradient-to-r ${rental.statusColor} text-white text-xs font-semibold rounded-full`}
        >
          {rental.statusText}
        </div>
        {rental.status === "expiring" && (
          <div className="flex items-center gap-1 text-[#EF4444]">
            <AlertCircle className="w-4 h-4" />
            <span className="text-xs font-semibold">{rental.dates.remaining}</span>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex items-center gap-4 mb-4">
        {/* Item Image */}
        <div className="w-20 h-20 bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] rounded-xl flex items-center justify-center text-4xl flex-shrink-0">
          {rental.item.image}
        </div>

        {/* Item Info */}
        <div className="flex-1 min-w-0">
          <div className="text-xs text-[#6B7280] mb-1">{rental.item.category}</div>
          <h3 className="font-semibold text-[#111827] mb-2 truncate">
            {rental.item.title}
          </h3>
          <div className="flex items-center gap-2">
            <div className="text-2xl">
              {rental.type === "renting" ? rental.owner.avatar : rental.renter.avatar}
            </div>
            <div className="text-sm text-[#6B7280]">
              {rental.type === "renting" ? rental.owner.name : rental.renter.name}
            </div>
          </div>
        </div>

        <ChevronRight className="w-5 h-5 text-[#6B7280] flex-shrink-0" />
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 bg-[#F9FAFB] rounded-xl">
          <Calendar className="w-4 h-4 text-[#6B7280] mb-1" />
          <div className="text-xs text-[#6B7280]">Начало</div>
          <div className="text-sm font-semibold text-[#111827]">
            {rental.dates.start}
          </div>
        </div>

        <div className="p-3 bg-[#F9FAFB] rounded-xl">
          <Clock className="w-4 h-4 text-[#6B7280] mb-1" />
          <div className="text-xs text-[#6B7280]">Конец</div>
          <div className="text-sm font-semibold text-[#111827]">
            {rental.dates.end}
          </div>
        </div>

        <div className="p-3 bg-[#F9FAFB] rounded-xl flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-[#4F46E5]" />
        </div>
      </div>

      {/* Remaining Time */}
      {rental.status !== "expiring" && (
        <div className="mt-3 text-xs text-[#6B7280] text-center">
          {rental.dates.remaining}
        </div>
      )}
    </motion.button>
  );
}

function EmptyState({ filter }: { filter: string }) {
  const messages = {
    all: {
      title: "Нет активных аренд",
      description: "Когда вы что-то арендуете или сдаёте, это появится здесь",
      icon: "📦",
    },
    renting: {
      title: "Вы ничего не арендуете",
      description: "Найдите нужную вещь в каталоге и забронируйте",
      icon: "🔍",
    },
    lending: {
      title: "Вы ничего не сдаёте",
      description: "Создайте объявление и начните зарабатывать на своих вещах",
      icon: "💰",
    },
  };

  const message = messages[filter as keyof typeof messages] || messages.all;

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-8xl mb-6"
        >
          {message.icon}
        </motion.div>
        <h2 className="text-2xl font-bold text-[#111827] mb-3">{message.title}</h2>
        <p className="text-[#6B7280] mb-8">{message.description}</p>
        <button className="px-8 py-4 bg-[#4F46E5] text-white rounded-2xl font-semibold hover:bg-[#4338CA] transition-colors shadow-lg">
          {filter === "lending" ? "Создать объявление" : "К каталогу"}
        </button>
      </motion.div>
    </div>
  );
}
