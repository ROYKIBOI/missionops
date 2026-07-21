export default function EngineeringHeader() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-slate-400">
            Engineering Control
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Mission Engineering
          </h1>
        </div>

        <div className="text-right">
          <p className="text-sm text-slate-400">
            Active Aircraft
          </p>

          <h2 className="text-xl font-semibold text-cyan-400">
            5Y-ABC
          </h2>
        </div>

      </div>

    </div>
  );
}