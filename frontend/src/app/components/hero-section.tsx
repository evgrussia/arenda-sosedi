import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const parallaxX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const parallaxY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#3B82F6]">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #4F46E5 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #7C3AED 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, #3B82F6 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #4F46E5 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 3D Floating Elements */}
      <FloatingElement
        emoji="🔧"
        delay={0}
        x={parallaxX}
        y={parallaxY}
        position="top-[20%] left-[10%]"
      />
      <FloatingElement
        emoji="⚽"
        delay={1}
        x={parallaxX}
        y={parallaxY}
        position="top-[60%] left-[15%]"
      />
      <FloatingElement
        emoji="📱"
        delay={2}
        x={parallaxX}
        y={parallaxY}
        position="top-[30%] right-[20%]"
      />
      <FloatingElement
        emoji="👶"
        delay={1.5}
        x={parallaxX}
        y={parallaxY}
        position="bottom-[25%] right-[10%]"
      />

      {/* Glassmorphic Main Card */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 flex items-center justify-center gap-3"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
              <span className="text-3xl">🏠🤝</span>
            </div>
            <h1 className="text-4xl font-bold text-white">Арендо-Соседи</h1>
          </motion.div>

          {/* Main Content in Glassmorphic Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Арендуй у соседа — быстро, рядом, безопасно
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Вещи, которые нужны редко, но важны. От соседей в вашем доме.
            </p>

            {/* Stats Counter */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <StatCounter value="50M+" label="жителей МКД в России" delay={0.6} />
              <StatCounter value="90%" label="Экономия до" delay={0.8} />
              <StatCounter value="5 мин" label="до вещи" delay={1} />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="https://t.me/ArendoSosediBot"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-[#4F46E5] px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.787-1.36 5.025-.168.525-.5.7-.82.717-.697.063-1.226-.46-1.901-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.248-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.481-.428-.008-1.252-.242-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.325.016.094.036.308.02.475z"/>
                </svg>
                Открыть в Telegram
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  document.getElementById("learn-more")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-white border-2 border-white/50 px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                Узнать больше
              </motion.button>
            </div>
          </motion.div>

          {/* Floating Product Cards */}
          <div className="hidden lg:block">
            <FloatingProductCard
              title="Дрель Bosch"
              price="300₽/день"
              position="absolute top-[20%] left-[5%]"
              delay={1.2}
            />
            <FloatingProductCard
              title="Велосипед Trek"
              price="500₽/день"
              position="absolute top-[50%] right-[5%]"
              delay={1.4}
            />
            <FloatingProductCard
              title="Проектор Epson"
              price="800₽/день"
              position="absolute bottom-[15%] left-[10%]"
              delay={1.6}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/80 cursor-pointer"
          onClick={() => {
            document.getElementById("learn-more")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown className="w-6 h-6" />
          <span className="text-sm">Прокрутите вниз</span>
        </motion.div>
      </motion.div>

      {/* Anchor for scroll */}
      <div id="learn-more" className="absolute bottom-0" />
    </section>
  );
}

// Floating Element Component
function FloatingElement({
  emoji,
  delay,
  x,
  y,
  position,
}: {
  emoji: string;
  delay: number;
  x: any;
  y: any;
  position: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{ delay, duration: 0.8 }}
      style={{ x, y }}
      className={`absolute ${position} text-6xl select-none pointer-events-none`}
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {emoji}
      </motion.div>
    </motion.div>
  );
}

// Stat Counter Component
function StatCounter({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-sm md:text-base text-white/80">{label}</div>
    </motion.div>
  );
}

// Floating Product Card Component
function FloatingProductCard({
  title,
  price,
  position,
  delay,
}: {
  title: string;
  price: string;
  position: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={position}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-2xl p-4 shadow-xl min-w-[200px]"
      >
        <div className="w-full h-24 bg-white/20 rounded-xl mb-3 flex items-center justify-center text-4xl">
          📷
        </div>
        <div className="text-white font-semibold mb-1">{title}</div>
        <div className="text-white/90 text-sm">{price}</div>
      </motion.div>
    </motion.div>
  );
}
