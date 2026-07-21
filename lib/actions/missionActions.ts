import { mission } from "@/lib/mission";
import { calculateMissionReadiness } from "@/lib/engines/readiness";
import { resolveDependencies } from "@/lib/engines/dependencyResolver";

function refreshMission() {
  resolveDependencies();
  mission.readiness = calculateMissionReadiness();
}

export function completeDriver(driverId: string) {
  const driver = mission.drivers.find(
    (d) => d.id === driverId
  );

  if (!driver) return;

  driver.status = "COMPLETE";

  refreshMission();
}

export function startDriver(driverId: string) {
  const driver = mission.drivers.find(
    (d) => d.id === driverId
  );

  if (!driver) return;

  driver.status = "IN_PROGRESS";

  refreshMission();
}

export function blockDriver(driverId: string) {
  const driver = mission.drivers.find(
    (d) => d.id === driverId
  );

  if (!driver) return;

  driver.status = "BLOCKED";

  refreshMission();
}