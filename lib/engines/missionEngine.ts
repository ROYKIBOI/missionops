import { mission } from "@/lib/mission";

import { calculateMissionReadiness } from "./readiness";
import { getCriticalBlocker } from "./blockerEngine";
import { generateMissionBrief } from "@/lib/missionBrief";

export function getMissionSnapshot() {

  const readiness =
    calculateMissionReadiness(
      mission.drivers
    );

  const blocker =
    getCriticalBlocker();

  return {

    mission,

    readiness,

    blocker,

    brief: generateMissionBrief(),

    completedDrivers:
      mission.drivers.filter(
        driver => driver.status === "COMPLETE"
      ).length,

    outstandingDrivers:
      mission.drivers.filter(
        driver => driver.status !== "COMPLETE"
      ).length,

    completion:

      mission.drivers.length === 0
        ? 0
        : Math.round(
            mission.drivers.filter(
              d => d.status === "COMPLETE"
            ).length /
            mission.drivers.length *
            100
          )

  };

}