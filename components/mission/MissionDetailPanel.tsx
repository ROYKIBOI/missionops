"use client";

import type { MissionBlocker } from "@/mock/missionDrivers";

interface Props {
  blocker: MissionBlocker | null;
}

export default function MissionDetailPanel({
  blocker,
}: Props) {
  if (!blocker) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-bold">
          Mission Details
        </h2>

        <p className="mt-4 text-slate-400">
          Select a readiness driver to view mission impact.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-cyan-500 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold">
        {blocker.title}
      </h2>

      <div className="mt-6 space-y-5">

        <div>
          <p className="text-slate-400">Owner</p>
          <p>{blocker.owner}</p>
        </div>

        <div>
          <p className="text-slate-400">Mission Impact</p>
          <p>{blocker.impact}</p>
        </div>

        <div>
          <p className="text-slate-400">Depends On</p>
          <p>{blocker.dependsOn}</p>
        </div>

        <div>
          <p className="text-slate-400">Next Step</p>
          <p>{blocker.nextStep}</p>
        </div>

        <div>
          <p className="text-slate-400">ETA</p>
          <p>{blocker.eta}</p>
        </div>

        <div>
          <p className="text-slate-400">Assigned To</p>
          <p>{blocker.assignedTo}</p>
        </div>

      </div>

    </div>
  );
}