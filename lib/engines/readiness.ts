import type { ReadinessDriver } from "@/types/mission";

export interface MissionReadiness {
  score: number;
  completedWeight: number;
  totalWeight: number;
  status: "READY" | "AT_RISK" | "BLOCKED";
}

export function calculateMissionReadiness(
  drivers: ReadinessDriver[]
): MissionReadiness {

  const totalWeight = drivers.reduce(
    (sum, driver) => sum + driver.readinessWeight,
    0
  );

  const completedWeight = drivers
    .filter(
      (driver) => driver.status === "COMPLETE"
    )
    .reduce(
      (sum, driver) =>
        sum + driver.readinessWeight,
      0
    );

  const score = Math.round(
    (completedWeight / totalWeight) * 100
  );

  let status: MissionReadiness["status"] =
    "READY";

  if (score < 100 && score >= 60) {
    status = "AT_RISK";
  }

  if (score < 60) {
    status = "BLOCKED";
  }

  return {
    score,
    completedWeight,
    totalWeight,
    status,
  };
}