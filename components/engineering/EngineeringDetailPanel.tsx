"use client";

import { useEffect, useState } from "react";

import type { ReadinessDriver } from "@/types/mission";
import { completeDriver } from "@/lib/actions/missionActions";

import CompleteTaskButton from "./CompleteTaskButton";

interface Props {
  driver: ReadinessDriver | null;
}

export default function EngineeringDetailPanel({
  driver,
}: Props) {
  const [status, setStatus] = useState(driver?.status);

  useEffect(() => {
    setStatus(driver?.status);
  }, [driver]);

  if (!driver) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-bold">
          Engineering Task
        </h2>

        <p className="mt-4 text-slate-400">
          Select an engineering task.
        </p>
      </div>
    );
  }

  function handleComplete() {
    // TypeScript safety check
    if (!driver) return;

    completeDriver(driver.id);

    setStatus("COMPLETE");
  }

  return (
    <div className="rounded-2xl border border-cyan-500 bg-slate-900 p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          {driver.title}
        </h2>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            status === "COMPLETE"
              ? "bg-green-600"
              : status === "IN_PROGRESS"
              ? "bg-yellow-600"
              : status === "BLOCKED"
              ? "bg-red-600"
              : "bg-slate-700"
          }`}
        >
          {status}
        </span>

      </div>

      <div className="mt-8 space-y-5">

        <div>
          <p className="text-sm text-slate-400">
            Mission Impact
          </p>

          <p>{driver.missionImpact}</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Dependency
          </p>

          <p>{driver.dependsOn ?? "None"}</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Required Action
          </p>

          <p>{driver.nextAction}</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            ETA
          </p>

          <p>{driver.eta} minutes</p>
        </div>

        {status !== "COMPLETE" && (
          <CompleteTaskButton
            onComplete={handleComplete}
          />
        )}

      </div>

    </div>
  );
}