import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const footerLinks = {
  product: {
    title: "Продукт",
    links: [
      { label: "Как это работает", href: "#how-it-works" },
      { label: "Категории", href: "#categories" },
      { label: "Цены", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  company: {
    title: "Компания",
    links: [
      { label: "О нас", href: "#about" },
      { label: "Контакты", href: "#contacts" },
      { label: "Вакансии", href: "#careers" },
      { label: "Для бизнеса", href: "#b2b" },
    ],
  },
  legal: {
    title: "Правовая информация",
    links: [
      { label: "Пользовательское соглашение", href: "#terms" },
      { label: "Политика конфиденциальности", href: "#privacy" },
      { label: "Правила платформы", href: "#rules" },
      { label: "Правила отмены", href: "#cancellation" },
    ],
  },
};

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <footer ref={ref} className="bg-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl">
                <span className="text-2xl">🏠🤝</span>
              </div>
              <h3 className="text-xl font-bold">Арендо-Соседи</h3>
            </div>
            <p className="text-white/70 mb-4">Арендуй у соседа</p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://t.me/ArendoSosedi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.787-1.36 5.025-.168.525-.5.7-.82.717-.697.063-1.226-.46-1.901-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.248-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.481-.428-.008-1.252-.242-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.325.016.094.036.308.02.475z" />
                </svg>
              </a>
              <a
                href="https://vk.com/arendososedi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                VK
              </a>
              <a
                href="https://instagram.com/arendososedi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                IG
              </a>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl">
              <span className="text-2xl">🏠🤝</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Арендо-Соседи</h3>
              <p className="text-white/70 text-sm">Арендуй у соседа</p>
            </div>
          </div>

          {/* Collapsible Sections */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <MobileFooterSection key={key} title={section.title} links={section.links} />
          ))}

          {/* Social Links */}
          <div className="flex gap-3 justify-center pt-6">
            <a
              href="https://t.me/ArendoSosedi"
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
            >
              TG
            </a>
            <a
              href="https://vk.com/arendososedi"
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
            >
              VK
            </a>
            <a
              href="https://instagram.com/arendososedi"
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
            >
              IG
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <div>© 2025 Арендо-Соседи. Все права защищены</div>
            <div className="flex items-center gap-2">
              Сделано в России <span className="text-lg">🇷🇺</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs">Visa</span>
              <span className="text-xs">Mastercard</span>
              <span className="text-xs">МИР</span>
              <span className="text-xs font-semibold">YooKassa</span>
            </div>
          </div>
        </motion.div>

        {/* Mobile Fixed CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1F2937] to-transparent z-50">
          <a
            href="https://t.me/ArendoSosediBot"
            className="block w-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-center py-4 rounded-full font-semibold shadow-2xl"
          >
            Открыть в Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}

function MobileFooterSection({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2"
      >
        <span className="font-semibold">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <ul className="space-y-2 pt-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white/70 hover:text-white transition-colors text-sm block py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
