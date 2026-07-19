import MissionCard from "./MissionCard";
import { missions } from "@/mock/missions";

export default function MissionList() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {missions.map((mission) => (
        <MissionCard
          key={mission.id}
          mission={mission}
        />
      ))}
    </div>
  );
}