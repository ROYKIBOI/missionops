"use client";

import { useState } from "react";

import { getStoresDrivers } from "@/lib/services/missionService";

import type { ReadinessDriver } from "@/types/mission";

import StoresTaskCard from "./StoresTaskCard";
import StoresDetailPanel from "./StoresDetailPanel";

export default function StoresWorkspace() {

  const storesDrivers = getStoresDrivers();

  const [selected, setSelected] =
    useState<ReadinessDriver | null>(
      storesDrivers[0] ?? null
    );

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
        />

      </div>

    </div>

  );
}