import { missionDrivers } from "@/mock/missionDrivers";

export default function EngineeringDashboard() {
  const engineeringDrivers = missionDrivers.filter(
    (driver) => driver.owner === "Engineering"
  );

  return (
    <div className="space-y-8">

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <p className="text-sm text-slate-400">
          Department
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Engineering
        </h1>

        <p className="mt-3 text-slate-400">
          Maintenance activities affecting today's mission readiness.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

          <p className="text-sm text-slate-400">
            Open Tasks
          </p>

          <h2 className="mt-3 text-4xl font-bold text-red-400">
            {engineeringDrivers.length}
          </h2>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

          <p className="text-sm text-slate-400">
            Waiting On
          </p>

          <h2 className="mt-3 text-4xl font-bold text-yellow-400">
            Stores
          </h2>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

          <p className="text-sm text-slate-400">
            Mission
          </p>

          <h2 className="mt-3 text-4xl font-bold text-cyan-400">
            MED001
          </h2>

        </div>

      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <h2 className="mb-6 text-2xl font-bold">
          Assigned Tasks
        </h2>

        <div className="space-y-5">

          {engineeringDrivers.map((driver) => (

            <div
              key={driver.id}
              className="rounded-xl border border-slate-700 p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-lg font-semibold">
                    {driver.title}
                  </h3>

                  <p className="mt-2 text-slate-400">
                    {driver.nextAction}
                  </p>

                </div>

                <div className="text-right">

                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      driver.status === "COMPLETE"
                        ? "bg-green-600"
                        : driver.status === "IN_PROGRESS"
                        ? "bg-yellow-600"
                        : "bg-red-600"
                    }`}
                  >
                    {driver.status}
                  </span>

                  <p className="mt-3 text-cyan-400">
                    ETA {driver.eta} min
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}