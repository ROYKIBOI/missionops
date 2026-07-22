import { getMissionBlockers } from "@/lib/engines/blockerEngine";

import MissionBlockerCard from "./MissionBlockerCard";

export default function MissionBlockersPanel() {
  const blockers = getMissionBlockers();

  if (blockers.length === 0) {
    return (
      <div className="rounded-2xl border border-green-600 bg-green-600/10 p-6">
        <h2 className="text-2xl font-bold text-green-400">
          No Mission Blockers
        </h2>

        <p className="mt-3 text-slate-300">
          Mission workflow is progressing normally.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {blockers.map((driver) => (
        <MissionBlockerCard
          key={driver.id}
          driver={driver}
        />
      ))}
    </div>
  );
}