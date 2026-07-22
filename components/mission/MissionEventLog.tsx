import { missionEvents } from "@/lib/eventLog";

export default function MissionEventLog() {

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold">

        Mission Activity

      </h2>

      <div className="mt-6 space-y-4">

        {missionEvents.length === 0 && (

          <p className="text-slate-400">

            No activity recorded.

          </p>

        )}

        {missionEvents.map(event => (

          <div
            key={event.id}
            className="rounded-xl bg-slate-800 p-4"
          >

            <div className="flex justify-between">

              <strong>

                {event.title}

              </strong>

              <span className="text-xs text-slate-400">

                {event.time.toLocaleTimeString()}

              </span>

            </div>

            <p className="mt-2 text-sm text-slate-300">

              {event.description}

            </p>

            <p className="mt-2 text-xs text-cyan-400">

              {event.department}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}