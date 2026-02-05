import { useState } from "react";
import { OnboardingFlow } from "./onboarding/onboarding-flow";

export function OnboardingDemo() {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  const handleOnboardingComplete = (data: any) => {
    setUserData(data);
    setIsOnboardingComplete(true);
  };

  const handleRestart = () => {
    setIsOnboardingComplete(false);
    setUserData(null);
  };

  if (isOnboardingComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#EEF2FF] flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Онбординг завершён!
            </h1>
            <p className="text-[#6B7280]">Вот данные, которые вы ввели:</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="p-4 bg-[#F9FAFB] rounded-xl">
              <div className="text-sm text-[#6B7280] mb-1">Роль</div>
              <div className="font-semibold text-[#111827] capitalize">
                {userData?.role === "renter"
                  ? "Арендатор"
                  : userData?.role === "owner"
                  ? "Владелец"
                  : "Арендатор и Владелец"}
              </div>
            </div>

            <div className="p-4 bg-[#F9FAFB] rounded-xl">
              <div className="text-sm text-[#6B7280] mb-1">Локация</div>
              <div className="font-semibold text-[#111827]">
                {userData?.location?.complex}
              </div>
              <div className="text-sm text-[#6B7280]">{userData?.location?.city}</div>
            </div>

            <div className="p-4 bg-[#F9FAFB] rounded-xl">
              <div className="text-sm text-[#6B7280] mb-2">Разрешения</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Геолокация</span>
                  <span className={userData?.permissions?.location ? "text-[#10B981]" : "text-[#EF4444]"}>
                    {userData?.permissions?.location ? "✓ Разрешено" : "✗ Отклонено"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Уведомления</span>
                  <span className={userData?.permissions?.notifications ? "text-[#10B981]" : "text-[#EF4444]"}>
                    {userData?.permissions?.notifications ? "✓ Разрешено" : "✗ Отклонено"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Камера</span>
                  <span className={userData?.permissions?.camera ? "text-[#10B981]" : "text-[#EF4444]"}>
                    {userData?.permissions?.camera ? "✓ Разрешено" : "✗ Отклонено"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="w-full py-4 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-2xl font-semibold hover:shadow-lg transition-shadow"
          >
            Пройти онбординг заново
          </button>
        </div>
      </div>
    );
  }

  return <OnboardingFlow onComplete={handleOnboardingComplete} />;
}
