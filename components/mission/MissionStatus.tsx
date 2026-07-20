import { calculateMissionReadiness } from "@/lib/engines/readiness";

export default function MissionStatus() {

  const readiness = calculateMissionReadiness();

  const colour =
    readiness.status === "READY"
      ? "text-green-400"
      : readiness.status === "AT_RISK"
      ? "text-yellow-400"
      : "text-red-400";

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

      <p className="text-sm uppercase tracking-widest text-slate-400">
        Mission Readiness
      </p>

      <h2 className={`mt-4 text-6xl font-bold ${colour}`}>
        {readiness.score}%
      </h2>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-700">

        <div
          className="h-full rounded-full bg-cyan-400 transition-all duration-700"
          style={{
            width: `${readiness.score}%`,
          }}
        />

      </div>

      <p className={`mt-5 text-lg font-semibold ${colour}`}>
        {readiness.status}
      </p>

    </div>

  );
}