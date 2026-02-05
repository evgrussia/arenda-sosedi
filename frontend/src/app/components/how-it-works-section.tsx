import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Search,
  Calendar,
  CreditCard,
  CheckCircle,
  MessageCircle,
  Clock,
  RotateCcw,
  Star,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Найдите нужную вещь",
    description:
      "Откройте каталог, выберите категорию или найдите через поиск. Фильтруйте по цене, рейтингу, расстоянию.",
    side: "right",
    preview: "catalog",
  },
  {
    icon: Calendar,
    title: "Забронируйте онлайн",
    description:
      "Выберите даты аренды. Система покажет итоговую стоимость: аренда + сервисный сбор 12.5% + залог (опционально).",
    side: "left",
    preview: "booking",
  },
  {
    icon: CreditCard,
    title: "Безопасная оплата",
    description:
      "Оплатите картой через YooKassa. Деньги замораживаются до завершения аренды. Защита покупателя.",
    side: "right",
    preview: "payment",
  },
  {
    icon: CheckCircle,
    title: "Владелец подтверждает",
    description:
      "Владелец получит push-уведомление и подтвердит заявку в течение 24 часов. Если нет — полный возврат.",
    side: "left",
    preview: "notification",
  },
  {
    icon: MessageCircle,
    title: "Встретьтесь и передайте",
    description:
      "Договоритесь в чате о времени и месте. При передаче сделайте фото для акта приёма.",
    side: "right",
    preview: "chat",
  },
  {
    icon: Clock,
    title: "Пользуйтесь",
    description:
      "Вещь у вас! Пользуйтесь в течение срока аренды. Напоминание о возврате придёт за день.",
    side: "left",
    preview: "timer",
  },
  {
    icon: RotateCcw,
    title: "Верните и получите залог",
    description:
      "Встретьтесь снова, владелец проверит вещь, подтвердит возврат. Залог вернётся на карту в течение 24ч.",
    side: "right",
    preview: "return",
  },
  {
    icon: Star,
    title: "Оставьте отзыв",
    description:
      "Поделитесь опытом — это поможет другим соседям. Рейтинг влияет на доверие.",
    side: "left",
    preview: "rating",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Прозрачный процесс от А до Я
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4F46E5] via-[#7C3AED] to-[#4F46E5] -translate-x-1/2 hidden md:block">
            <motion.div
              className="h-full bg-white"
              initial={{ scaleY: 1 }}
              animate={isInView ? { scaleY: 0 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <StepItem
                key={index}
                {...step}
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

function StepItem({
  icon: Icon,
  title,
  description,
  side,
  preview,
  index,
  isInView,
}: {
  icon: any;
  title: string;
  description: string;
  side: string;
  preview: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <div className={`flex flex-col md:flex-row gap-8 items-center ${side === "left" ? "md:flex-row-reverse" : ""}`}>
        {/* Content */}
        <div className={`flex-1 ${side === "left" ? "md:text-right" : ""}`}>
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
            className={`inline-flex items-center justify-center mb-4 ${side === "left" ? "md:ml-auto" : ""}`}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-2xl flex items-center justify-center shadow-lg">
              <Icon className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
          </motion.div>

          <h3 className="text-2xl font-semibold text-[#111827] mb-3">{title}</h3>
          <p className="text-[#6B7280] leading-relaxed">{description}</p>
        </div>

        {/* Timeline Node (Desktop) */}
        <div className="hidden md:block flex-shrink-0 relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2 + index * 0.15 }}
            className="w-6 h-6 bg-white border-4 border-[#4F46E5] rounded-full"
          >
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              className="w-full h-full bg-[#4F46E5] rounded-full"
            />
          </motion.div>
        </div>

        {/* Preview */}
        <div className="flex-1">
          <PreviewCard preview={preview} isInView={isInView} index={index} />
        </div>
      </div>
    </motion.div>
  );
}

function PreviewCard({
  preview,
  isInView,
  index,
}: {
  preview: string;
  isInView: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.4 + index * 0.15 }}
      className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-2xl p-6 shadow-lg border border-[#E5E7EB]"
    >
      {preview === "catalog" && (
        <div className="space-y-2">
          {["🔧 Дрель Bosch", "⚽ Велосипед Trek"].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E0E7FF] to-[#DDD6FE] rounded-lg" />
              <div className="text-sm font-semibold text-[#111827]">{item}</div>
            </div>
          ))}
        </div>
      )}

      {preview === "booking" && (
        <div className="bg-white rounded-xl p-4">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Аренда (2 дня)</span>
              <span className="font-semibold">600₽</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Сервисный сбор</span>
              <span className="font-semibold">75₽</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Залог</span>
              <span className="font-semibold">1000₽</span>
            </div>
            <div className="border-t border-[#E5E7EB] pt-2 flex justify-between font-bold">
              <span>Итого</span>
              <span className="text-[#4F46E5]">1 675₽</span>
            </div>
          </div>
        </div>
      )}

      {preview === "payment" && (
        <div className="flex items-center justify-center gap-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-xl flex items-center justify-center mb-2 mx-auto">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <div className="text-xs text-[#6B7280]">YooKassa</div>
          </div>
          <div className="text-2xl">🔒</div>
          <div className="text-center">
            <div className="text-2xl mb-2">✓</div>
            <div className="text-xs text-[#10B981] font-semibold">Защищено</div>
          </div>
        </div>
      )}

      {preview === "notification" && (
        <div className="bg-white rounded-xl p-4 shadow-md">
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔔</div>
            <div>
              <div className="font-semibold text-sm text-[#111827] mb-1">
                Новая заявка на аренду
              </div>
              <div className="text-xs text-[#6B7280]">Мария хочет арендовать вашу дрель</div>
              <div className="mt-2 flex gap-2">
                <button className="px-3 py-1 bg-[#10B981] text-white text-xs rounded-lg font-semibold">
                  Подтвердить
                </button>
                <button className="px-3 py-1 bg-[#E5E7EB] text-[#6B7280] text-xs rounded-lg font-semibold">
                  Отклонить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {preview === "chat" && (
        <div className="bg-white rounded-xl p-4 space-y-2">
          <div className="bg-[#E0E7FF] rounded-lg p-2 text-xs max-w-[80%]">
            Привет! Когда удобно встретиться?
          </div>
          <div className="bg-[#4F46E5] text-white rounded-lg p-2 text-xs max-w-[80%] ml-auto">
            Сегодня в 18:00?
          </div>
          <div className="text-center">
            <span className="text-xs text-[#6B7280]">📍 Подъезд 3</span>
          </div>
        </div>
      )}

      {preview === "timer" && (
        <div className="text-center">
          <div className="text-5xl mb-3">⏰</div>
          <div className="text-2xl font-bold text-[#111827]">1 день 14 ч</div>
          <div className="text-sm text-[#6B7280]">До возврата</div>
        </div>
      )}

      {preview === "return" && (
        <div className="bg-white rounded-xl p-4">
          <div className="text-center mb-3">
            <div className="text-4xl mb-2">✓</div>
            <div className="font-semibold text-sm text-[#10B981]">Возврат подтверждён</div>
          </div>
          <div className="text-xs text-[#6B7280] text-center">
            Залог 1 000₽ вернётся в течение 24ч
          </div>
        </div>
      )}

      {preview === "rating" && (
        <div className="text-center">
          <div className="flex justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-8 h-8 fill-[#F59E0B] text-[#F59E0B]" />
            ))}
          </div>
          <div className="text-sm text-[#6B7280]">Оцените аренду</div>
        </div>
      )}
    </motion.div>
  );
}
