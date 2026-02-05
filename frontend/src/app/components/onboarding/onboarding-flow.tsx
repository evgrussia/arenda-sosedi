import { useState } from "react";
import { WelcomeScreen } from "./welcome-screen";
import { RoleSelection } from "./role-selection";
import { LocationSetup } from "./location-setup";
import { PermissionsScreen } from "./permissions-screen";
import { CompletionScreen } from "./completion-screen";

type OnboardingStep = "welcome" | "role" | "location" | "permissions" | "completion";

interface OnboardingData {
  role: "renter" | "owner" | "both";
  location: { city: string; complex: string };
  permissions: {
    location: boolean;
    notifications: boolean;
    camera: boolean;
  };
}

interface OnboardingFlowProps {
  onComplete: (data: OnboardingData) => void;
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("welcome");
  const [onboardingData, setOnboardingData] = useState<Partial<OnboardingData>>({});

  const handleWelcomeNext = () => {
    setCurrentStep("role");
  };

  const handleRoleNext = (role: "renter" | "owner" | "both") => {
    setOnboardingData((prev) => ({ ...prev, role }));
    setCurrentStep("location");
  };

  const handleLocationNext = (location: { city: string; complex: string }) => {
    setOnboardingData((prev) => ({ ...prev, location }));
    setCurrentStep("permissions");
  };

  const handlePermissionsNext = (permissions: {
    location: boolean;
    notifications: boolean;
    camera: boolean;
  }) => {
    setOnboardingData((prev) => ({ ...prev, permissions }));
    setCurrentStep("completion");
  };

  const handleComplete = () => {
    if (
      onboardingData.role &&
      onboardingData.location &&
      onboardingData.permissions
    ) {
      onComplete(onboardingData as OnboardingData);
    }
  };

  const handleBack = () => {
    switch (currentStep) {
      case "role":
        setCurrentStep("welcome");
        break;
      case "location":
        setCurrentStep("role");
        break;
      case "permissions":
        setCurrentStep("location");
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen">
      {currentStep === "welcome" && <WelcomeScreen onNext={handleWelcomeNext} />}

      {currentStep === "role" && (
        <RoleSelection onNext={handleRoleNext} onBack={handleBack} />
      )}

      {currentStep === "location" && (
        <LocationSetup onNext={handleLocationNext} onBack={handleBack} />
      )}

      {currentStep === "permissions" && (
        <PermissionsScreen onNext={handlePermissionsNext} onBack={handleBack} />
      )}

      {currentStep === "completion" && onboardingData.role && onboardingData.location && (
        <CompletionScreen
          userData={{
            role: onboardingData.role,
            location: onboardingData.location,
          }}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
}
