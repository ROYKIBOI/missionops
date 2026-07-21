import { mission } from "@/lib/mission";

export default function MissionStatus() {
  const readiness = mission.readiness;

  const colour =
    readiness.status === "READY"
      ? "text-green-400"
      : readiness.status === "AT_RISK"
      ? "text-yellow-400"
      : "text-red-400";

  const progressColour =
    readiness.status === "READY"
      ? "bg-green-500"
      : readiness.status === "AT_RISK"
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

      <div className="flex items-center justify-between">

        <p className="text-sm uppercase tracking-widest text-slate-400">
          Mission Readiness
        </p>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            readiness.status === "READY"
              ? "bg-green-500/20 text-green-400"
              : readiness.status === "AT_RISK"
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {readiness.status.replace("_", " ")}
        </span>

      </div>

      <h2 className={`mt-5 text-6xl font-bold ${colour}`}>
        {readiness.score}%
      </h2>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-700">

        <div
          className={`h-full rounded-full transition-all duration-700 ${progressColour}`}
          style={{
            width: `${readiness.score}%`,
          }}
        />

      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">

        <div className="rounded-xl bg-slate-950 p-4">

          <p className="text-xs uppercase tracking-wider text-slate-500">
            Completed Weight
          </p>

          <p className="mt-2 text-2xl font-bold">
            {readiness.completedWeight}
          </p>

        </div>

        <div className="rounded-xl bg-slate-950 p-4">

          <p className="text-xs uppercase tracking-wider text-slate-500">
            Total Weight
          </p>

          <p className="mt-2 text-2xl font-bold">
            {readiness.totalWeight}
          </p>

        </div>

      </div>

    </div>
  );
}