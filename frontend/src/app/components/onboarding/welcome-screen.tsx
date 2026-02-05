import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#8B5CF6] flex items-center justify-center p-4">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 2px, transparent 2px), radial-gradient(circle at 80% 80%, white 2px, transparent 2px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
            <span className="text-5xl">🏠🤝</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Добро пожаловать в<br />Арендо-Соседи!
          </h1>
          <p className="text-xl text-white/90">
            Арендуйте вещи у соседей из вашего ЖК
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-4 mb-12"
        >
          {[
            { icon: "💰", text: "Экономьте до 90% на покупках" },
            { icon: "⏱️", text: "Вещь через 5 минут, а не 2 часа" },
            { icon: "🔒", text: "Безопасные платежи и гарантии" },
            { icon: "⭐", text: "Только проверенные соседи" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
            >
              <div className="text-3xl">{feature.icon}</div>
              <div className="text-white font-medium">{feature.text}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          className="w-full bg-white text-[#4F46E5] py-5 rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-2 hover:bg-white/95 transition-colors"
        >
          Начать
          <Sparkles className="w-5 h-5" />
        </motion.button>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-center text-white/70 mt-6 text-sm"
        >
          Займёт всего 2 минуты
        </motion.p>
      </div>
    </div>
  );
}
