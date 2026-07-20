import { missionDrivers } from "@/mock/missionDrivers";

export function resolveDependencyChain(driverId: string) {
  const chain: string[] = [];

  let current = missionDrivers.find(
    (driver) => driver.id === driverId
  );

  while (current?.dependsOn) {
    chain.push(current.dependsOn);

    current = missionDrivers.find(
      (driver) => driver.id === current?.dependsOn
    );
  }

  return chain;
}