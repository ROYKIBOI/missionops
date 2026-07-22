import { mission } from "@/lib/mission";
import { calculateMissionReadiness } from "@/lib/engines/readiness";
import { resolveDependencies } from "@/lib/engines/dependencyResolver";
import { updateMissionTimestamp } from "@/lib/mission";
import { notifyMissionChanged } from "@/lib/store/missionStore";
import { logMissionEvent } from "@/lib/eventLog";
function refreshMission() {
  resolveDependencies();

  mission.readiness =
  calculateMissionReadiness(
    mission.drivers
  );

  updateMissionTimestamp();
  notifyMissionChanged();
}

export function completeDriver(driverId: string) {
  const driver = mission.drivers.find(
    (d) => d.id === driverId
  );

  if (!driver) return;

  driver.status = "COMPLETE";
  logMissionEvent(

  driver.owner,

  driver.title,

  `${driver.title} completed`

);

  refreshMission();
}

export function startDriver(driverId: string) {
  const driver = mission.drivers.find(
    (d) => d.id === driverId
  );

  if (!driver) return;

  driver.status = "IN_PROGRESS";
  logMissionEvent(

  driver.owner,

  driver.title,

  `${driver.title} started`

);

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

export function resetMission() {
  mission.drivers.forEach((driver) => {
    switch (driver.id) {
      case "CONNECTOR":
        driver.status = "IN_PROGRESS";
        break;

      case "FUEL":
      case "CREW":
      case "AIRCRAFT":
        driver.status = "COMPLETE";
        break;

      default:
        driver.status = "BLOCKED";
        logMissionEvent(

  driver.owner,

  driver.title,

  `${driver.title} blocked`

);
    }
  });

  refreshMission();
}