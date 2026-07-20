const events = [
  {
    time: "05:00",
    title: "Mission Created",
    team: "Operations",
  },
  {
    time: "05:45",
    title: "Aircraft Assigned",
    team: "Operations",
  },
  {
    time: "06:15",
    title: "Engineering Started",
    team: "Engineering",
  },
  {
    time: "06:35",
    title: "Stores Request Raised",
    team: "Stores",
  },
  {
    time: "07:10",
    title: "HF Operational Test Pending",
    team: "Engineering",
  },
];

export default function MissionTimeline() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Mission Timeline
        </h2>

        <span className="text-sm text-slate-500">
          Live Activity
        </span>

      </div>

      <div className="mt-8 space-y-8">

        {events.map((event) => (

          <div
            key={`${event.time}-${event.title}`}
            className="flex gap-6"
          >

            <div className="flex flex-col items-center">

              <div className="h-4 w-4 rounded-full bg-cyan-400" />

              <div className="mt-2 h-full w-px bg-slate-700" />

            </div>

            <div className="flex-1 pb-2">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                <h3 className="font-semibold">
                  {event.title}
                </h3>

                <span className="text-cyan-400">
                  {event.time}
                </span>

              </div>

              <p className="mt-2 text-sm text-slate-400">
                {event.team}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}