export default function MissionReadiness() {
    const items = [
      { status: "🔴", text: "HF Operational Check Pending" },
      { status: "🟡", text: "Fuel Confirmation Pending" },
      { status: "🟢", text: "Cargo Loaded" },
      { status: "🟢", text: "Crew Assigned" },
    ];
  
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
  
        <h2 className="mb-5 text-xl font-bold">
          Readiness Drivers
        </h2>
  
        <div className="space-y-4">
  
          {items.map((item) => (
            <div
              key={item.text}
              className="rounded-xl bg-slate-800 p-4 transition hover:bg-slate-700 cursor-pointer"
            >
              {item.status} {item.text}
            </div>
          ))}
  
        </div>
  
      </div>
    );
  }