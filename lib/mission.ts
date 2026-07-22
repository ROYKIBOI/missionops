import type { Mission } from "@/types/mission";

import { missionDrivers } from "@/mock/missionDrivers";

import { calculateMissionReadiness } from "@/lib/engines/readiness";

export const mission: Mission = {

  id: "MED001",

  aircraft: "5Y-ABC",

  missionType: "Humanitarian Cargo",

  priority: "HIGH",

  origin: "NBO",

  destination: "LKG",

  scheduledDeparture: "11:40",

  captain: "Capt. Mwangi",

  dispatcher: "Flight Operations",

  lastUpdated: new Date(),

  drivers: missionDrivers,

  readiness:
    calculateMissionReadiness(
      missionDrivers
    ),

};

export function updateMissionTimestamp() {

  mission.lastUpdated = new Date();

}