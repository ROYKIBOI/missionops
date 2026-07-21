export default function EngineeringDependencyFlow() {

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-xl font-bold">
        Dependency Flow
      </h2>

      <div className="space-y-4 text-center">

        <div className="rounded-xl bg-yellow-600/20 p-4">
          Stores
        </div>

        <div className="text-cyan-400">
          ↓
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
          HF Connector
        </div>

        <div className="text-cyan-400">
          ↓
        </div>

        <div className="rounded-xl bg-red-600/20 p-4">
          HF Operational Test
        </div>

        <div className="text-cyan-400">
          ↓
        </div>

        <div className="rounded-xl bg-green-600/20 p-4">
          Mission Release
        </div>

      </div>

    </div>

  );

}