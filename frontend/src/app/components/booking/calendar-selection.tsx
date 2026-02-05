import { motion } from "motion/react";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface CalendarSelectionProps {
  onClose: () => void;
  onConfirm: (startDate: Date, endDate: Date) => void;
  bookedDates?: Date[];
  minDays?: number;
  maxDays?: number;
}

type DateRange = {
  start: Date | null;
  end: Date | null;
};

export function CalendarSelection({
  onClose,
  onConfirm,
  bookedDates = [],
  minDays = 1,
  maxDays = 14,
}: CalendarSelectionProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dateRange, setDateRange] = useState<DateRange>({ start: null, end: null });

  const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

    const days: (Date | null)[] = [];
    
    // Add empty days for offset
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const days = getDaysInMonth(currentMonth);

  const isDateBooked = (date: Date) => {
    return bookedDates.some(
      (bookedDate) =>
        bookedDate.toDateString() === date.toDateString()
    );
  };

  const isDateInRange = (date: Date) => {
    if (!dateRange.start || !dateRange.end) return false;
    return date >= dateRange.start && date <= dateRange.end;
  };

  const isDateSelected = (date: Date) => {
    if (!dateRange.start) return false;
    if (dateRange.start.toDateString() === date.toDateString()) return true;
    if (dateRange.end?.toDateString() === date.toDateString()) return true;
    return false;
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleDateClick = (date: Date) => {
    if (isPastDate(date) || isDateBooked(date)) return;

    if (!dateRange.start) {
      setDateRange({ start: date, end: null });
    } else if (!dateRange.end) {
      if (date < dateRange.start) {
        setDateRange({ start: date, end: dateRange.start });
      } else {
        setDateRange({ start: dateRange.start, end: date });
      }
    } else {
      setDateRange({ start: date, end: null });
    }
  };

  const handleConfirm = () => {
    if (dateRange.start && dateRange.end) {
      onConfirm(dateRange.start, dateRange.end);
    }
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const getDaysBetween = () => {
    if (!dateRange.start || !dateRange.end) return 0;
    const diff = dateRange.end.getTime() - dateRange.start.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const duration = getDaysBetween();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 flex flex-col"
    >
      {/* Header */}
      <div className="border-b border-[#E5E7EB] px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-colors"
          >
            <X className="w-5 h-5 text-[#111827]" />
          </button>
          <h1 className="text-lg font-semibold text-[#111827]">Выберите даты</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-2xl mx-auto px-4 py-6">
          {/* Month Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between mb-6"
          >
            <button
              onClick={previousMonth}
              className="w-10 h-10 rounded-full bg-[#F3F4F6] hover:bg-[#E5E7EB] flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#111827]" />
            </button>
            <div className="text-lg font-semibold text-[#111827]">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </div>
            <button
              onClick={nextMonth}
              className="w-10 h-10 rounded-full bg-[#F3F4F6] hover:bg-[#E5E7EB] flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#111827]" />
            </button>
          </motion.div>

          {/* Calendar Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-6"
          >
            {/* Week Days */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-semibold text-[#6B7280] py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => (
                <DayButton
                  key={index}
                  date={day}
                  isSelected={day ? isDateSelected(day) : false}
                  isInRange={day ? isDateInRange(day) : false}
                  isBooked={day ? isDateBooked(day) : false}
                  isPast={day ? isPastDate(day) : false}
                  onClick={() => day && handleDateClick(day)}
                />
              ))}
            </div>
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-6 mb-6 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#4F46E5] rounded-lg" />
              <span className="text-sm text-[#6B7280]">Выбрано</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#EEF2FF] rounded-lg border-2 border-[#4F46E5]" />
              <span className="text-sm text-[#6B7280]">В диапазоне</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FEE2E2] rounded-lg" />
              <span className="text-sm text-[#6B7280]">Занято</span>
            </div>
          </motion.div>

          {/* Selection Info */}
          {dateRange.start && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-[#4F46E5]" />
                <h3 className="font-semibold text-[#111827]">Выбранные даты</h3>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-1">
                  <div className="text-sm text-[#6B7280] mb-1">Начало</div>
                  <div className="font-semibold text-[#111827]">
                    {dateRange.start.toLocaleDateString("ru-RU", {
                      day: "numeric",
                      month: "long",
                    })}
                  </div>
                </div>
                <div className="text-2xl text-[#6B7280]">→</div>
                <div className="flex-1">
                  <div className="text-sm text-[#6B7280] mb-1">Конец</div>
                  <div className="font-semibold text-[#111827]">
                    {dateRange.end
                      ? dateRange.end.toLocaleDateString("ru-RU", {
                          day: "numeric",
                          month: "long",
                        })
                      : "Выберите дату"}
                  </div>
                </div>
              </div>
              {dateRange.end && (
                <div className="pt-3 border-t border-[#C7D2FE]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6B7280]">Продолжительность</span>
                    <span className="font-semibold text-[#4F46E5]">
                      {duration} {duration === 1 ? "день" : duration < 5 ? "дня" : "дней"}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-6 p-4 bg-[#F9FAFB] rounded-2xl"
          >
            <h4 className="font-semibold text-[#111827] mb-2">Подсказки</h4>
            <ul className="space-y-1 text-sm text-[#6B7280]">
              <li>• Минимальный срок аренды: {minDays} {minDays === 1 ? "день" : "дня"}</li>
              <li>• Максимальный срок аренды: {maxDays} дней</li>
              <li>• Занятые даты отмечены красным</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 bg-white border-t border-[#E5E7EB] p-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleConfirm}
            disabled={!dateRange.start || !dateRange.end}
            className={`w-full py-4 rounded-2xl font-semibold transition-all ${
              dateRange.start && dateRange.end
                ? "bg-[#4F46E5] text-white hover:bg-[#4338CA]"
                : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
            }`}
          >
            Подтвердить даты
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function DayButton({
  date,
  isSelected,
  isInRange,
  isBooked,
  isPast,
  onClick,
}: {
  date: Date | null;
  isSelected: boolean;
  isInRange: boolean;
  isBooked: boolean;
  isPast: boolean;
  onClick: () => void;
}) {
  if (!date) {
    return <div className="aspect-square" />;
  }

  const isDisabled = isPast || isBooked;

  return (
    <motion.button
      whileHover={!isDisabled ? { scale: 1.1 } : {}}
      whileTap={!isDisabled ? { scale: 0.95 } : {}}
      onClick={onClick}
      disabled={isDisabled}
      className={`aspect-square rounded-lg font-medium transition-all ${
        isSelected
          ? "bg-[#4F46E5] text-white shadow-lg"
          : isInRange
          ? "bg-[#EEF2FF] border-2 border-[#4F46E5] text-[#4F46E5]"
          : isBooked
          ? "bg-[#FEE2E2] text-[#991B1B] cursor-not-allowed"
          : isPast
          ? "text-[#D1D5DB] cursor-not-allowed"
          : "bg-white hover:bg-[#F3F4F6] text-[#111827]"
      }`}
    >
      {date.getDate()}
    </motion.button>
  );
}
