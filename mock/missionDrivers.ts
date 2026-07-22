import type { ReadinessDriver } from "@/types/mission";

export const missionDrivers: ReadinessDriver[] = [

  {
    id: "CONNECTOR",

    title: "HF Connector",

    owner: "Stores",

    status: "IN_PROGRESS",

    readinessWeight: 15,

    eta: 10,

    nextAction: "Issue HF connector to Engineering.",

    missionImpact:
      "HF operational test cannot begin.",
  },

  {
    id: "HF",

    title: "HF Operational Check",

    owner: "Engineering",

    status: "BLOCKED",

    readinessWeight: 25,

    dependsOn: "CONNECTOR",

    eta: 20,

    nextAction:
      "Complete HF operational test.",

    missionImpact:
      "Aircraft cannot be released.",
  },

  {
    id: "CRS",

    title: "Certificate of Release to Service",

    owner: "Engineering",

    status: "BLOCKED",

    dependsOn: "HF",

    readinessWeight: 20,

    eta: 5,

    nextAction:
      "Issue CRS.",

    missionImpact:
      "Aircraft cannot depart.",
  },

  {
    id: "FUEL",

    title: "Fuel Confirmation",

    owner: "Operations",

    status: "COMPLETE",

    readinessWeight: 10,

    eta: 0,

    nextAction: "Completed",

    missionImpact:
      "Fuel onboard confirmed.",
  },

  {
    id: "CREW",

    title: "Crew Assignment",

    owner: "Operations",

    status: "COMPLETE",

    readinessWeight: 15,

    eta: 0,

    nextAction: "Completed",

    missionImpact:
      "Crew available.",
  },

  {
    id: "AIRCRAFT",

    title: "Aircraft Allocation",

    owner: "Operations",

    status: "COMPLETE",

    readinessWeight: 15,

    eta: 0,

    nextAction: "Completed",

    missionImpact:
      "Aircraft allocated.",
  }

];