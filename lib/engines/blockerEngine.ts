import { mission } from "@/lib/mission";

export function getMissionBlockers() {
  return mission.drivers
    .filter((driver) => driver.status === "BLOCKED")
    .map((driver) => {
      const dependency = mission.drivers.find(
        (d) => d.id === driver.dependsOn
      );

      return {
        driver,
        dependency,
      };
    });
}