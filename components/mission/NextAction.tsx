import { missionDrivers } from "@/mock/missionDrivers";

export default function NextAction() {
  const next = missionDrivers.find(
    (driver) => driver.status !== "COMPLETE"
  );

  return (
    <div className="rounded-2xl border border-amber-500 bg-slate-900 p-6 shadow-lg">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-bold">
          Next Best Action
        </h2>

        <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-300">
          Priority
        </span>

      </div>

      {next ? (
        <>
          <p className="mt-6 text-lg font-semibold text-white">
            {next.nextAction}
          </p>

          <div className="mt-6 space-y-5">

            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Driver
              </p>
              <p className="mt-1">{next.title}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Responsible Team
              </p>
              <p className="mt-1">{next.owner}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Estimated Completion
              </p>
              <p className="mt-1">{next.eta} minutes</p>
            </div>

          </div>
        </>
      ) : (
        <div className="mt-6 rounded-xl bg-green-600/10 p-4">

          <p className="font-semibold text-green-400">
            Mission Ready
          </p>

          <p className="mt-2 text-slate-300">
            No outstanding readiness drivers remain.
          </p>

        </div>
      )}
    </div>
  );
}