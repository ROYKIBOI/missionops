"use client";

import { useState } from "react";
import { missionDrivers } from "@/mock/missionDrivers";
import { ReadinessDriver } from "@/types/mission";

import MissionDriverCard from "./MissionDriverCard";
import MissionDetailPanel from "./MissionDetailPanel";

export default function MissionDrivers() {
  const [selected, setSelected] = useState<ReadinessDriver | null>(
    missionDrivers[0]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-1">
        <h2 className="mb-5 text-2xl font-bold">
          Mission Readiness Drivers
        </h2>

        <div className="space-y-4">
          {missionDrivers.map((driver) => (
            <MissionDriverCard
              key={driver.id}
              driver={driver}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      <div className="lg:col-span-2">
        <MissionDetailPanel driver={selected} />
      </div>
    </div>
  );
}