const events = [
    "05:00 Mission Created",
    "05:45 Aircraft Assigned",
    "06:15 Engineering Started",
    "06:35 Stores Request Raised",
    "07:10 HF Test Pending",
  ];
  
  export default function MissionTimeline() {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
  
        <h2 className="mb-5 text-xl font-bold">
          Mission Timeline
        </h2>
  
        <div className="space-y-4">
  
          {events.map((event) => (
            <div
              key={event}
              className="border-l-2 border-cyan-500 pl-4"
            >
              {event}
            </div>
          ))}
  
        </div>
  
      </div>
    );
  }