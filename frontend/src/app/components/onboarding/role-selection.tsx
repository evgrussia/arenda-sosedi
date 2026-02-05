import { motion } from "motion/react";
import { useState } from "react";
import { Search, Wallet, Users, ChevronRight } from "lucide-react";

interface RoleSelectionProps {
  onNext: (role: "renter" | "owner" | "both") => void;
  onBack: () => void;
}

export function RoleSelection({ onNext, onBack }: RoleSelectionProps) {
  const [selectedRole, setSelectedRole] = useState<"renter" | "owner" | "both" | null>(null);

  const roles = [
    {
      id: "renter" as const,
      title: "Я хочу арендовать",
      description: "Найду нужные вещи в своём ЖК",
      icon: Search,
      gradient: "from-[#10B981] to-[#059669]",
      benefits: ["Экономия 80-90%", "Вещь через 5 минут", "Безопасная оплата"],
    },
    {
      id: "owner" as const,
      title: "Я хочу сдавать",
      description: "Заработаю на своих вещах",
      icon: Wallet,
      gradient: "from-[#F59E0B] to-[#D97706]",
      benefits: ["Пассивный доход", "3 клика для публикации", "Защита залогом"],
    },
    {
      id: "both" as const,
      title: "И то, и другое",
      description: "Универсальный профиль",
      icon: Users,
      gradient: "from-[#4F46E5] to-[#7C3AED]",
      benefits: ["Всё сразу", "Гибкость", "Максимум возможностей"],
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-[#E5E7EB]">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={onBack}
            className="text-[#6B7280] hover:text-[#111827] transition-colors flex items-center gap-2"
          >
            ← Назад
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-4 py-2 bg-[#F9FAFB]">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "25%" }}
                transition={{ duration: 0.5 }}
                className="h-full bg-[#4F46E5]"
              />
            </div>
            <span className="text-sm text-[#6B7280]">Шаг 1 из 4</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">
              Как вы планируете<br />пользоваться платформой?
            </h2>
            <p className="text-[#6B7280]">Выберите один или несколько вариантов</p>
          </motion.div>

          {/* Role Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {roles.map((role, index) => (
              <RoleCard
                key={role.id}
                {...role}
                index={index}
                selected={selectedRole === role.id}
                onClick={() => setSelectedRole(role.id)}
              />
            ))}
          </div>

          {/* Continue Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: selectedRole ? 1 : 0.5, y: 0 }}
            transition={{ duration: 0.4 }}
            disabled={!selectedRole}
            onClick={() => selectedRole && onNext(selectedRole)}
            className={`w-full py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
              selectedRole
                ? "bg-[#4F46E5] text-white hover:bg-[#4338CA] shadow-lg"
                : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
            }`}
          >
            Продолжить
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          {/* Skip Option */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full mt-4 py-3 text-[#6B7280] hover:text-[#111827] transition-colors"
          >
            Пропустить, выберу позже
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function RoleCard({
  id,
  title,
  description,
  icon: Icon,
  gradient,
  benefits,
  selected,
  onClick,
  index,
}: {
  id: string;
  title: string;
  description: string;
  icon: any;
  gradient: string;
  benefits: string[];
  selected: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative p-6 rounded-3xl text-left transition-all ${
        selected
          ? "bg-gradient-to-br " + gradient + " text-white shadow-2xl border-2 border-transparent"
          : "bg-white border-2 border-[#E5E7EB] hover:border-[#4F46E5] shadow-md"
      }`}
    >
      {/* Checkmark */}
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#4F46E5]"
        >
          ✓
        </motion.div>
      )}

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
          selected ? "bg-white/20" : "bg-gradient-to-br " + gradient
        }`}
      >
        <Icon className={`w-7 h-7 ${selected ? "text-white" : "text-white"}`} />
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-semibold mb-2 ${
          selected ? "text-white" : "text-[#111827]"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className={`text-sm mb-4 ${selected ? "text-white/90" : "text-[#6B7280]"}`}>
        {description}
      </p>

      {/* Benefits */}
      <div className="space-y-1">
        {benefits.map((benefit, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <div
              className={`w-1 h-1 rounded-full ${
                selected ? "bg-white" : "bg-[#4F46E5]"
              }`}
            />
            <span className={selected ? "text-white/80" : "text-[#6B7280]"}>
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </motion.button>
  );
}
