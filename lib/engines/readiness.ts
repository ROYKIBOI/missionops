import { missionDrivers } from "@/mock/missionDrivers";

export interface MissionReadiness {
  score: number;
  completedWeight: number;
  totalWeight: number;
  status: "READY" | "AT_RISK" | "BLOCKED";
}

export function calculateMissionReadiness(): MissionReadiness {
  const totalWeight = missionDrivers.reduce(
    (sum, driver) => sum + driver.readinessWeight,
    0
  );

  const completedWeight = missionDrivers
    .filter((driver) => driver.status === "COMPLETE")
    .reduce((sum, driver) => sum + driver.readinessWeight, 0);

  const score = Math.round((completedWeight / totalWeight) * 100);

  let status: MissionReadiness["status"] = "READY";

  if (score < 100 && score >= 60) {
    status = "AT_RISK";
  } else if (score < 60) {
    status = "BLOCKED";
  }

  return {
    score,
    completedWeight,
    totalWeight,
    status,
  };
}