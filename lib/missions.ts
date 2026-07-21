import { missionDrivers } from "@/mock/missionDrivers";
import { calculateMissionReadiness } from "./engines/readiness";

export const mission = {
  id: "MED001",

  aircraft: "5Y-ABC",

  priority: "HIGH",

  missionType: "Humanitarian Cargo",

  origin: "NBO",

  destination: "LKG",

  scheduledDeparture: "11:40",

  captain: "Capt. Mwangi",

  dispatcher: "Flight Operations",

  readiness: calculateMissionReadiness(),

  drivers: missionDrivers,
};