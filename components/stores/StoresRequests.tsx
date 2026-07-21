const requests = [
  "HF Connector",
  "Hydraulic Filter",
  "Engine Oil",
  "Landing Light",
];

export default function StoresRequests() {

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-5 text-xl font-bold">
        Open Requests
      </h2>

      <div className="space-y-3">

        {requests.map((request) => (

          <div
            key={request}
            className="rounded-xl border border-slate-700 p-4"
          >
            {request}
          </div>

        ))}

      </div>

    </div>

  );

}