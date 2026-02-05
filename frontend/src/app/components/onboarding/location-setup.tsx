import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Search, ChevronRight, Building2 } from "lucide-react";

interface LocationSetupProps {
  onNext: (location: { city: string; complex: string }) => void;
  onBack: () => void;
}

const mockComplexes = [
  { id: 1, name: "ЖК Солнечный", address: "ул. Ленина, 12", residents: 1200 },
  { id: 2, name: "ЖК Новый Оккервиль", address: "пр. Энергетиков, 45", residents: 800 },
  { id: 3, name: "ЖК Царская Столица", address: "ул. Пушкина, 78", residents: 950 },
  { id: 4, name: "ЖК Гармония", address: "ул. Мира, 23", residents: 600 },
  { id: 5, name: "ЖК Алые Паруса", address: "наб. Реки, 56", residents: 1500 },
];

export function LocationSetup({ onNext, onBack }: LocationSetupProps) {
  const [city, setCity] = useState("Москва");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedComplex, setSelectedComplex] = useState<typeof mockComplexes[0] | null>(
    null
  );
  const [useGeolocation, setUseGeolocation] = useState(false);

  const filteredComplexes = mockComplexes.filter((complex) =>
    complex.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGeolocation = () => {
    setUseGeolocation(true);
    // Simulate geolocation detection
    setTimeout(() => {
      setSelectedComplex(mockComplexes[0]);
    }, 1000);
  };

  const handleContinue = () => {
    if (selectedComplex) {
      onNext({ city, complex: selectedComplex.name });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-[#E5E7EB]">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={onBack}
            className="text-[#6B7280] hover:text-[#111827] transition-colors flex items-center gap-2"
          >
            ← Назад
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-4 py-2 bg-[#F9FAFB]">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "25%" }}
                animate={{ width: "50%" }}
                transition={{ duration: 0.5 }}
                className="h-full bg-[#4F46E5]"
              />
            </div>
            <span className="text-sm text-[#6B7280]">Шаг 2 из 4</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
        <div className="max-w-2xl w-full py-8">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">
              Где вы живёте?
            </h2>
            <p className="text-[#6B7280]">
              Мы покажем вещи только из вашего ЖК
            </p>
          </motion.div>

          {/* Geolocation Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGeolocation}
            className="w-full mb-6 p-5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <MapPin className="w-5 h-5" />
            {useGeolocation ? "Определяем..." : "Определить автоматически"}
          </motion.button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-[#E5E7EB]" />
            <span className="text-sm text-[#6B7280]">или укажите вручную</span>
            <div className="flex-1 h-px bg-[#E5E7EB]" />
          </div>

          {/* City Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-6"
          >
            <label className="block text-sm font-semibold text-[#111827] mb-2">
              Город
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-3 bg-white border-2 border-[#E5E7EB] rounded-xl focus:border-[#4F46E5] outline-none transition-colors"
            >
              <option>Москва</option>
              <option>Санкт-Петербург</option>
              <option>Казань</option>
              <option>Екатеринбург</option>
              <option>Новосибирск</option>
            </select>
          </motion.div>

          {/* Complex Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mb-6"
          >
            <label className="block text-sm font-semibold text-[#111827] mb-2">
              Жилой комплекс
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Начните вводить название..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-[#E5E7EB] rounded-xl focus:border-[#4F46E5] outline-none transition-colors"
              />
            </div>
          </motion.div>

          {/* Complex List */}
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mb-6 space-y-2 max-h-80 overflow-auto"
            >
              {filteredComplexes.length > 0 ? (
                filteredComplexes.map((complex, index) => (
                  <motion.button
                    key={complex.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setSelectedComplex(complex)}
                    className={`w-full p-4 rounded-xl text-left transition-all ${
                      selectedComplex?.id === complex.id
                        ? "bg-[#EEF2FF] border-2 border-[#4F46E5]"
                        : "bg-white border-2 border-[#E5E7EB] hover:border-[#4F46E5]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          selectedComplex?.id === complex.id
                            ? "bg-[#4F46E5]"
                            : "bg-[#F3F4F6]"
                        }`}
                      >
                        <Building2
                          className={`w-6 h-6 ${
                            selectedComplex?.id === complex.id
                              ? "text-white"
                              : "text-[#6B7280]"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-[#111827] mb-1">
                          {complex.name}
                        </div>
                        <div className="text-sm text-[#6B7280] mb-1">
                          {complex.address}
                        </div>
                        <div className="text-xs text-[#4F46E5] font-semibold">
                          {complex.residents} жителей на платформе
                        </div>
                      </div>
                      {selectedComplex?.id === complex.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 bg-[#4F46E5] rounded-full flex items-center justify-center text-white text-sm"
                        >
                          ✓
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))
              ) : (
                <div className="p-8 text-center text-[#6B7280]">
                  <Building2 className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="font-semibold mb-1">ЖК не найден</p>
                  <p className="text-sm">Попробуйте другой запрос</p>
                </div>
              )}
            </motion.div>
          )}

          {/* Selected Complex Card */}
          {selectedComplex && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] rounded-2xl border border-[#4F46E5]"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#4F46E5] rounded-2xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-[#4F46E5] font-semibold mb-1">
                    Выбран ЖК
                  </div>
                  <div className="text-xl font-bold text-[#111827] mb-1">
                    {selectedComplex.name}
                  </div>
                  <div className="text-sm text-[#6B7280] mb-3">
                    {selectedComplex.address}, {city}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-[#4F46E5]">
                      {selectedComplex.residents} пользователей
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Continue Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: selectedComplex ? 1 : 0.5, y: 0 }}
            transition={{ duration: 0.4 }}
            disabled={!selectedComplex}
            onClick={handleContinue}
            className={`w-full py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
              selectedComplex
                ? "bg-[#4F46E5] text-white hover:bg-[#4338CA] shadow-lg"
                : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
            }`}
          >
            Продолжить
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
