import { mission } from "@/lib/mission";
import { calculateMissionReadiness } from "@/lib/engines/readiness";

export function generateMissionBrief() {

  const readiness = calculateMissionReadiness(
    mission.drivers
  );

  const outstanding = mission.drivers.filter(
    (driver) => driver.status !== "COMPLETE"
  );

  if (readiness.status === "READY") {
    return {
      title: "Mission Ready",
      summary:
        "All readiness drivers have been completed. The aircraft is ready for operational release.",
    };
  }

  return {
    title: "Mission At Risk",
    summary: `${outstanding.length} readiness driver(s) remain outstanding. Completing them will increase overall mission readiness and remove operational blockers.`,
  };
}