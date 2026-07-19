"use client";

import Link from "next/link";
import type { Mission } from "@/mock/missions";

interface MissionCardProps {
  mission: Mission;
}

export default function MissionCard({ mission }: MissionCardProps) {
  const statusColor =
    mission.status === "READY"
      ? "bg-green-500"
      : mission.status === "AT_RISK"
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <Link href={`/mission/${mission.id}`}>
      <div className="cursor-pointer rounded-xl border border-slate-700 bg-slate-900 p-5 transition hover:border-cyan-400 hover:shadow-lg hover:scale-[1.02]">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">
              {mission.id}
            </h2>

            <p className="text-slate-400">
              {mission.title}
            </p>
          </div>

          <div className={`h-4 w-4 rounded-full ${statusColor}`} />
        </div>

        <div className="mt-4 space-y-1 text-sm text-slate-300">
          <p>
            <strong>Route:</strong> {mission.origin} → {mission.destination}
          </p>

          <p>
            <strong>Aircraft:</strong> {mission.aircraft}
          </p>

          <p>
            <strong>Status:</strong> {mission.status.replace("_", " ")}
          </p>
        </div>

        <div className="mt-5">
          <div className="mb-1 flex justify-between text-sm">
            <span>Mission Readiness</span>
            <span className="font-semibold text-cyan-400">
              {mission.readiness}%
            </span>
          </div>

          <div className="h-2 rounded-full bg-slate-700">
            <div
              className="h-2 rounded-full bg-cyan-500"
              style={{ width: `${mission.readiness}%` }}
            />
          </div>
        </div>

        <div className="mt-5 text-sm font-medium text-cyan-400">
          View Mission →
        </div>

      </div>
    </Link>
  );
}