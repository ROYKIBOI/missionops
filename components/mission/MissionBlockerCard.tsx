import type { ReadinessDriver } from "@/types/mission";
import { mission } from "@/lib/mission";

interface Props {
  driver: ReadinessDriver;
}

export default function MissionBlockerCard({
  driver,
}: Props) {
  const dependency = driver.dependsOn
    ? mission.drivers.find(
        (d) => d.id === driver.dependsOn
      )
    : undefined;

  return (
    <div className="rounded-2xl border border-red-500 bg-red-500/5 p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-bold text-red-400">
          Mission Blocker
        </h2>

        <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
          BLOCKED
        </span>

      </div>

      <div className="mt-6 space-y-5">

        <div>
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Blocked Task
          </p>

          <p className="mt-1 text-lg font-semibold">
            {driver.title}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Owning Department
          </p>

          <p className="mt-1">
            {driver.owner}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Waiting On
          </p>

          <p className="mt-1">
            {dependency?.title ?? "No dependency"}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Responsible Team
          </p>

          <p className="mt-1">
            {dependency?.owner ?? driver.owner}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Mission Impact
          </p>

          <p className="mt-1 text-slate-300">
            {driver.missionImpact}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Recommended Action
          </p>

          <p className="mt-1 font-medium text-cyan-400">
            {dependency?.nextAction ?? driver.nextAction}
          </p>
        </div>

      </div>

    </div>
  );
}