"use client";

import { useState } from "react";

import { mission } from "@/lib/mission";
import type { ReadinessDriver } from "@/types/mission";

import EngineeringTaskCard from "./EngineeringTaskCard";
import EngineeringDetailPanel from "./EngineeringDetailPanel";

export default function EngineeringWorkspace() {
  const engineeringDrivers = mission.drivers
  .filter((driver) => driver.owner === "Engineering")
  .sort((a, b) => a.eta - b.eta);

  const [selected, setSelected] =
    useState<ReadinessDriver | null>(
      engineeringDrivers[0] ?? null
    );

  return (
    <div className="grid gap-8 lg:grid-cols-3">

      <div>

        <h2 className="mb-6 text-2xl font-bold">
          Engineering Queue
        </h2>

        <div className="space-y-4">

          {engineeringDrivers.map((driver) => (

            <EngineeringTaskCard
              key={driver.id}
              driver={driver}
              onSelect={setSelected}
            />

          ))}

        </div>

      </div>

      <div className="lg:col-span-2">

        <EngineeringDetailPanel
          driver={selected}
        />

      </div>

    </div>
  );
}