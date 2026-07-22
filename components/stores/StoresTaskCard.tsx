"use client";

import type { ReadinessDriver } from "@/types/mission";

interface Props {
  driver: ReadinessDriver;
  onSelect: (driver: ReadinessDriver) => void;
}

export default function StoresTaskCard({
  driver,
  onSelect,
}: Props) {

  const colour =
    driver.status === "COMPLETE"
      ? "bg-green-500"
      : driver.status === "IN_PROGRESS"
      ? "bg-yellow-500"
      : driver.status === "BLOCKED"
      ? "bg-red-500"
      : "bg-slate-500";

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
          className={`h-3 w-3 rounded-full ${colour}`}
        />

      </div>

      <p className="mt-3 text-sm text-slate-400">
        {driver.missionImpact}
      </p>

      <div className="mt-5 flex justify-between">

        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">
          {driver.status}
        </span>

        <span className="text-cyan-400 text-sm">
          {driver.eta} min
        </span>

      </div>

    </button>
  );
}