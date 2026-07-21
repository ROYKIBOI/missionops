import { mission } from "@/lib/mission";

export default function MissionChain() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold">
        Mission Dependency Chain
      </h2>

      <p className="mt-2 text-slate-400">
        Live operational dependencies.
      </p>

      <div className="mt-8 space-y-6">

        {mission.drivers.map((driver) => {

          const colour =
            driver.status === "COMPLETE"
              ? "bg-green-500"
              : driver.status === "IN_PROGRESS"
              ? "bg-yellow-500"
              : driver.status === "BLOCKED"
              ? "bg-red-500"
              : "bg-slate-500";

          return (

            <div
              key={driver.id}
              className="flex items-start gap-5"
            >

              <div
                className={`mt-1 h-4 w-4 rounded-full ${colour}`}
              />

              <div className="flex-1">

                <div className="flex justify-between">

                  <div>

                    <h3 className="font-semibold">
                      {driver.title}
                    </h3>

                    <p className="text-sm text-slate-400">
                      {driver.owner}
                    </p>

                  </div>

                  <span className="text-sm font-medium">
                    {driver.status}
                  </span>

                </div>

                {driver.dependsOn && (

                  <p className="mt-2 text-xs text-cyan-400">

                    Depends on: {driver.dependsOn}

                  </p>

                )}

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}