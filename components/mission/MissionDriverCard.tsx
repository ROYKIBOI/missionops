"use client";

import { ReadinessDriver } from "@/types/mission";

interface Props {
  driver: ReadinessDriver;
  onSelect: (driver: ReadinessDriver) => void;
}

export default function MissionDriverCard({
  driver,
  onSelect,
}: Props) {
  const colour =
    driver.owner === "Engineering"
      ? "border-red-500"
      : driver.owner === "Stores"
      ? "border-yellow-500"
      : "border-cyan-500";

  return (
    <button
      onClick={() => onSelect(driver)}
      className={`w-full rounded-xl border ${colour} bg-slate-900 p-5 text-left transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800`}
    >
      <h3 className="text-lg font-semibold">
        {driver.title}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {driver.owner}
      </p>

      <div className="mt-4 flex justify-between">
        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">
          {driver.status}
        </span>

        <span className="text-cyan-400">
          {driver.eta} min
        </span>
      </div>
    </button>
  );
}