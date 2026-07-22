export type DriverStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETE"
  | "BLOCKED";

export interface ReadinessDriver {
  id: string;

  title: string;

  owner:
    | "Engineering"
    | "Stores"
    | "Operations"
    | "Flight Operations"
    | "Dispatch";

  status: DriverStatus;

  readinessWeight: number;

  dependsOn?: string;

  eta: number;

  nextAction: string;

  missionImpact: string;
}

export interface MissionReadiness {

  score: number;

  completedWeight: number;

  totalWeight: number;

  status:
    | "READY"
    | "AT_RISK"
    | "BLOCKED";

}

export interface Mission {

  id: string;

  aircraft: string;

  missionType: string;

  priority: string;

  origin: string;

  destination: string;

  scheduledDeparture: string;

  captain: string;

  dispatcher: string;

  lastUpdated: Date;

  readiness: MissionReadiness;

  drivers: ReadinessDriver[];

}