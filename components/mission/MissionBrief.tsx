import { mission } from "@/lib/mission";
import { getCriticalBlocker } from "@/lib/missionEngine";

export default function MissionBrief() {
  const blocker = getCriticalBlocker();

  const title = blocker
    ? "Mission Assessment"
    : "Mission Ready";

  const summary = blocker
    ? `${mission.missionType} mission ${mission.id} remains at risk because "${blocker.title}" is not complete. ${blocker.owner} is currently responsible for the next critical action. Mission readiness currently stands at ${mission.readiness.score}% and aircraft release depends on resolving this driver.`
    : `All mission readiness drivers have been completed. Aircraft ${mission.aircraft} is ready for operational release to ${mission.destination}.`;

  return (
    <div className="rounded-2xl border border-cyan-500 bg-slate-900 p-6 transition-all duration-300 hover:border-cyan-400 hover:shadow-xl">

      <h2 className="text-xl font-bold text-cyan-400">
        {title}
      </h2>

      <p className="mt-5 leading-7 text-slate-300">
        {summary}
      </p>

    </div>
  );
}