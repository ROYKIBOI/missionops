export type MissionStatus = "READY" | "AT_RISK" | "BLOCKED";

export interface Mission {
  id: string;
  title: string;
  type: string;
  origin: string;
  destination: string;
  aircraft: string;
  readiness: number;
  status: MissionStatus;
}

export const missions: Mission[] = [
  {
    id: "MED001",
    title: "Medical Relief",
    type: "Humanitarian",
    origin: "JKIA",
    destination: "Lokichoggio",
    aircraft: "5Y-FAJ",
    readiness: 84,
    status: "AT_RISK",
  },
  {
    id: "REL014",
    title: "Food Relief",
    type: "Humanitarian",
    origin: "JKIA",
    destination: "Wajir",
    aircraft: "5Y-MJM",
    readiness: 100,
    status: "READY",
  },
  {
    id: "CHR009",
    title: "Charter Flight",
    type: "Charter",
    origin: "JKIA",
    destination: "Mogadishu",
    aircraft: "5Y-SMJ",
    readiness: 61,
    status: "BLOCKED",
  },
];