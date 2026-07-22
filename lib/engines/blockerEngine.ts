import { mission } from "@/lib/mission";
import type { ReadinessDriver } from "@/types/mission";

function incompleteDrivers(): ReadinessDriver[] {
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

  return blockers.reduce((highest, current) =>
    current.readinessWeight > highest.readinessWeight
      ? current
      : highest
  );
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