import { motion } from "motion/react";
import { useState } from "react";
import { X, Calendar, Clock, Shield, MapPin, AlertCircle, ChevronRight } from "lucide-react";

interface BookingScreenProps {
  itemId: number;
  onClose: () => void;
  onCalendar: () => void;
  onConfirm: (bookingData: BookingData) => void;
}

interface BookingData {
  startDate: string;
  endDate: string;
  duration: number;
  total: number;
}

const mockItem = {
  id: 1,
  title: "Дрель Bosch GSB 550",
  category: "Инструменты",
  price: 300,
  deposit: 1000,
  owner: {
    name: "Алексей К.",
    avatar: "👨",
    entrance: "3",
    apartment: "45",
  },
  image: "🔧",
  minDays: 1,
  maxDays: 14,
};

export function BookingScreen({ itemId, onClose, onCalendar, onConfirm }: BookingScreenProps) {
  const [startDate, setStartDate] = useState("Сегодня, 5 фев");
  const [endDate, setEndDate] = useState("Завтра, 6 фев");
  const [duration, setDuration] = useState(1);
  const [pickupTime, setPickupTime] = useState("14:00");
  const [returnTime, setReturnTime] = useState("14:00");

  const subtotal = mockItem.price * duration;
  const serviceFee = Math.round(subtotal * 0.1);
  const total = subtotal + serviceFee;

  const handleConfirm = () => {
    onConfirm({
      startDate,
      endDate,
      duration,
      total: total + mockItem.deposit,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 flex flex-col overflow-auto"
    >
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-[#E5E7EB] px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-colors"
          >
            <X className="w-5 h-5 text-[#111827]" />
          </button>
          <h1 className="text-lg font-semibold text-[#111827]">Бронирование</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-6">
        {/* Item Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 p-4 bg-[#F9FAFB] rounded-2xl flex items-center gap-4"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] rounded-xl flex items-center justify-center text-4xl flex-shrink-0">
            {mockItem.image}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs text-[#6B7280] mb-1">{mockItem.category}</div>
            <h3 className="font-semibold text-[#111827] truncate">{mockItem.title}</h3>
            <div className="text-sm text-[#6B7280] mt-1">
              {mockItem.price}₽/день • Залог {mockItem.deposit}₽
            </div>
          </div>
        </motion.div>

        {/* Dates */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6"
        >
          <h2 className="text-lg font-semibold text-[#111827] mb-4">Даты аренды</h2>
          
          <button
            onClick={onCalendar}
            className="w-full p-4 bg-white border-2 border-[#E5E7EB] hover:border-[#4F46E5] rounded-2xl transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#EEF2FF] rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#4F46E5]" />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-[#111827]">{startDate}</span>
                  <span className="text-[#6B7280]">→</span>
                  <span className="font-semibold text-[#111827]">{endDate}</span>
                </div>
                <div className="text-sm text-[#6B7280]">{duration} день</div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#6B7280]" />
            </div>
          </button>

          {/* Quick Duration */}
          <div className="mt-3 flex gap-2">
            {[1, 2, 3, 7].map((days) => (
              <button
                key={days}
                onClick={() => setDuration(days)}
                className={`flex-1 py-2 rounded-xl border-2 transition-all ${
                  duration === days
                    ? "bg-[#EEF2FF] border-[#4F46E5]"
                    : "bg-white border-[#E5E7EB] hover:border-[#4F46E5]"
                }`}
              >
                <div
                  className={`text-sm font-semibold ${
                    duration === days ? "text-[#4F46E5]" : "text-[#6B7280]"
                  }`}
                >
                  {days} {days === 1 ? "день" : "дня"}
                </div>
              </button>
            ))}
          </div>
        </motion.section>

        {/* Pickup/Return Times */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-lg font-semibold text-[#111827] mb-4">Время</h2>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-[#6B7280] mb-2">
                Получение
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#E5E7EB] rounded-xl outline-none focus:border-[#4F46E5] transition-colors appearance-none"
                >
                  {["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"].map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#6B7280] mb-2">
                Возврат
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                <select
                  value={returnTime}
                  onChange={(e) => setReturnTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#E5E7EB] rounded-xl outline-none focus:border-[#4F46E5] transition-colors appearance-none"
                >
                  {["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"].map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Pickup Location */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-6"
        >
          <h2 className="text-lg font-semibold text-[#111827] mb-4">Место получения</h2>
          
          <div className="p-4 bg-white border-2 border-[#E5E7EB] rounded-2xl">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-[#EEF2FF] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#4F46E5]" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-[#111827] mb-1">
                  ЖК Солнечный
                </div>
                <div className="text-sm text-[#6B7280]">
                  Подъезд {mockItem.owner.entrance}, кв. {mockItem.owner.apartment}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="text-2xl">{mockItem.owner.avatar}</div>
                  <span className="text-sm text-[#6B7280]">
                    {mockItem.owner.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Price Breakdown */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-6"
        >
          <h2 className="text-lg font-semibold text-[#111827] mb-4">Детали оплаты</h2>
          
          <div className="p-4 bg-[#F9FAFB] rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[#6B7280]">
                {mockItem.price}₽ × {duration} {duration === 1 ? "день" : "дня"}
              </span>
              <span className="font-semibold text-[#111827]">{subtotal}₽</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#6B7280]">Сервисный сбор (10%)</span>
              <span className="font-semibold text-[#111827]">{serviceFee}₽</span>
            </div>
            <div className="h-px bg-[#E5E7EB]" />
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#111827]">Итого к оплате</span>
              <span className="text-2xl font-bold text-[#4F46E5]">{total}₽</span>
            </div>
          </div>

          {/* Deposit Info */}
          <div className="mt-3 p-4 bg-[#FEF3C7] border border-[#F59E0B] rounded-2xl flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-semibold text-[#92400E] mb-1">
                Залог {mockItem.deposit}₽
              </div>
              <div className="text-sm text-[#92400E]">
                Будет заблокирован на карте и вернётся после возврата вещи в целости
              </div>
            </div>
          </div>
        </motion.section>

        {/* Cancellation Policy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mb-6"
        >
          <div className="p-4 bg-white border border-[#E5E7EB] rounded-2xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#6B7280] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-[#111827] mb-1">
                  Условия отмены
                </div>
                <div className="text-sm text-[#6B7280]">
                  Бесплатная отмена за 24 часа до начала аренды. При отмене поз��е взимается 50% стоимости.
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 bg-white border-t border-[#E5E7EB] p-4">
        <div className="max-w-2xl mx-auto">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleConfirm}
            className="w-full py-4 bg-[#4F46E5] text-white rounded-2xl font-semibold hover:bg-[#4338CA] transition-colors shadow-lg"
          >
            Перейти к оплате • {total + mockItem.deposit}₽
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
