import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Search, Calendar, Handshake } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Найдите нужную вещь",
    description: "Каталог вещей соседей из вашего ЖК. Фильтры по категориям, цене, рейтингу.",
    demoType: "search",
  },
  {
    number: "2",
    icon: Calendar,
    title: "Забронируйте онлайн",
    description: "Выберите даты, оплатите безопасно. Владелец получит уведомление.",
    demoType: "calendar",
  },
  {
    number: "3",
    icon: Handshake,
    title: "Заберите у соседа",
    description: "Встретьтесь в удобное время. Вещь рядом — в соседнем подъезде.",
    demoType: "map",
  },
];

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent mb-4">
            Арендо-Соседи — это просто
          </h2>
        </motion.div>

        {/* Steps Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#4F46E5]">
            <motion.div
              className="h-full bg-white"
              initial={{ scaleX: 1 }}
              animate={isInView ? { scaleX: 0 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
            {/* Animated Dots */}
            {isInView && (
              <>
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-[#4F46E5]"
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-[#7C3AED]"
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                />
              </>
            )}
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} index={index} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#111827] mb-2">
                И всё это — в вашем Telegram
              </h3>
              <p className="text-[#6B7280]">Без установки отдельного приложения</p>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-48 h-96 bg-gradient-to-br from-[#1F2937] to-[#374151] rounded-[3rem] p-4 shadow-2xl relative overflow-hidden"
            >
              {/* Phone Screen */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col">
                <div className="bg-[#4F46E5] text-white p-4 text-center font-semibold">
                  Арендо-Соседи
                </div>
                <div className="flex-1 p-3 bg-[#F9FAFB] overflow-hidden">
                  <div className="space-y-2">
                    {["🔧 Дрель Bosch", "⚽ Велосипед", "📱 Проектор"].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: -50, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ delay: 1.4 + i * 0.2 }}
                        className="bg-white rounded-lg p-2 text-xs shadow-sm"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({
  number,
  icon: Icon,
  title,
  description,
  demoType,
  index,
  isInView,
}: {
  number: string;
  icon: any;
  title: string;
  description: string;
  demoType: string;
  index: number;
  isInView: boolean;
}) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Number with Gradient */}
      <div className="relative mb-6 z-10">
        <motion.div
          animate={isInView ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
          className="text-8xl font-bold bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent"
        >
          {number}
        </motion.div>
      </div>

      {/* Icon */}
      <div className="mb-6 p-6 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-2xl shadow-lg">
        <Icon className="w-10 h-10 text-white" strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-[#111827] mb-3">{title}</h3>

      {/* Description */}
      <p className="text-[#6B7280] mb-6 max-w-xs">{description}</p>

      {/* Mini Demo */}
      <div className="w-full max-w-xs">
        {demoType === "search" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 + index * 0.2 }}
            className="relative"
          >
            <input
              type="text"
              placeholder="Дрель..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full px-4 py-3 rounded-full border-2 border-[#E5E7EB] focus:border-[#4F46E5] outline-none transition-colors"
            />
            {isInView && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg border border-[#E5E7EB] p-2 text-left text-sm"
              >
                <div className="p-2 hover:bg-[#F3F4F6] rounded-lg cursor-pointer">
                  🔧 Дрель Bosch
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {demoType === "calendar" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8 + index * 0.2 }}
            className="bg-white rounded-xl shadow-lg border border-[#E5E7EB] p-4"
          >
            <div className="grid grid-cols-7 gap-1 text-xs">
              {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
                <div key={day} className="text-center text-[#6B7280] font-semibold">
                  {day}
                </div>
              ))}
              {Array.from({ length: 14 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + i * 0.05 }}
                  className={`aspect-square flex items-center justify-center rounded-lg ${
                    i === 5 || i === 6
                      ? "bg-[#4F46E5] text-white font-semibold"
                      : "hover:bg-[#F3F4F6]"
                  }`}
                >
                  {i + 1}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {demoType === "map" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8 + index * 0.2 }}
            className="bg-gradient-to-br from-[#E0E7FF] to-[#DDD6FE] rounded-xl p-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#4F46E5] rounded-full" />
              <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-[#7C3AED] rounded-full" />
            </div>
            <div className="relative z-10 text-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl mb-2"
              >
                📍
              </motion.div>
              <p className="text-[#4F46E5] font-semibold text-sm">2 мин пешком</p>
              <p className="text-[#6B7280] text-xs mt-1">Подъезд 3</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
