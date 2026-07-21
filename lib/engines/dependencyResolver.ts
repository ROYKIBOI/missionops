import { mission } from "@/lib/mission";

export function resolveDependencies() {
  mission.drivers.forEach((driver) => {
    if (!driver.dependsOn) return;

    const dependency = mission.drivers.find(
      (d) => d.id === driver.dependsOn
    );

    if (!dependency) return;

    if (
      dependency.status === "COMPLETE" &&
      driver.status === "BLOCKED"
    ) {
      driver.status = "NOT_STARTED";
    }
  });
}