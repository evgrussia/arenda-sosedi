import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { PiggyBank, Clock, Shield, Star } from "lucide-react";

const benefits = [
  {
    icon: PiggyBank,
    title: "Экономия 80-90%",
    description: "Зачем покупать, если можно арендовать за 5% от цены",
    visual: "price-comparison",
  },
  {
    icon: Clock,
    title: "5 минут до вещи",
    description: "Не нужно ехать в прокат. Вещь в соседнем подъезде",
    visual: "map",
  },
  {
    icon: Shield,
    title: "Безопасные платежи",
    description: "Деньги на эскроу до завершения аренды. Защита сделок",
    visual: "security",
  },
  {
    icon: Star,
    title: "Рейтинг и отзывы",
    description: "Арендуйте у проверенных соседей с высоким рейтингом",
    visual: "rating",
  },
];

const catalogItems = [
  { name: "Дрель Bosch", price: "300₽", rating: "4.8" },
  { name: "Велосипед", price: "500₽", rating: "4.9" },
  { name: "Проектор", price: "800₽", rating: "5.0" },
  { name: "Коляска", price: "200₽", rating: "4.7" },
];

export function ForRentersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-[#EEF2FF]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Арендуйте у соседей
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* iPhone Frame */}
              <div className="w-80 h-[640px] bg-gradient-to-br from-[#1F2937] to-[#374151] rounded-[3rem] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-[#1F2937] rounded-b-3xl z-20" />
                
                {/* Screen */}
                <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Header */}
                  <div className="bg-[#4F46E5] text-white p-4 flex items-center justify-between">
                    <div className="font-semibold">Каталог</div>
                    <div className="w-8 h-8 bg-white/20 rounded-full" />
                  </div>

                  {/* Catalog Items */}
                  <div className="p-4 bg-[#F9FAFB] h-full overflow-hidden">
                    <motion.div
                      animate={isInView ? { y: ["0%", "-50%"] } : {}}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="space-y-3"
                    >
                      {[...catalogItems, ...catalogItems].map((item, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-[#E0E7FF] to-[#DDD6FE] rounded-xl flex items-center justify-center text-2xl">
                            {i % 4 === 0 ? "🔧" : i % 4 === 1 ? "🚴" : i % 4 === 2 ? "📽️" : "👶"}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm text-[#111827]">{item.name}</div>
                            <div className="text-[#4F46E5] font-semibold text-sm">{item.price}</div>
                            <div className="flex items-center gap-1 text-xs text-[#6B7280]">
                              <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                              {item.rating}
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] opacity-20 blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Right Side - Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                {...benefit}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
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
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="flex gap-4 items-start">
        {/* Icon */}
        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-[#111827] mb-2">{title}</h3>
          <p className="text-[#6B7280] mb-4">{description}</p>

          {/* Visual Element */}
          <div className="mt-4">
            {visual === "price-comparison" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.15 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB]"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6B7280]">Покупка</span>
                    <span className="text-lg font-semibold text-[#EF4444] line-through">
                      8 000₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6B7280]">Аренда</span>
                    <span className="text-lg font-semibold text-[#10B981]">300₽</span>
                  </div>
                  <div className="h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "96%" } : {}}
                      transition={{ duration: 1, delay: 1 + index * 0.15 }}
                      className="h-full bg-gradient-to-r from-[#10B981] to-[#059669]"
                    />
                  </div>
                  <p className="text-xs text-[#10B981] font-semibold text-center">
                    Экономия 96%
                  </p>
                </div>
              </motion.div>
            )}

            {visual === "map" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.15 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB] text-center"
              >
                <div className="inline-flex items-center gap-2 bg-[#EEF2FF] px-4 py-2 rounded-full">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl"
                  >
                    📍
                  </motion.span>
                  <span className="text-sm font-semibold text-[#4F46E5]">
                    ЖК Солнечный
                  </span>
                </div>
              </motion.div>
            )}

            {visual === "security" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.15 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB] flex items-center justify-center gap-3"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Shield className="w-8 h-8 text-[#10B981]" fill="#10B981" />
                </motion.div>
                <div className="text-center">
                  <div className="text-xs text-[#6B7280]">Защищено</div>
                  <div className="text-sm font-semibold text-[#111827]">YooKassa</div>
                </div>
              </motion.div>
            )}

            {visual === "rating" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.15 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB]"
              >
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ delay: 1 + star * 0.1 + index * 0.15 }}
                    >
                      <Star className="w-8 h-8 fill-[#F59E0B] text-[#F59E0B]" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
