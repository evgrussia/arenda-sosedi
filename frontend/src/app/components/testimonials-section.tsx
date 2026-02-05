import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    avatar: "👩",
    name: "Мария К.",
    role: "Арендатор",
    location: "ЖК Солнечный, Москва",
    rating: 5,
    text: "Арендовала дрель на день для установки карниза. Сосед из 3 подъезда одолжил за 300₽. Раньше бы поехала в ОBI, потратила час и 8000₽ на покупку. Теперь пользуюсь постоянно!",
    stats: "12 аренд",
  },
  {
    avatar: "👨",
    name: "Алексей В.",
    role: "Владелец",
    location: "ЖК Новый Оккервиль, СПб",
    rating: 5,
    text: "За 3 месяца заработал 15 000₽ на вещах, которые просто лежали в кладовке. Дрель, проектор, велосипед — всё пользуется спросом. Отличная идея!",
    stats: "5 объявлений",
  },
  {
    avatar: "👩‍🦰",
    name: "Ольга С.",
    role: "Арендатор и владелец",
    location: "ЖК Царская Столица",
    rating: 5,
    text: "Сначала арендовала коляску, когда приехали гости с ребёнком. Потом сама выставила свой проектор. Теперь он сдаётся каждые выходные на 800₽!",
    stats: "8 аренд, 3 сдачи",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            Что говорят соседи
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonials */}
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                {/* Show 3 cards on desktop, 1 on mobile */}
                {[0, 1, 2].map((offset) => {
                  const index = (currentIndex + offset) % testimonials.length;
                  const testimonial = testimonials[index];
                  const isCenter = offset === 0;

                  return (
                    <div
                      key={index}
                      className={`${offset !== 0 ? "hidden lg:block" : ""} ${
                        isCenter ? "lg:scale-105" : "lg:scale-95 lg:opacity-75"
                      }`}
                    >
                      <TestimonialCard {...testimonial} isCenter={isCenter} />
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#F3F4F6] transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-[#111827]" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#F3F4F6] transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-[#111827]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#4F46E5] w-8"
                    : "bg-[#E5E7EB] hover:bg-[#D1D5DB]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Присоединиться к 1000+ соседям
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({
  avatar,
  name,
  role,
  location,
  rating,
  text,
  stats,
  isCenter,
}: {
  avatar: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  stats: string;
  isCenter: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all h-full ${
        isCenter ? "border-2 border-[#4F46E5]" : "border border-[#E5E7EB]"
      }`}
    >
      {/* Avatar & Info */}
      <div className="flex items-start gap-4 mb-6">
        <div className="text-5xl">{avatar}</div>
        <div className="flex-1">
          <div className="font-semibold text-lg text-[#111827]">{name}</div>
          <div className="text-sm text-[#6B7280] mb-1">{role}</div>
          <div className="text-xs text-[#9CA3AF]">{location}</div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
        ))}
      </div>

      {/* Text */}
      <p className="text-[#6B7280] leading-relaxed mb-6">{text}</p>

      {/* Stats */}
      <div className="inline-flex items-center px-4 py-2 bg-[#EEF2FF] rounded-full text-sm font-semibold text-[#4F46E5]">
        {stats}
      </div>
    </motion.div>
  );
}
