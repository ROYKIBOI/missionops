"use client";

import type { ReadinessDriver } from "@/types/mission";

interface Props {
  driver: ReadinessDriver;
  onSelect: (driver: ReadinessDriver) => void;
}

export default function EngineeringTaskCard({
  driver,
  onSelect,
}: Props) {
  const statusColour =
    driver.status === "COMPLETE"
      ? "bg-green-500"
      : driver.status === "IN_PROGRESS"
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <button
      onClick={() => onSelect(driver)}
      className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left transition hover:border-cyan-500 hover:shadow-xl"
    >
      <div className="flex items-center justify-between">

        <h3 className="text-lg font-semibold">
          {driver.title}
        </h3>

        <span
          className={`h-3 w-3 rounded-full ${statusColour}`}
        />

      </div>

      <p className="mt-3 text-sm text-slate-400">
        {driver.missionImpact}
      </p>

      <div className="mt-5 flex justify-between text-sm">

        <span className="rounded-full bg-slate-800 px-3 py-1">
          {driver.status}
        </span>

        <span className="text-cyan-400">
          {driver.eta} min
        </span>

      </div>
    </button>
  );
}