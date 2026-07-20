"use client";

import type { ReadinessDriver } from "@/types/mission";

interface Props {
  driver: ReadinessDriver | null;
}

export default function MissionDetailPanel({ driver }: Props) {
  if (!driver) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-bold">Mission Details</h2>

        <p className="mt-4 text-slate-400">
          Select a readiness driver to view mission impact.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-cyan-500 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{driver.title}</h2>

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            driver.status === "COMPLETE"
              ? "bg-green-600"
              : driver.status === "IN_PROGRESS"
              ? "bg-yellow-600"
              : driver.status === "BLOCKED"
              ? "bg-red-600"
              : "bg-slate-700"
          }`}
        >
          {driver.status}
        </span>
      </div>

      <div className="mt-8 space-y-6">
        <div>
          <p className="text-sm text-slate-400">Owner</p>
          <p className="font-medium">{driver.owner}</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Mission Impact</p>
          <p>{driver.missionImpact}</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Dependency</p>
          <p>{driver.dependsOn ?? "None"}</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Next Action</p>
          <p>{driver.nextAction}</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Estimated Completion</p>
          <p>{driver.eta} minutes</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Readiness Weight</p>
          <p>{driver.readinessWeight}%</p>
        </div>
      </div>
    </div>
  );
}