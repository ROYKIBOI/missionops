"use client";

import type { ReadinessDriver } from "@/types/mission";

interface Props {
  driver: ReadinessDriver | null;
}

export default function MissionDetailPanel({ driver }: Props) {
  if (!driver) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-2xl font-bold">
          Driver Details
        </h2>

        <p className="mt-4 text-slate-400">
          Select a readiness driver from the left to inspect ownership,
          dependencies and mission impact.
        </p>

      </div>
    );
  }

  const statusColour =
    driver.status === "COMPLETE"
      ? "bg-green-600"
      : driver.status === "IN_PROGRESS"
      ? "bg-yellow-600"
      : driver.status === "BLOCKED"
      ? "bg-red-600"
      : "bg-slate-700";

  return (
    <div className="rounded-2xl border border-cyan-500 bg-slate-900 p-8 shadow-xl">

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Readiness Driver
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {driver.title}
          </h2>

        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${statusColour}`}
        >
          {driver.status}
        </span>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div className="rounded-xl bg-slate-800/60 p-5">
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Owner
          </p>

          <p className="mt-2 text-lg font-semibold">
            {driver.owner}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800/60 p-5">
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Dependency
          </p>

          <p className="mt-2 text-lg">
            {driver.dependsOn ?? "None"}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800/60 p-5">
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Next Action
          </p>

          <p className="mt-2">
            {driver.nextAction}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800/60 p-5">
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Estimated Completion
          </p>

          <p className="mt-2">
            {driver.eta} minutes
          </p>
        </div>

      </div>

      <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/10 p-5">

        <p className="text-xs uppercase tracking-widest text-red-300">
          Mission Impact
        </p>

        <p className="mt-3 leading-7">
          {driver.missionImpact}
        </p>

      </div>

      <div className="mt-8">

        <div className="flex items-center justify-between">

          <span className="text-sm text-slate-400">
            Readiness Contribution
          </span>

          <span className="font-semibold">
            {driver.readinessWeight}%
          </span>

        </div>

        <div className="mt-3 h-3 rounded-full bg-slate-700">

          <div
            className="h-full rounded-full bg-cyan-400"
            style={{
              width: `${driver.readinessWeight}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}