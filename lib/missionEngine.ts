import { mission } from "@/lib/mission";
import { ReadinessDriver } from "@/types/mission";

function incompleteDrivers() {
  return mission.drivers.filter(
    (driver) => driver.status !== "COMPLETE"
  );
}

export function getMissionBlockers(): ReadinessDriver[] {
  return incompleteDrivers();
}

export function getCriticalBlocker(): ReadinessDriver | null {
  const blockers = incompleteDrivers();

  if (blockers.length === 0) {
    return null;
  }

  return blockers.sort(
    (a, b) => b.readinessWeight - a.readinessWeight
  )[0];
}

export function getNextAction(): string {
  const blocker = getCriticalBlocker();

  return blocker
    ? blocker.nextAction
    : "Mission ready for release.";
}

export function getMissionOwner(): string {
  const blocker = getCriticalBlocker();

  return blocker
    ? blocker.owner
    : "Operations";
}

export function getMissionETA(): number {
  const blocker = getCriticalBlocker();

  return blocker
    ? blocker.eta
    : 0;
}