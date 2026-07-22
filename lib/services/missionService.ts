import { mission } from "@/lib/mission";

export function getMission() {
  return mission;
}

export function getDrivers() {
  return mission.drivers;
}

export function getEngineeringDrivers() {
  return mission.drivers.filter(
    driver => driver.owner === "Engineering"
  );
}

export function getStoresDrivers() {
  return mission.drivers.filter(
    driver => driver.owner === "Stores"
  );
}

export function getOperationsDrivers() {
  return mission.drivers.filter(
    driver => driver.owner === "Operations"
  );
}

export function getDriver(id: string) {

  return mission.drivers.find(
    driver => driver.id === id
  );

}