"use client";

import type { ReadinessDriver } from "@/types/mission";

interface Props {
  driver: ReadinessDriver;
  onSelect: (driver: ReadinessDriver) => void;
}

export default function MissionDriverCard({
  driver,
  onSelect,
}: Props) {

  const borderColour =
    driver.status === "COMPLETE"
      ? "border-green-500"
      : driver.status === "IN_PROGRESS"
      ? "border-yellow-500"
      : driver.status === "BLOCKED"
      ? "border-red-500"
      : "border-slate-700";

  const badgeColour =
    driver.status === "COMPLETE"
      ? "bg-green-600"
      : driver.status === "IN_PROGRESS"
      ? "bg-yellow-600"
      : driver.status === "BLOCKED"
      ? "bg-red-600"
      : "bg-slate-700";

  return (

    <button
      onClick={() => onSelect(driver)}
      className={`group w-full rounded-2xl border ${borderColour} bg-slate-900 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-lg font-semibold group-hover:text-cyan-400">
            {driver.title}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {driver.owner}
          </p>

        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColour}`}
        >
          {driver.status}
        </span>

      </div>

      <div className="mt-6 flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-widest text-slate-500">
            ETA
          </p>

          <p className="text-cyan-400">
            {driver.eta} min
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-widest text-slate-500">
            Weight
          </p>

          <p className="font-semibold">
            {driver.readinessWeight}%
          </p>

        </div>

      </div>

    </button>

  );
}