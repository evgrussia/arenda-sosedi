import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { BookingScreen } from "./booking/booking-screen";
import { CalendarSelection } from "./booking/calendar-selection";
import { PaymentMethods } from "./booking/payment-methods";
import { BookingConfirmation } from "./booking/booking-confirmation";
import { ActiveRentals } from "./booking/active-rentals";
import { RentalDetails } from "./booking/rental-details";

type View =
  | { type: "rentals" }
  | { type: "booking"; itemId: number }
  | { type: "calendar" }
  | { type: "payment"; total: number }
  | { type: "confirmation"; bookingId: string }
  | { type: "rental-details"; rentalId: string };

export function BookingDemo() {
  const [view, setView] = useState<View>({ type: "rentals" });

  const handleBookingData = (data: any) => {
    console.log("Booking data:", data);
    setView({ type: "payment", total: data.total + 1000 }); // total + deposit
  };

  const handleCalendarConfirm = (startDate: Date, endDate: Date) => {
    console.log("Dates selected:", startDate, endDate);
    setView({ type: "booking", itemId: 1 });
  };

  const handlePaymentConfirm = (methodId: string) => {
    console.log("Payment method:", methodId);
    // Simulate payment processing
    setTimeout(() => {
      setView({ type: "confirmation", bookingId: "BK-2024-0001" });
    }, 1000);
  };

  const handleMessage = () => {
    console.log("Open messaging");
    alert("Переход в чат - будет реализовано в следующих секциях");
  };

  const handleExtend = () => {
    console.log("Extend rental");
    alert("Продление аренды - открывается календарь");
  };

  const handleReturn = () => {
    console.log("Return item");
    alert("Подтверждение возврата - переход на экран фото/подписи акта");
  };

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {view.type === "rentals" && (
          <ActiveRentals
            key="rentals"
            onRentalClick={(rentalId) =>
              setView({ type: "rental-details", rentalId })
            }
          />
        )}

        {view.type === "booking" && (
          <BookingScreen
            key="booking"
            itemId={view.itemId}
            onClose={() => setView({ type: "rentals" })}
            onCalendar={() => setView({ type: "calendar" })}
            onConfirm={handleBookingData}
          />
        )}

        {view.type === "calendar" && (
          <CalendarSelection
            key="calendar"
            onClose={() => setView({ type: "booking", itemId: 1 })}
            onConfirm={handleCalendarConfirm}
            bookedDates={[
              new Date(2026, 1, 15),
              new Date(2026, 1, 16),
              new Date(2026, 1, 17),
            ]}
            minDays={1}
            maxDays={14}
          />
        )}

        {view.type === "payment" && (
          <PaymentMethods
            key="payment"
            total={view.total}
            onClose={() => setView({ type: "booking", itemId: 1 })}
            onConfirm={handlePaymentConfirm}
          />
        )}

        {view.type === "confirmation" && (
          <BookingConfirmation
            key="confirmation"
            bookingId={view.bookingId}
            onClose={() => setView({ type: "rentals" })}
            onMessage={handleMessage}
          />
        )}

        {view.type === "rental-details" && (
          <RentalDetails
            key={`rental-${view.rentalId}`}
            rentalId={view.rentalId}
            onClose={() => setView({ type: "rentals" })}
            onMessage={handleMessage}
            onExtend={handleExtend}
            onReturn={handleReturn}
          />
        )}
      </AnimatePresence>

      {/* Quick Navigation (for demo purposes) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-white/90 backdrop-blur-lg rounded-full p-2 shadow-2xl border border-[#E5E7EB]">
        <button
          onClick={() => setView({ type: "rentals" })}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            view.type === "rentals"
              ? "bg-[#4F46E5] text-white"
              : "text-[#6B7280] hover:bg-[#F3F4F6]"
          }`}
        >
          Аренды
        </button>
        <button
          onClick={() => setView({ type: "booking", itemId: 1 })}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            view.type === "booking"
              ? "bg-[#4F46E5] text-white"
              : "text-[#6B7280] hover:bg-[#F3F4F6]"
          }`}
        >
          Бронирование
        </button>
        <button
          onClick={() => setView({ type: "calendar" })}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            view.type === "calendar"
              ? "bg-[#4F46E5] text-white"
              : "text-[#6B7280] hover:bg-[#F3F4F6]"
          }`}
        >
          Календарь
        </button>
        <button
          onClick={() => setView({ type: "payment", total: 1330 })}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            view.type === "payment"
              ? "bg-[#4F46E5] text-white"
              : "text-[#6B7280] hover:bg-[#F3F4F6]"
          }`}
        >
          Оплата
        </button>
      </div>
    </div>
  );
}
