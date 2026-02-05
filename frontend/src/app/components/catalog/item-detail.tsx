import { motion } from "motion/react";
import { useState } from "react";
import {
  X,
  Star,
  MapPin,
  Calendar,
  Shield,
  MessageCircle,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ItemDetailProps {
  itemId: number;
  onClose: () => void;
  onBook: (itemId: number) => void;
  onMessage: (ownerId: number) => void;
}

const mockItem = {
  id: 1,
  title: "Дрель Bosch GSB 550",
  category: "Инструменты",
  description:
    "Ударная дрель Bosch GSB 550 Professional. Мощность 550 Вт, патрон 13 мм. Отлично подходит для сверления отверстий в бетоне, кирпиче, дереве. В комплекте кейс и набор свёрл.",
  price: 300,
  deposit: 1000,
  owner: {
    id: 1,
    name: "Алексей К.",
    avatar: "👨",
    rating: 4.9,
    reviews: 24,
    verified: true,
    entrance: "3",
  },
  rating: 4.9,
  reviews: 24,
  distance: "50м",
  images: ["🔧", "📦", "🛠️"],
  available: true,
  features: [
    "Мощность 550 Вт",
    "Патрон 13 мм",
    "Кейс в комплекте",
    "Набор свёрл",
  ],
  rules: [
    "Возврат в том же состоянии",
    "Уведомить о поломке сразу",
    "Не использовать для коммерческих целей",
  ],
  bookings: 12,
  availability: [
    { date: "Сегодня", status: "available" },
    { date: "Завтра", status: "available" },
    { date: "15 фев", status: "booked" },
    { date: "16 фев", status: "available" },
    { date: "17 фев", status: "available" },
  ],
};

const mockReviews = [
  {
    id: 1,
    author: "Мария В.",
    avatar: "👩",
    rating: 5,
    date: "3 дня назад",
    text: "Отличная дрель! Быстро просверлила 6 отверстий в бетоне. Алексей помог с советами по использованию. Рекомендую!",
  },
  {
    id: 2,
    author: "Дмитрий С.",
    avatar: "👨‍💼",
    rating: 5,
    date: "1 неделю назад",
    text: "Всё прошло гладко. Дрель в отличном состоянии, работает как новая.",
  },
];

export function ItemDetail({ itemId, onClose, onBook, onMessage }: ItemDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === mockItem.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? mockItem.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 flex flex-col overflow-auto"
    >
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-lg border-b border-[#E5E7EB]">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-colors"
          >
            <X className="w-5 h-5 text-[#111827]" />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite
                    ? "fill-[#EF4444] text-[#EF4444]"
                    : "text-[#6B7280]"
                }`}
              />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-colors">
              <Share2 className="w-5 h-5 text-[#6B7280]" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Image Gallery */}
        <div className="relative aspect-square bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF]">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-9xl">{mockItem.images[currentImageIndex]}</div>
          </motion.div>

          {/* Navigation Arrows */}
          {mockItem.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#111827]" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-[#111827]" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {mockItem.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-white w-6"
                    : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Availability Badge */}
          {mockItem.available ? (
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#D1FAE5] text-[#065F46] text-sm font-semibold rounded-full">
              Доступно
            </div>
          ) : (
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#FEE2E2] text-[#991B1B] text-sm font-semibold rounded-full">
              Недоступно
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-6 space-y-6">
          {/* Title & Price */}
          <div>
            <div className="text-sm text-[#6B7280] mb-1">{mockItem.category}</div>
            <h1 className="text-2xl font-bold text-[#111827] mb-3">
              {mockItem.title}
            </h1>
            <div className="flex items-center gap-4">
              <div>
                <span className="text-3xl font-bold text-[#4F46E5]">
                  {mockItem.price}₽
                </span>
                <span className="text-[#6B7280]">/день</span>
              </div>
              <div className="text-sm text-[#6B7280]">
                Залог: <span className="font-semibold">{mockItem.deposit}₽</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 py-4 border-y border-[#E5E7EB]">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
              <span className="font-semibold text-[#111827]">{mockItem.rating}</span>
              <span className="text-sm text-[#6B7280]">({mockItem.reviews})</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#6B7280]" />
              <span className="text-sm text-[#6B7280]">{mockItem.distance}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#6B7280]" />
              <span className="text-sm text-[#6B7280]">
                {mockItem.bookings} аренд
              </span>
            </div>
          </div>

          {/* Owner */}
          <div className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="text-4xl">{mockItem.owner.avatar}</div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#111827]">
                    {mockItem.owner.name}
                  </span>
                  {mockItem.owner.verified && (
                    <Shield className="w-4 h-4 text-[#10B981]" />
                  )}
                </div>
                <div className="text-sm text-[#6B7280]">
                  Подъезд {mockItem.owner.entrance}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  <span className="text-sm font-semibold text-[#111827]">
                    {mockItem.owner.rating}
                  </span>
                  <span className="text-xs text-[#6B7280]">
                    ({mockItem.owner.reviews})
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onMessage(mockItem.owner.id)}
              className="px-4 py-2 bg-white border border-[#E5E7EB] rounded-xl hover:bg-[#F9FAFB] transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#6B7280]" />
              <span className="text-sm font-semibold text-[#111827]">Написать</span>
            </button>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">Описание</h2>
            <p className="text-[#6B7280] leading-relaxed">{mockItem.description}</p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">
              Характеристики
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {mockItem.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-[#F9FAFB] rounded-xl"
                >
                  <div className="w-2 h-2 bg-[#4F46E5] rounded-full" />
                  <span className="text-sm text-[#111827]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rules */}
          <div>
            <h2 className="text-lg font-semibold text-[#111827] mb-3">
              Правила использования
            </h2>
            <div className="space-y-2">
              {mockItem.rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#6B7280]">{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-[#111827]">
                Отзывы ({mockReviews.length})
              </h2>
              <button className="text-sm text-[#4F46E5] font-semibold">
                Все отзывы →
              </button>
            </div>
            <div className="space-y-4">
              {mockReviews.map((review) => (
                <div key={review.id} className="p-4 bg-[#F9FAFB] rounded-2xl">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-2xl">{review.avatar}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-[#111827]">
                        {review.author}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < review.rating
                                  ? "fill-[#F59E0B] text-[#F59E0B]"
                                  : "text-[#E5E7EB]"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-[#6B7280]">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Booking Button */}
      <div className="sticky bottom-0 bg-white border-t border-[#E5E7EB] p-4">
        <button
          onClick={() => onBook(mockItem.id)}
          disabled={!mockItem.available}
          className={`w-full py-4 rounded-2xl font-semibold transition-all ${
            mockItem.available
              ? "bg-[#4F46E5] text-white hover:bg-[#4338CA]"
              : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
          }`}
        >
          {mockItem.available ? "Забронировать" : "Недоступно"}
        </button>
      </div>
    </motion.div>
  );
}
