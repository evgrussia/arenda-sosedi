import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { CheckCircle, Calendar, MapPin, Clock, Download, Share2, MessageCircle } from "lucide-react";

interface BookingConfirmationProps {
  bookingId: string;
  onClose: () => void;
  onMessage: () => void;
}

const mockBooking = {
  id: "BK-2024-0001",
  item: {
    title: "Дрель Bosch GSB 550",
    category: "Инструменты",
    image: "🔧",
  },
  owner: {
    name: "Алексей К.",
    avatar: "👨",
    phone: "+7 (***) ***-42-42",
  },
  dates: {
    start: "Сегодня, 5 фев",
    end: "Завтра, 6 фев",
    duration: 1,
  },
  time: {
    pickup: "14:00",
    return: "14:00",
  },
  location: {
    complex: "ЖК Солнечный",
    entrance: "3",
    apartment: "45",
  },
  payment: {
    rental: 300,
    serviceFee: 30,
    deposit: 1000,
    total: 1330,
  },
};

export function BookingConfirmation({
  bookingId,
  onClose,
  onMessage,
}: BookingConfirmationProps) {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; delay: number }>>(
    []
  );

  useEffect(() => {
    // Generate confetti
    const items = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.3,
    }));
    setConfetti(items);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 flex flex-col overflow-auto relative"
    >
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
          className="absolute w-2 h-2 rounded-full z-0"
          style={{
            left: `${item.x}%`,
            background: ["#F59E0B", "#10B981", "#3B82F6", "#EC4899", "#4F46E5"][
              Math.floor(Math.random() * 5)
            ],
          }}
        />
      ))}

      <div className="flex-1 relative z-10">
        <div className="max-w-2xl mx-auto px-4 py-12">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center shadow-2xl">
                <CheckCircle className="w-20 h-20 text-white" strokeWidth={2.5} />
              </div>
              {/* Pulse Rings */}
              <motion.div
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-[#10B981] rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 bg-[#10B981] rounded-full"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">
              Бронирование подтверждено!
            </h1>
            <p className="text-[#6B7280] text-lg">
              Номер бронирования: <span className="font-semibold text-[#4F46E5]">{mockBooking.id}</span>
            </p>
          </motion.div>

          {/* Item Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mb-6 p-6 bg-gradient-to-br from-[#F9FAFB] to-[#EEF2FF] rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] rounded-xl flex items-center justify-center text-4xl">
                {mockBooking.item.image}
              </div>
              <div className="flex-1">
                <div className="text-sm text-[#6B7280] mb-1">
                  {mockBooking.item.category}
                </div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  {mockBooking.item.title}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white rounded-xl">
                <Calendar className="w-5 h-5 text-[#4F46E5] mb-2" />
                <div className="text-xs text-[#6B7280] mb-1">Даты</div>
                <div className="text-sm font-semibold text-[#111827]">
                  {mockBooking.dates.start}
                </div>
                <div className="text-sm font-semibold text-[#111827]">
                  {mockBooking.dates.end}
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl">
                <Clock className="w-5 h-5 text-[#4F46E5] mb-2" />
                <div className="text-xs text-[#6B7280] mb-1">Время</div>
                <div className="text-sm font-semibold text-[#111827]">
                  Получение: {mockBooking.time.pickup}
                </div>
                <div className="text-sm font-semibold text-[#111827]">
                  Возврат: {mockBooking.time.return}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Owner Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="mb-6 p-6 bg-white border-2 border-[#E5E7EB] rounded-2xl"
          >
            <h3 className="font-semibold text-[#111827] mb-4">Владелец</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">{mockBooking.owner.avatar}</div>
              <div className="flex-1">
                <div className="font-semibold text-[#111827] mb-1">
                  {mockBooking.owner.name}
                </div>
                <div className="text-sm text-[#6B7280]">
                  {mockBooking.owner.phone}
                </div>
              </div>
              <button
                onClick={onMessage}
                className="px-4 py-2 bg-[#4F46E5] text-white rounded-xl hover:bg-[#4338CA] transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">Написать</span>
              </button>
            </div>

            <div className="p-4 bg-[#F9FAFB] rounded-xl flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-[#111827] mb-1">
                  {mockBooking.location.complex}
                </div>
                <div className="text-sm text-[#6B7280]">
                  Подъезд {mockBooking.location.entrance}, квартира{" "}
                  {mockBooking.location.apartment}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="mb-6 p-6 bg-white border-2 border-[#E5E7EB] rounded-2xl"
          >
            <h3 className="font-semibold text-[#111827] mb-4">Оплата</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">Аренда ({mockBooking.dates.duration} день)</span>
                <span className="font-semibold text-[#111827]">
                  {mockBooking.payment.rental}₽
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">Сервисный сбор</span>
                <span className="font-semibold text-[#111827]">
                  {mockBooking.payment.serviceFee}₽
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">Залог (заблокирован)</span>
                <span className="font-semibold text-[#111827]">
                  {mockBooking.payment.deposit}₽
                </span>
              </div>
              <div className="h-px bg-[#E5E7EB]" />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#111827]">Итого оплачено</span>
                <span className="text-2xl font-bold text-[#10B981]">
                  {mockBooking.payment.total}₽
                </span>
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="mb-6 p-6 bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] rounded-2xl"
          >
            <h3 className="font-semibold text-[#111827] mb-4">Что дальше?</h3>
            <div className="space-y-3">
              {[
                "Свяжитесь с владельцем для уточнения деталей",
                "Подойдите к месту получения в указанное время",
                "Проверьте состояние вещи при получении",
                "Верните вещь вовремя и в том же состоянии",
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-[#4F46E5] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="text-sm text-[#4F46E5] font-medium pt-0.5">
                    {step}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            className="grid grid-cols-2 gap-3 mb-6"
          >
            <button className="py-3 bg-white border-2 border-[#E5E7EB] rounded-xl hover:border-[#4F46E5] transition-colors flex items-center justify-center gap-2">
              <Download className="w-5 h-5 text-[#4F46E5]" />
              <span className="font-semibold text-[#4F46E5]">Скачать чек</span>
            </button>
            <button className="py-3 bg-white border-2 border-[#E5E7EB] rounded-xl hover:border-[#4F46E5] transition-colors flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5 text-[#4F46E5]" />
              <span className="font-semibold text-[#4F46E5]">Поделиться</span>
            </button>
          </motion.div>

          {/* Main CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="w-full py-4 bg-[#4F46E5] text-white rounded-2xl font-semibold hover:bg-[#4338CA] transition-colors shadow-lg"
          >
            Отлично!
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
