import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Как начать пользоваться?",
    answer:
      "1. Откройте бота @ArendoSosediBot в Telegram. 2. Авторизуйтесь и укажите свой ЖК. 3. Начните искать вещи или создайте объявление. Всё занимает 2 минуты!",
  },
  {
    question: "Безопасно ли арендовать у незнакомцев?",
    answer:
      "Вы арендуете не у незнакомцев, а у соседей из вашего ЖК. Все пользователи верифицированы по адресу. Плюс система рейтингов, отзывов и эскроу-платежей защищает обе стороны.",
  },
  {
    question: "Что если вещь сломают?",
    answer:
      "Для этого есть залог. Если арендатор повредил вещь, вы можете удержать залог или его часть. Откройте спор с фото, и мы поможем разобраться.",
  },
  {
    question: "Как вывести деньги?",
    answer:
      "В разделе 'Финансы' нажмите 'Вывести'. Минимум 100₽. Деньги придут на карту за 1-3 рабочих дня. Комиссии за вывод нет.",
  },
  {
    question: "Какая комиссия платформы?",
    answer:
      "12.5% от суммы аренды (не от залога). Комиссия покрывает защиту платежей, поддержку и работу платформы. Владелец получает 87.5%.",
  },
  {
    question: "Можно ли арендовать вещи в других ЖК?",
    answer:
      "Пока нет. Идея в гиперлокальности — вещь рядом, буквально в соседнем подъезде. В будущем добавим расширение радиуса.",
  },
  {
    question: "Что делать при споре?",
    answer:
      "Нажмите 'Открыть спор' в карточке аренды. Опишите проблему, приложите фото. У другой стороны 48 часов на ответ. Если не договоритесь — решит модератор.",
  },
  {
    question: "Как устанавливать цену?",
    answer:
      "При создании объявления мы покажем рекомендуемую цену на основе похожих вещей. Можете поставить выше или ниже — решать вам.",
  },
  {
    question: "Можно ли отменить бронирование?",
    answer:
      "Да. Если до начала аренды более 24 часов — возврат 100%. Менее 24 часов — 50%. Детали в правилах отмены.",
  },
  {
    question: "Работает ли без Telegram?",
    answer:
      "Нет, приложение работает только как Telegram WebApp. Это проще, безопаснее и не требует установки отдельного приложения.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Частые вопросы
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onClick,
  isInView,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onClick: () => void;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#4F46E5] transition-colors"
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#F9FAFB] transition-colors"
      >
        <span className="text-lg font-semibold text-[#111827] pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <Minus className="w-6 h-6 text-[#4F46E5]" />
          ) : (
            <Plus className="w-6 h-6 text-[#6B7280]" />
          )}
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-[#6B7280] leading-relaxed">{answer}</div>
      </motion.div>
    </motion.div>
  );
}
