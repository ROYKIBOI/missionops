export type DriverStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETE"
  | "BLOCKED";

export interface ReadinessDriver {
  id: string;
  title: string;

  owner: string;

  status: DriverStatus;

  readinessWeight: number;

  dependsOn?: string;

  eta: number;

  nextAction: string;

  missionImpact: string;
}