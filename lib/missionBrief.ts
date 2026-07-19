import { missionDrivers } from "@/mock/missionDrivers";
import { calculateMissionReadiness } from "./engines/readiness";

export function generateMissionBrief() {
  const readiness = calculateMissionReadiness();

  const outstanding = missionDrivers.filter(
    (b) => b.status !== "COMPLETE"
  );

  if (outstanding.length === 0) {
    return {
      title: "Mission Ready",
      summary:
        "All mission drivers are complete. Aircraft is ready for release.",
    };
  }

  const first = outstanding[0];

  return {
    title: "Why Not Ready?",
    summary: `Mission readiness is ${readiness}%. The primary constraint is "${first.title}" owned by ${first.owner}. Next action: ${first.nextAction}. Estimated completion: ${first.eta} minutes.`,
  };
}