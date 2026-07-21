export default function StoresDetailPanel() {

  return (

    <div className="rounded-2xl border border-cyan-500 bg-slate-900 p-6">

      <h2 className="text-xl font-bold">
        Selected Request
      </h2>

      <div className="mt-6 space-y-5">

        <div>
          <p className="text-sm text-slate-400">Part</p>
          <p>HF Connector</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Priority</p>
          <p>High</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Mission</p>
          <p>MED001</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Requested By</p>
          <p>Engineering</p>
        </div>

      </div>

    </div>

  );

}