import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Home, CreditCard, Star, Scale } from "lucide-react";

const pillars = [
  {
    icon: Home,
    title: "Только проверенные соседи",
    description:
      "Каждый пользователь привязан к конкретному ЖК через геолокацию или адрес. Вы арендуете у реальных соседей, а не у незнакомцев.",
    badge: "Верифицированный адрес",
    color: "from-[#4F46E5] to-[#6366F1]",
  },
  {
    icon: CreditCard,
    title: "Эскроу-счёт",
    description:
      "Деньги не сразу попадают к владельцу. Они заморожены до подтверждения успешного возврата. Если что-то пойдёт не так — вернём средства.",
    badge: "YooKassa защита",
    color: "from-[#10B981] to-[#059669]",
  },
  {
    icon: Star,
    title: "Репутация решает",
    description:
      "После каждой аренды обе стороны оставляют отзывы. Плохие соседи быстро получают низкий рейтинг и теряют доверие.",
    badge: "Средний рейтинг 4.8★",
    color: "from-[#F59E0B] to-[#D97706]",
  },
  {
    icon: Scale,
    title: "Честное решение споров",
    description:
      "Если возникла проблема — откройте спор. Наши модераторы рассмотрят доказательства и примут справедливое решение за 48 часов.",
    badge: "Поддержка 24/7",
    color: "from-[#8B5CF6] to-[#7C3AED]",
  },
];

const stats = [
  { value: "0", label: "случаев мошенничества" },
  { value: "98%", label: "споров решаются в пользу правого" },
  { value: "24ч", label: "среднее время решения спора" },
];

export function TrustSafetySection() {
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
            Ваша безопасность — наш приоритет
          </h2>
        </motion.div>

        {/* Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <TrustPillar key={index} {...pillar} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustPillar({
  icon: Icon,
  title,
  description,
  badge,
  color,
  index,
  isInView,
}: {
  icon: any;
  title: string;
  description: string;
  badge: string;
  color: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-[#E5E7EB]"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
      >
        <Icon className="w-10 h-10 text-white" strokeWidth={2} />
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-[#111827] mb-4">{title}</h3>

      {/* Description */}
      <p className="text-[#6B7280] leading-relaxed mb-6">{description}</p>

      {/* Badge */}
      <div
        className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${color} rounded-full text-white text-sm font-semibold`}
      >
        {badge}
      </div>
    </motion.div>
  );
}

function StatCard({
  value,
  label,
  index,
  isInView,
}: {
  value: string;
  label: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
      className="text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent mb-3"
      >
        {value}
      </motion.div>
      <div className="text-[#6B7280] text-sm md:text-base">{label}</div>
    </motion.div>
  );
}
