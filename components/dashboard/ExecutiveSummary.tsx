import { getMissionSnapshot } from "@/lib/engines/missionEngine";

export default function ExecutiveSummary() {

  const snapshot = getMissionSnapshot();

  return (

    <div className="rounded-2xl border border-cyan-500 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-cyan-400">
        Executive Summary
      </h2>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">

          <span>Mission</span>

          <span>{snapshot.mission.id}</span>

        </div>

        <div className="flex justify-between">

          <span>Aircraft</span>

          <span>{snapshot.mission.aircraft}</span>

        </div>

        <div className="flex justify-between">

          <span>Readiness</span>

          <span>{snapshot.readiness.score}%</span>

        </div>

        <div className="flex justify-between">

          <span>Status</span>

          <span>{snapshot.readiness.status}</span>

        </div>

        <div className="flex justify-between">

          <span>Outstanding Drivers</span>

          <span>{snapshot.outstandingDrivers}</span>

        </div>

      </div>

    </div>

  );

}