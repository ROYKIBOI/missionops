import { mission } from "@/lib/mission";

export default function MissionSummary() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            Mission Overview
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            {mission.missionType}
          </h2>
        </div>

        <span className="rounded-full bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-400">
          {mission.priority}
        </span>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div>
          <p className="text-sm text-slate-400">
            Aircraft
          </p>

          <p className="mt-1 text-lg font-semibold">
            {mission.aircraft}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Route
          </p>

          <p className="mt-1 text-lg font-semibold">
            {mission.origin} → {mission.destination}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Departure
          </p>

          <p className="mt-1 text-lg font-semibold">
            {mission.scheduledDeparture}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Captain
          </p>

          <p className="mt-1 text-lg font-semibold">
            {mission.captain}
          </p>
        </div>

      </div>

      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950 p-5">

        <p className="text-sm text-slate-400">
          Dispatcher
        </p>

        <p className="mt-2 text-lg font-medium">
          {mission.dispatcher}
        </p>

      </div>

    </div>
  );
}