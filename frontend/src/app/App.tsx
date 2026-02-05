import { useState } from "react";
import { HeroSection } from "./components/hero-section";
import { ProblemSection } from "./components/problem-section";
import { SolutionSection } from "./components/solution-section";
import { ForRentersSection } from "./components/for-renters-section";
import { ForOwnersSection } from "./components/for-owners-section";
import { CategoriesSection } from "./components/categories-section";
import { HowItWorksSection } from "./components/how-it-works-section";
import { PricingSection } from "./components/pricing-section";
import { TrustSafetySection } from "./components/trust-safety-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { FAQSection } from "./components/faq-section";
import { CTASection } from "./components/cta-section";
import { Footer } from "./components/footer";
import { OnboardingDemo } from "./components/onboarding-demo";
import { CatalogDemo } from "./components/catalog-demo";
import { BookingDemo } from "./components/booking-demo";

export default function App() {
  const [view, setView] = useState<"landing" | "onboarding" | "catalog" | "booking">("landing");

  return (
    <div className="min-h-screen bg-white">
      {/* Toggle Navigation */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setView("landing")}
          className={`px-4 py-2 rounded-full font-semibold text-sm shadow-lg transition-all ${
            view === "landing"
              ? "bg-[#4F46E5] text-white"
              : "bg-white text-[#4F46E5] hover:bg-[#F3F4F6]"
          }`}
        >
          Лендинг
        </button>
        <button
          onClick={() => setView("onboarding")}
          className={`px-4 py-2 rounded-full font-semibold text-sm shadow-lg transition-all ${
            view === "onboarding"
              ? "bg-[#4F46E5] text-white"
              : "bg-white text-[#4F46E5] hover:bg-[#F3F4F6]"
          }`}
        >
          Онбординг
        </button>
        <button
          onClick={() => setView("catalog")}
          className={`px-4 py-2 rounded-full font-semibold text-sm shadow-lg transition-all ${
            view === "catalog"
              ? "bg-[#4F46E5] text-white"
              : "bg-white text-[#4F46E5] hover:bg-[#F3F4F6]"
          }`}
        >
          Каталог
        </button>
        <button
          onClick={() => setView("booking")}
          className={`px-4 py-2 rounded-full font-semibold text-sm shadow-lg transition-all ${
            view === "booking"
              ? "bg-[#4F46E5] text-white"
              : "bg-white text-[#4F46E5] hover:bg-[#F3F4F6]"
          }`}
        >
          Бронирование
        </button>
      </div>

      {/* Content */}
      {view === "landing" ? (
        <>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <ForRentersSection />
          <ForOwnersSection />
          <CategoriesSection />
          <HowItWorksSection />
          <PricingSection />
          <TrustSafetySection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
          <Footer />
        </>
      ) : view === "onboarding" ? (
        <OnboardingDemo />
      ) : view === "catalog" ? (
        <CatalogDemo />
      ) : (
        <BookingDemo />
      )}
    </div>
  );
}