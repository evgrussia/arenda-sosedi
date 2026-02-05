import { motion } from "motion/react";
import { useState } from "react";
import { X, CreditCard, Wallet, Shield, Plus, ChevronRight } from "lucide-react";

interface PaymentMethodsProps {
  total: number;
  onClose: () => void;
  onConfirm: (methodId: string) => void;
}

const savedCards = [
  {
    id: "card-1",
    type: "MasterCard",
    last4: "4242",
    expiry: "12/25",
    isDefault: true,
    logo: "💳",
  },
  {
    id: "card-2",
    type: "Visa",
    last4: "1234",
    expiry: "03/26",
    isDefault: false,
    logo: "💳",
  },
];

const otherMethods = [
  {
    id: "sbp",
    name: "СБП (Система быстрых платежей)",
    description: "Оплата через банк по номеру телефона",
    logo: "💸",
    color: "from-[#10B981] to-[#059669]",
  },
  {
    id: "wallet",
    name: "Кошелёк на платформе",
    description: "Баланс: 1,250₽",
    logo: "👛",
    color: "from-[#F59E0B] to-[#D97706]",
  },
];

export function PaymentMethods({ total, onClose, onConfirm }: PaymentMethodsProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>(savedCards[0].id);

  const handleConfirm = () => {
    onConfirm(selectedMethod);
  };

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
          <h1 className="text-lg font-semibold text-[#111827]">Способ оплаты</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-2xl mx-auto px-4 py-6">
          {/* Total Amount */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 text-center"
          >
            <div className="text-sm text-[#6B7280] mb-2">К оплате</div>
            <div className="text-4xl font-bold text-[#4F46E5]">{total}₽</div>
          </motion.div>

          {/* Saved Cards */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-[#111827]">Сохранённые карты</h2>
              <button className="flex items-center gap-2 text-sm text-[#4F46E5] font-semibold hover:text-[#4338CA]">
                <Plus className="w-4 h-4" />
                Добавить
              </button>
            </div>

            <div className="space-y-3">
              {savedCards.map((card, index) => (
                <motion.button
                  key={card.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setSelectedMethod(card.id)}
                  className={`w-full p-4 rounded-2xl border-2 transition-all ${
                    selectedMethod === card.id
                      ? "bg-[#EEF2FF] border-[#4F46E5]"
                      : "bg-white border-[#E5E7EB] hover:border-[#4F46E5]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Radio Button */}
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedMethod === card.id
                          ? "border-[#4F46E5] bg-[#4F46E5]"
                          : "border-[#E5E7EB]"
                      }`}
                    >
                      {selectedMethod === card.id && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>

                    {/* Card Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-xl flex items-center justify-center text-2xl">
                      {card.logo}
                    </div>

                    {/* Card Info */}
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-[#111827]">
                          {card.type}
                        </span>
                        {card.isDefault && (
                          <span className="px-2 py-0.5 bg-[#D1FAE5] text-[#065F46] text-xs font-semibold rounded-full">
                            По умолчанию
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-[#6B7280]">
                        •••• {card.last4} • {card.expiry}
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 ${
                        selectedMethod === card.id
                          ? "text-[#4F46E5]"
                          : "text-[#6B7280]"
                      }`}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </section>

          {/* Other Methods */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-[#111827] mb-4">
              Другие способы
            </h2>

            <div className="space-y-3">
              {otherMethods.map((method, index) => (
                <motion.button
                  key={method.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`w-full p-4 rounded-2xl border-2 transition-all ${
                    selectedMethod === method.id
                      ? "bg-[#EEF2FF] border-[#4F46E5]"
                      : "bg-white border-[#E5E7EB] hover:border-[#4F46E5]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Radio Button */}
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedMethod === method.id
                          ? "border-[#4F46E5] bg-[#4F46E5]"
                          : "border-[#E5E7EB]"
                      }`}
                    >
                      {selectedMethod === method.id && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>

                    {/* Method Icon */}
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-2xl`}
                    >
                      {method.logo}
                    </div>

                    {/* Method Info */}
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-[#111827] mb-1">
                        {method.name}
                      </div>
                      <div className="text-sm text-[#6B7280]">
                        {method.description}
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 ${
                        selectedMethod === method.id
                          ? "text-[#4F46E5]"
                          : "text-[#6B7280]"
                      }`}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </section>

          {/* Security Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="p-4 bg-[#F9FAFB] rounded-2xl"
          >
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
              <div className="text-sm text-[#6B7280]">
                <span className="font-semibold text-[#111827]">
                  Безопасная оплата.
                </span>{" "}
                Все платежи защищены SSL-шифрованием. Средства поступят владельцу после подтверждения получения вещи.
              </div>
            </div>
          </motion.div>

          {/* How Escrow Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-6 p-6 bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] rounded-2xl"
          >
            <h3 className="font-semibold text-[#111827] mb-4 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-[#4F46E5]" />
              Как работает эскроу
            </h3>
            <div className="space-y-3">
              {[
                {
                  step: "1",
                  text: "Деньги замораживаются на платформе",
                },
                {
                  step: "2",
                  text: "Вы получаете вещь и подтверждаете",
                },
                {
                  step: "3",
                  text: "Владелец получает оплату",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-[#4F46E5] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="text-sm text-[#4F46E5] font-medium">
                    {item.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 bg-white border-t border-[#E5E7EB] p-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleConfirm}
            className="w-full py-4 bg-[#4F46E5] text-white rounded-2xl font-semibold hover:bg-[#4338CA] transition-colors shadow-lg"
          >
            Оплатить {total}₽
          </button>
        </div>
      </div>
    </motion.div>
  );
}
