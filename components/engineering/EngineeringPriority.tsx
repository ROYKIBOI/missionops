export default function EngineeringPriority() {

  return (

    <div className="rounded-2xl border border-red-500 bg-slate-900 p-6">

      <h2 className="text-xl font-bold">
        Highest Priority
      </h2>

      <div className="mt-6 space-y-4">

        <p className="text-2xl font-semibold">
          HF Operational Check
        </p>

        <p className="text-slate-400">
          Waiting for Stores to issue HF Connector.
        </p>

        <div>

          <p className="text-sm text-slate-400">
            Mission Impact
          </p>

          <p>
            Aircraft cannot be released.
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-400">
            ETA
          </p>

          <p>20 Minutes</p>

        </div>

      </div>

    </div>

  );

}