import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface CompletionScreenProps {
  userData: {
    role: "renter" | "owner" | "both";
    location: { city: string; complex: string };
  };
  onComplete: () => void;
}

export function CompletionScreen({ userData, onComplete }: CompletionScreenProps) {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; delay: number }>>(
    []
  );

  useEffect(() => {
    // Generate confetti
    const items = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setConfetti(items);
  }, []);

  const getRoleText = () => {
    switch (userData.role) {
      case "renter":
        return "Найдите нужные вещи в каталоге";
      case "owner":
        return "Создайте первое объявление";
      case "both":
        return "Арендуйте и сдавайте вещи";
      default:
        return "Начните пользоваться платформой";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#8B5CF6] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Confetti */}
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          initial={{ y: -20, opacity: 1 }}
          animate={{ y: "100vh", opacity: 0 }}
          transition={{
            duration: 3,
            delay: item.delay,
            ease: "linear",
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${item.x}%`,
            background: ["#F59E0B", "#10B981", "#3B82F6", "#EC4899"][
              Math.floor(Math.random() * 4)
            ],
          }}
        />
      ))}

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
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-16 h-16 text-[#4F46E5]" />
              </motion.div>
            </div>
            {/* Rings */}
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-white rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 bg-white rounded-full"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Всё готово!
          </h1>
          <p className="text-xl text-white/90 mb-2">
            Добро пожаловать в Арендо-Соседи
          </p>
        </motion.div>

        {/* User Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 mb-8 border border-white/20"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-white/20">
              <span className="text-white/70">Ваша роль</span>
              <span className="text-white font-semibold capitalize">
                {userData.role === "renter"
                  ? "Арендатор"
                  : userData.role === "owner"
                  ? "Владелец"
                  : "Арендатор и Владелец"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/70">Локация</span>
              <div className="text-right">
                <div className="text-white font-semibold">
                  {userData.location.complex}
                </div>
                <div className="text-white/70 text-sm">{userData.location.city}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 mb-8 border border-white/20"
        >
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Что дальше?
          </h3>
          <ul className="space-y-3">
            {[
              getRoleText(),
              "Настройте профиль и добавьте фото",
              "Изучите категории и популярные вещи",
            ].map((step, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                className="flex items-center gap-3 text-white"
              >
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                <span>{step}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onComplete}
          className="w-full bg-white text-[#4F46E5] py-5 rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-2 hover:bg-white/95 transition-colors"
        >
          Начать пользоваться
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="mt-8 grid grid-cols-3 gap-4"
        >
          {[
            { label: "Вещей доступно", value: "1200+" },
            { label: "Соседей", value: "800+" },
            { label: "Средний рейтинг", value: "4.9★" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
