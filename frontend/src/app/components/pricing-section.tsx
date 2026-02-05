import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Shield, Lock, Wallet } from "lucide-react";

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [price, setPrice] = useState(300);
  const [days, setDays] = useState(2);
  const [hasDeposit, setHasDeposit] = useState(true);
  const [deposit, setDeposit] = useState(1000);

  const rental = price * days;
  const fee = Math.round(rental * 0.125);
  const total = rental + fee + (hasDeposit ? deposit : 0);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[#EEF2FF]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Прозрачные условия
          </h2>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Inputs */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-white to-[#F9FAFB]">
                <h3 className="text-2xl font-bold text-[#111827] mb-8">
                  Калькулятор стоимости
                </h3>

                {/* Price Slider */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-semibold text-[#111827]">
                      Цена аренды
                    </label>
                    <span className="text-lg font-bold text-[#4F46E5]">{price}₽</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full h-2 bg-[#E5E7EB] rounded-full appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-[#6B7280] mt-1">
                    <span>100₽</span>
                    <span>5000₽</span>
                  </div>
                </div>

                {/* Days Slider */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-semibold text-[#111827]">
                      Дней аренды
                    </label>
                    <span className="text-lg font-bold text-[#4F46E5]">{days}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full h-2 bg-[#E5E7EB] rounded-full appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-[#6B7280] mt-1">
                    <span>1 день</span>
                    <span>30 дней</span>
                  </div>
                </div>

                {/* Deposit Toggle */}
                <div className="mb-6">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-semibold text-[#111827]">С залогом</span>
                    <div
                      onClick={() => setHasDeposit(!hasDeposit)}
                      className={`relative w-14 h-7 rounded-full transition-colors ${
                        hasDeposit ? "bg-[#4F46E5]" : "bg-[#E5E7EB]"
                      }`}
                    >
                      <motion.div
                        animate={{ x: hasDeposit ? 28 : 2 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className="absolute top-1 w-5 h-5 bg-white rounded-full"
                      />
                    </div>
                  </label>
                </div>

                {/* Deposit Amount */}
                {hasDeposit && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-sm font-semibold text-[#111827]">
                        Размер залога
                      </label>
                      <span className="text-lg font-bold text-[#4F46E5]">{deposit}₽</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={deposit}
                      onChange={(e) => setDeposit(Number(e.target.value))}
                      className="w-full h-2 bg-[#E5E7EB] rounded-full appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-[#6B7280] mt-1">
                      <span>100₽</span>
                      <span>10000₽</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Right Side - Breakdown */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white">
                <h3 className="text-2xl font-bold mb-8">Расчёт стоимости</h3>

                <div className="space-y-4 mb-6">
                  <motion.div
                    key={rental}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="flex justify-between items-center"
                  >
                    <span className="opacity-90">
                      Аренда ({days} × {price}₽)
                    </span>
                    <span className="text-xl font-semibold">{rental}₽</span>
                  </motion.div>

                  <motion.div
                    key={fee}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex justify-between items-center"
                  >
                    <span className="opacity-90">Сервисный сбор (12.5%)</span>
                    <span className="text-xl font-semibold">{fee}₽</span>
                  </motion.div>

                  {hasDeposit && (
                    <motion.div
                      key={deposit}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-between items-center"
                    >
                      <span className="opacity-90">Залог (возвра��ается)</span>
                      <span className="text-xl font-semibold">{deposit}₽</span>
                    </motion.div>
                  )}
                </div>

                <div className="border-t border-white/20 pt-6 mb-6">
                  <motion.div
                    key={total}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-lg font-semibold">ИТОГО К ОПЛАТЕ</span>
                    <span className="text-3xl font-bold">{total.toLocaleString()}₽</span>
                  </motion.div>
                </div>

                {hasDeposit && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-sm">
                    <p className="opacity-90">
                      После возврата вы получите:{" "}
                      <span className="font-bold">{deposit}₽ назад</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fee Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <FeeCard
            icon={Shield}
            title="Сервисный сбор 12.5%"
            description="Куда идёт: защита сделок, поддержка 24/7, страхование"
            isInView={isInView}
            delay={0.5}
          />
          <FeeCard
            icon={Lock}
            title="Залог"
            description="Необязательно. Устанавливает владелец. Возвращается полностью при успешном возврате"
            isInView={isInView}
            delay={0.6}
          />
          <FeeCard
            icon={Wallet}
            title="Выплаты владельцам"
            description="87.5% от аренды получает владелец. Вывод от 100₽ на любую карту за 1-3 рабочих дня"
            isInView={isInView}
            delay={0.7}
          />
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-[#6B7280]"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#10B981]" />
            <span>Защита покупателя</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#10B981]" />
            <span>Эскроу-платежи</span>
          </div>
          <div className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-[#10B981]" />
            <span>YooKassa партнёр</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeeCard({
  icon: Icon,
  title,
  description,
  isInView,
  delay,
}: {
  icon: any;
  title: string;
  description: string;
  isInView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-[#E5E7EB]"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h4 className="text-lg font-semibold text-[#111827] mb-2">{title}</h4>
      <p className="text-sm text-[#6B7280]">{description}</p>
    </motion.div>
  );
}
