import { motion } from "motion/react";
import { useState } from "react";
import {
  X,
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  AlertCircle,
  CheckCircle,
  Camera,
  FileText,
} from "lucide-react";

interface RentalDetailsProps {
  rentalId: string;
  onClose: () => void;
  onMessage: () => void;
  onExtend: () => void;
  onReturn: () => void;
}

const mockRental = {
  id: "rent-1",
  type: "renting",
  status: "active",
  item: {
    title: "Дрель Bosch GSB 550",
    category: "Инструменты",
    image: "🔧",
  },
  owner: {
    name: "Алексей К.",
    avatar: "👨",
    phone: "+7 (***) ***-42-42",
    entrance: "3",
    apartment: "45",
  },
  dates: {
    start: "5 фев, 14:00",
    end: "6 фев, 14:00",
    remainingHours: 18,
  },
  payment: {
    rental: 300,
    serviceFee: 30,
    deposit: 1000,
    total: 1330,
  },
  location: {
    complex: "ЖК Солнечный",
    entrance: "3",
    apartment: "45",
  },
  timeline: [
    {
      id: 1,
      status: "completed",
      title: "Бронирование создано",
      time: "5 фев, 12:30",
      icon: CheckCircle,
    },
    {
      id: 2,
      status: "completed",
      title: "Оплата подтверждена",
      time: "5 фев, 12:31",
      icon: CheckCircle,
    },
    {
      id: 3,
      status: "current",
      title: "Вещь получена",
      time: "5 фев, 14:00",
      icon: CheckCircle,
    },
    {
      id: 4,
      status: "pending",
      title: "Возврат",
      time: "6 фев, 14:00",
      icon: Clock,
    },
  ],
};

export function RentalDetails({
  rentalId,
  onClose,
  onMessage,
  onExtend,
  onReturn,
}: RentalDetailsProps) {
  const [showExtendModal, setShowExtendModal] = useState(false);

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
          <h1 className="text-lg font-semibold text-[#111827]">Детали аренды</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-6">
        {/* Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 p-4 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-2xl text-white"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Аренда активна</span>
            </div>
            <span className="text-sm opacity-90">#{mockRental.id}</span>
          </div>
          <div className="text-sm opacity-90">
            Осталось {mockRental.dates.remainingHours} часов до возврата
          </div>
        </motion.div>

        {/* Item Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 p-6 bg-[#F9FAFB] rounded-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] rounded-xl flex items-center justify-center text-4xl">
              {mockRental.item.image}
            </div>
            <div className="flex-1">
              <div className="text-sm text-[#6B7280] mb-1">
                {mockRental.item.category}
              </div>
              <h2 className="text-xl font-semibold text-[#111827]">
                {mockRental.item.title}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-white rounded-xl">
              <Calendar className="w-5 h-5 text-[#4F46E5] mb-2" />
              <div className="text-xs text-[#6B7280] mb-1">Получение</div>
              <div className="text-sm font-semibold text-[#111827]">
                {mockRental.dates.start}
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl">
              <Clock className="w-5 h-5 text-[#4F46E5] mb-2" />
              <div className="text-xs text-[#6B7280] mb-1">Возврат</div>
              <div className="text-sm font-semibold text-[#111827]">
                {mockRental.dates.end}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Owner/Renter Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-6 p-6 bg-white border-2 border-[#E5E7EB] rounded-2xl"
        >
          <h3 className="font-semibold text-[#111827] mb-4">
            {mockRental.type === "renting" ? "Владелец" : "Арендатор"}
          </h3>

          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">{mockRental.owner.avatar}</div>
            <div className="flex-1">
              <div className="font-semibold text-[#111827] mb-1">
                {mockRental.owner.name}
              </div>
              <div className="text-sm text-[#6B7280]">{mockRental.owner.phone}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onMessage}
              className="py-3 bg-[#4F46E5] text-white rounded-xl hover:bg-[#4338CA] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Написать</span>
            </button>
            <button className="py-3 bg-[#F3F4F6] text-[#111827] rounded-xl hover:bg-[#E5E7EB] transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">Позвонить</span>
            </button>
          </div>

          <div className="mt-4 p-4 bg-[#F9FAFB] rounded-xl flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-[#111827] mb-1">
                {mockRental.location.complex}
              </div>
              <div className="text-sm text-[#6B7280]">
                Подъезд {mockRental.location.entrance}, квартира{" "}
                {mockRental.location.apartment}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-6 p-6 bg-white border-2 border-[#E5E7EB] rounded-2xl"
        >
          <h3 className="font-semibold text-[#111827] mb-4">История</h3>

          <div className="space-y-4">
            {mockRental.timeline.map((event, index) => (
              <div key={event.id} className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    event.status === "completed"
                      ? "bg-[#D1FAE5]"
                      : event.status === "current"
                      ? "bg-[#DBEAFE]"
                      : "bg-[#F3F4F6]"
                  }`}
                >
                  <event.icon
                    className={`w-5 h-5 ${
                      event.status === "completed"
                        ? "text-[#059669]"
                        : event.status === "current"
                        ? "text-[#2563EB]"
                        : "text-[#9CA3AF]"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`font-semibold mb-1 ${
                      event.status === "pending"
                        ? "text-[#6B7280]"
                        : "text-[#111827]"
                    }`}
                  >
                    {event.title}
                  </div>
                  <div className="text-sm text-[#6B7280]">{event.time}</div>
                </div>

                {/* Line */}
                {index < mockRental.timeline.length - 1 && (
                  <div className="absolute left-[41px] top-[50px] w-0.5 h-8 bg-[#E5E7EB]" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Payment Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-6 p-6 bg-white border-2 border-[#E5E7EB] rounded-2xl"
        >
          <h3 className="font-semibold text-[#111827] mb-4">Оплата</h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[#6B7280]">Аренда</span>
              <span className="font-semibold text-[#111827]">
                {mockRental.payment.rental}₽
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#6B7280]">Сервисный сбор</span>
              <span className="font-semibold text-[#111827]">
                {mockRental.payment.serviceFee}₽
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#6B7280]">Залог (заблокирован)</span>
              <span className="font-semibold text-[#111827]">
                {mockRental.payment.deposit}₽
              </span>
            </div>
            <div className="h-px bg-[#E5E7EB]" />
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#111827]">Итого</span>
              <span className="text-xl font-bold text-[#4F46E5]">
                {mockRental.payment.total}₽
              </span>
            </div>
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mb-6 p-4 bg-[#FEF3C7] border border-[#F59E0B] rounded-2xl"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-[#92400E] mb-2">Важно</div>
              <ul className="space-y-1 text-sm text-[#92400E]">
                <li>• Верните вещь вовремя, чтобы избежать штрафа</li>
                <li>• При возврате сделайте фото вещи</li>
                <li>• Залог вернётся в течение 24 часов</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="grid grid-cols-2 gap-3 mb-6"
        >
          <button
            onClick={() => setShowExtendModal(true)}
            className="py-3 bg-white border-2 border-[#E5E7EB] rounded-xl hover:border-[#4F46E5] transition-colors"
          >
            <Calendar className="w-5 h-5 text-[#4F46E5] mx-auto mb-1" />
            <span className="text-sm font-semibold text-[#4F46E5]">Продлить</span>
          </button>
          <button className="py-3 bg-white border-2 border-[#E5E7EB] rounded-xl hover:border-[#4F46E5] transition-colors">
            <Camera className="w-5 h-5 text-[#4F46E5] mx-auto mb-1" />
            <span className="text-sm font-semibold text-[#4F46E5]">Сделать фото</span>
          </button>
        </motion.div>

        {/* Return Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          onClick={onReturn}
          className="w-full py-4 bg-[#10B981] text-white rounded-2xl font-semibold hover:bg-[#059669] transition-colors shadow-lg"
        >
          Подтвердить возврат
        </motion.button>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mt-6 text-center"
        >
          <button className="flex items-center gap-2 mx-auto text-sm text-[#6B7280] hover:text-[#4F46E5] transition-colors">
            <FileText className="w-4 h-4" />
            <span>Сообщить о проблеме</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
