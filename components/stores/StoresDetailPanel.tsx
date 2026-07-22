"use client";

import type { ReadinessDriver } from "@/types/mission";

interface Props {
  driver: ReadinessDriver | null;
  onIssuePart: () => void;
}

export default function StoresDetailPanel({
  driver,
  onIssuePart,
}: Props) {

  if (!driver) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <h2 className="text-2xl font-bold">
          Stores Task
        </h2>

        <p className="mt-4 text-slate-400">
          Select a stores request.
        </p>

      </div>
    );
  }

  return (

    <div className="rounded-2xl border border-cyan-500 bg-slate-900 p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          {driver.title}
        </h2>

        <span
          className={`rounded-full px-3 py-1 text-sm ${
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

          <p className="text-sm text-slate-400">
            Mission Impact
          </p>

          <p className="mt-1">
            {driver.missionImpact}
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-400">
            Required Action
          </p>

          <p className="mt-1">
            {driver.nextAction}
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-400">
            Estimated Time
          </p>

          <p className="mt-1">
            {driver.eta} minutes
          </p>

        </div>

        {driver.status !== "COMPLETE" ? (

          <button
            onClick={onIssuePart}
            className="rounded-xl bg-cyan-600 px-5 py-3 font-semibold transition hover:bg-cyan-500"
          >
            Issue Part
          </button>

        ) : (

          <button
            disabled
            className="rounded-xl bg-green-700 px-5 py-3 font-semibold"
          >
            Part Issued ✓
          </button>

        )}

      </div>

    </div>

  );
}