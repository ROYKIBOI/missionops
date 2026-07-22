"use client";

import { useState } from "react";

import { getStoresDrivers } from "@/lib/services/missionService";
import { completeDriver } from "@/lib/actions/missionActions";

import type { ReadinessDriver } from "@/types/mission";

import StoresTaskCard from "./StoresTaskCard";
import StoresDetailPanel from "./StoresDetailPanel";

export default function StoresWorkspace() {
  const [, forceUpdate] = useState(0);

  const storesDrivers = getStoresDrivers();

  const [selected, setSelected] =
    useState<ReadinessDriver | null>(
      storesDrivers[0] ?? null
    );

  function issuePart() {
    if (!selected) return;

    completeDriver(selected.id);

    forceUpdate((v) => v + 1);

    const refreshed = getStoresDrivers();

    const updated =
      refreshed.find((d) => d.id === selected.id) ?? null;

    setSelected(updated);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">

      <div>

        <h2 className="mb-6 text-2xl font-bold">
          Stores Queue
        </h2>

        <div className="space-y-4">

          {storesDrivers.map((driver) => (

            <StoresTaskCard
              key={driver.id}
              driver={driver}
              onSelect={setSelected}
            />

          ))}

        </div>

      </div>

      <div className="lg:col-span-2">

        <StoresDetailPanel
          driver={selected}
          onIssuePart={issuePart}
        />

      </div>

    </div>
  );
}