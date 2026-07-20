interface Props {
  missionId: string;
}

export default function MissionHeader({ missionId }: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-8 shadow-lg">

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Mission Workspace
          </p>

          <h1 className="mt-2 text-5xl font-bold">
            {missionId}
          </h1>

          <p className="mt-3 text-slate-400">
            Live operational readiness dashboard
          </p>

        </div>

        <div className="text-left md:text-right">

          <p className="text-sm uppercase tracking-widest text-slate-400">
            Aircraft
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            5Y-ABC
          </h2>

          <p className="mt-2 text-green-400">
            ● Connected
          </p>

        </div>

      </div>

    </div>
  );
}