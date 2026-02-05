import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Bell, Camera, ChevronRight, Shield } from "lucide-react";

interface PermissionsScreenProps {
  onNext: (permissions: {
    location: boolean;
    notifications: boolean;
    camera: boolean;
  }) => void;
  onBack: () => void;
}

const permissions = [
  {
    id: "location" as const,
    icon: MapPin,
    title: "Геолокация",
    description: "Покажем вещи только из вашего ЖК",
    required: true,
    benefit: "Точные расстояния до владельцев",
  },
  {
    id: "notifications" as const,
    icon: Bell,
    title: "Уведомления",
    description: "Сообщим о новых заявках и сообщениях",
    required: false,
    benefit: "Не пропустите важные события",
  },
  {
    id: "camera" as const,
    icon: Camera,
    title: "Камера",
    description: "Для фото вещей и актов приёма-передачи",
    required: false,
    benefit: "Быстрая публикация объявлений",
  },
];

export function PermissionsScreen({ onNext, onBack }: PermissionsScreenProps) {
  const [granted, setGranted] = useState<{
    location: boolean;
    notifications: boolean;
    camera: boolean;
  }>({
    location: false,
    notifications: false,
    camera: false,
  });

  const handleToggle = (id: "location" | "notifications" | "camera") => {
    setGranted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleContinue = () => {
    onNext(granted);
  };

  const canContinue = granted.location; // Location is required

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
                initial={{ width: "50%" }}
                animate={{ width: "75%" }}
                transition={{ duration: 0.5 }}
                className="h-full bg-[#4F46E5]"
              />
            </div>
            <span className="text-sm text-[#6B7280]">Шаг 3 из 4</span>
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
            <div className="w-20 h-20 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">
              Нам нужны разрешения
            </h2>
            <p className="text-[#6B7280]">
              Для корректной работы приложения
            </p>
          </motion.div>

          {/* Permission Cards */}
          <div className="space-y-4 mb-8">
            {permissions.map((permission, index) => (
              <PermissionCard
                key={permission.id}
                {...permission}
                index={index}
                granted={granted[permission.id]}
                onToggle={() => handleToggle(permission.id)}
              />
            ))}
          </div>

          {/* Privacy Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mb-8 p-4 bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB]"
          >
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
              <div className="text-sm text-[#6B7280]">
                <span className="font-semibold text-[#111827]">
                  Ваша конфиденциальность защищена.
                </span>{" "}
                Мы не передаём данные третьим лицам. Геолокация используется только
                для определения вашего ЖК.
              </div>
            </div>
          </motion.div>

          {/* Continue Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: canContinue ? 1 : 0.5, y: 0 }}
            transition={{ duration: 0.4 }}
            disabled={!canContinue}
            onClick={handleContinue}
            className={`w-full py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
              canContinue
                ? "bg-[#4F46E5] text-white hover:bg-[#4338CA] shadow-lg"
                : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
            }`}
          >
            Продолжить
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          {!granted.location && (
            <p className="text-center text-sm text-[#EF4444] mt-4">
              Геолокация обязательна для работы приложения
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function PermissionCard({
  id,
  icon: Icon,
  title,
  description,
  required,
  benefit,
  granted,
  onToggle,
  index,
}: {
  id: string;
  icon: any;
  title: string;
  description: string;
  required: boolean;
  benefit: string;
  granted: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`p-6 rounded-2xl border-2 transition-all ${
        granted
          ? "bg-[#EEF2FF] border-[#4F46E5]"
          : "bg-white border-[#E5E7EB] hover:border-[#4F46E5]"
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
            granted
              ? "bg-[#4F46E5]"
              : "bg-gradient-to-br from-[#4F46E5] to-[#7C3AED]"
          }`}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold text-[#111827]">{title}</h3>
                {required && (
                  <span className="px-2 py-0.5 bg-[#FEF3C7] text-[#92400E] text-xs font-semibold rounded-full">
                    Обязательно
                  </span>
                )}
              </div>
              <p className="text-sm text-[#6B7280] mb-2">{description}</p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full" />
                <span className="text-xs text-[#10B981] font-semibold">
                  {benefit}
                </span>
              </div>
            </div>

            {/* Toggle */}
            <button
              onClick={onToggle}
              className={`relative w-14 h-7 rounded-full transition-colors flex-shrink-0 ${
                granted ? "bg-[#4F46E5]" : "bg-[#E5E7EB]"
              }`}
            >
              <motion.div
                animate={{ x: granted ? 28 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
