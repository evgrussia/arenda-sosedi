import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Wallet, Zap, Shield, Bell, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Пассивный доход",
    description: "Вещи лежат без дела? Пусть работают на вас",
    visual: "earnings",
  },
  {
    icon: Zap,
    title: "3 клика для публикации",
    description: "Сфотографируйте, опишите, установите цену. Готово!",
    visual: "steps",
  },
  {
    icon: Shield,
    title: "Залог защищает",
    description: "Арендатор оставляет залог. Ваши вещи в безопасности",
    visual: "deposit",
  },
  {
    icon: Bell,
    title: "Уведомления о заявках",
    description: "Получайте заявки в Telegram. Подтверждайте одним тапом",
    visual: "notification",
  },
];

export function ForOwnersSection() {
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Зарабатывайте на вещах
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div className="space-y-8 order-2 lg:order-1">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                {...benefit}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Right Side - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start order-1 lg:order-2"
          >
            <div className="relative">
              {/* iPhone Frame */}
              <div className="w-80 h-[640px] bg-gradient-to-br from-[#1F2937] to-[#374151] rounded-[3rem] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-[#1F2937] rounded-b-3xl z-20" />
                
                {/* Screen */}
                <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white p-4">
                    <div className="font-semibold mb-1">Мой профиль</div>
                    <div className="text-xs opacity-90">Владелец</div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-4 bg-[#F9FAFB] h-full">
                    {/* Balance Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 }}
                      className="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-2xl p-6 mb-4 text-white shadow-lg"
                    >
                      <div className="text-sm opacity-90 mb-2">Баланс</div>
                      <div className="text-4xl font-bold mb-4">2 450₽</div>
                      <button className="w-full bg-white text-[#4F46E5] py-2 rounded-xl font-semibold text-sm">
                        Вывести
                      </button>
                    </motion.div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.7 }}
                        className="bg-white rounded-xl p-4 relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-12 h-12 bg-[#10B981] opacity-10 rounded-bl-full" />
                        <div className="text-2xl font-bold text-[#111827]">5</div>
                        <div className="text-xs text-[#6B7280]">Объявлений</div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 }}
                        className="bg-white rounded-xl p-4 relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-3 h-3 bg-[#EF4444] rounded-full"
                          />
                        </div>
                        <div className="text-2xl font-bold text-[#111827]">1</div>
                        <div className="text-xs text-[#6B7280]">Новая заявка</div>
                      </motion.div>
                    </div>

                    {/* Listings */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.9 }}
                      className="bg-white rounded-xl p-4"
                    >
                      <div className="text-sm font-semibold text-[#111827] mb-3">
                        Мои объявления
                      </div>
                      <div className="space-y-2">
                        {["🔧 Дрель", "🚴 Велосипед", "📽️ Проектор"].map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between py-2 border-b border-[#F3F4F6] last:border-0"
                          >
                            <span className="text-sm">{item}</span>
                            <span className="text-xs text-[#10B981] font-semibold">
                              Активно
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#059669] opacity-20 blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Calculator Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16"
        >
          <EarningsCalculator isInView={isInView} />
        </motion.div>
      </div>
    </section>
  );
}

function BenefitCard({
  icon: Icon,
  title,
  description,
  visual,
  index,
  isInView,
}: {
  icon: any;
  title: string;
  description: string;
  visual: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="flex gap-4 items-start">
        {/* Icon */}
        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-[#111827] mb-2">{title}</h3>
          <p className="text-[#6B7280] mb-4">{description}</p>

          {/* Visual Element */}
          <div className="mt-4">
            {visual === "earnings" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.15 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB] inline-flex items-center gap-3"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <TrendingUp className="w-8 h-8 text-[#10B981]" />
                </motion.div>
                <div>
                  <div className="text-2xl font-bold text-[#10B981]">3 000₽/мес</div>
                  <div className="text-xs text-[#6B7280]">Средний доход</div>
                </div>
              </motion.div>
            )}

            {visual === "steps" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.15 }}
                className="flex items-center gap-2"
              >
                {[1, 2, 3].map((step) => (
                  <motion.div
                    key={step}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1 + step * 0.2 + index * 0.15 }}
                    className="flex-1"
                  >
                    <div className="w-full aspect-square bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {visual === "deposit" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.15 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB] inline-flex items-center gap-2"
              >
                <div className="px-4 py-2 bg-[#10B981] bg-opacity-10 rounded-lg">
                  <div className="text-lg font-bold text-[#10B981]">1 000₽</div>
                  <div className="text-xs text-[#059669]">залог</div>
                </div>
              </motion.div>
            )}

            {visual === "notification" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.15 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-[#E5E7EB] max-w-xs"
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex-shrink-0"
                  >
                    <Bell className="w-6 h-6 text-[#4F46E5]" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-[#111827] mb-1">
                      Новая заявка на аренду
                    </div>
                    <div className="text-xs text-[#6B7280]">
                      Мария хочет арендовать вашу дрель
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EarningsCalculator({ isInView }: { isInView: boolean }) {
  const [selectedItem, setSelectedItem] = useState("Дрель");
  const [earnings, setEarnings] = useState(2400);

  const items = {
    "Дрель": 2400,
    "Велосипед": 3500,
    "Проектор": 4800,
    "Палатка": 2000,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] rounded-3xl p-8 md:p-12 max-w-3xl mx-auto"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-6 text-center">
        Сколько можно заработать?
      </h3>

      <div className="bg-white rounded-2xl p-6 mb-6">
        <label className="block text-sm font-semibold text-[#111827] mb-3">
          Что у вас есть?
        </label>
        <select
          value={selectedItem}
          onChange={(e) => {
            setSelectedItem(e.target.value);
            setEarnings(items[e.target.value as keyof typeof items]);
          }}
          className="w-full px-4 py-3 rounded-xl border-2 border-[#E5E7EB] focus:border-[#4F46E5] outline-none transition-colors text-[#111827] font-medium"
        >
          {Object.keys(items).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <motion.div
        key={earnings}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center"
      >
        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent mb-2">
          ~{earnings.toLocaleString()}₽
        </div>
        <div className="text-[#6B7280] text-lg">в месяц</div>
      </motion.div>
    </motion.div>
  );
}