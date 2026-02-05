import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

const problems = [
  {
    title: "Нужна дрель на час",
    illustration: "🔧💰",
    pain: "Покупать за 8000₽ ради одного отверстия?",
    stat: "73% вещей используются 1-2 раза в год",
  },
  {
    title: "Прокат далеко",
    illustration: "🗺️🚗",
    pain: "2 часа на дорогу ради 30 минут работы",
    stat: "Средняя дистанция до проката — 7 км",
  },
  {
    title: "Страх Avito/досок объявлений",
    illustration: "😰🚫",
    pain: "Незнакомцы, мошенники, риски",
    stat: "34% боятся P2P сделок с незнакомцами",
  },
  {
    title: "Вещи пылятся",
    illustration: "📦😔",
    pain: "Купил, использовал раз, забыл",
    stat: "Средняя семья владеет 300K₽ в простаивающих вещах",
  },
];

export function ProblemSection() {
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
            Знакомая ситуация?
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "120px" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] mx-auto rounded-full"
          />
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  title,
  illustration,
  pain,
  stat,
  index,
  isInView,
}: {
  title: string;
  illustration: string;
  pain: string;
  stat: string;
  index: number;
  isInView: boolean;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative h-64 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 backface-hidden bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col items-center text-center h-full justify-between">
            <div className="text-6xl mb-4">{illustration}</div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#111827] mb-3">
                {title}
              </h3>
              <p className="text-[#6B7280] text-base md:text-lg">{pain}</p>
            </div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sm text-[#4F46E5] font-medium"
            >
              Навести для статистики →
            </motion.div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-3xl p-8 shadow-lg flex items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-center">
            <div className="text-5xl mb-6">📊</div>
            <p className="text-white text-lg md:text-xl font-semibold leading-relaxed">
              {stat}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
