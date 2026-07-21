import { missionDrivers } from "@/mock/missionDrivers";

export default function MissionChain() {
  const engineering = missionDrivers.find(
    (d) => d.owner === "Engineering"
  );

  const stores = missionDrivers.find(
    (d) => d.owner === "Stores"
  );

  const flightOps = missionDrivers.find(
    (d) => d.id === "FUEL"
  );

  const crew = missionDrivers.find(
    (d) => d.id === "CREW"
  );

  const released = missionDrivers.every(
    (d) => d.status === "COMPLETE"
  );

  const colour = (status?: string) => {
    switch (status) {
      case "COMPLETE":
        return "bg-green-500";
      case "IN_PROGRESS":
        return "bg-yellow-500";
      case "BLOCKED":
        return "bg-red-500";
      default:
        return "bg-slate-500";
    }
  };

  function Node({
    title,
    status,
  }: {
    title: string;
    status: string;
  }) {
    return (
      <div className="flex flex-col items-center">
        <div className={`h-5 w-5 rounded-full ${colour(status)}`} />

        <div className="mt-3 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-center">
          <p className="font-semibold">{title}</p>

          <p className="mt-1 text-xs text-slate-400">
            {status}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-8 text-2xl font-bold">
        Mission Dependency Chain
      </h2>

      <div className="overflow-x-auto">
        <div className="flex min-w-[900px] items-center justify-between">

          <Node
            title="Stores"
            status={stores?.status ?? "NOT_STARTED"}
          />

          <div className="h-1 flex-1 bg-slate-700" />

          <Node
            title="Engineering"
            status={engineering?.status ?? "NOT_STARTED"}
          />

          <div className="h-1 flex-1 bg-slate-700" />

          <Node
            title="Flight Ops"
            status={flightOps?.status ?? "NOT_STARTED"}
          />

          <div className="h-1 flex-1 bg-slate-700" />

          <Node
            title="Crew"
            status={crew?.status ?? "NOT_STARTED"}
          />

          <div className="h-1 flex-1 bg-slate-700" />

          <Node
            title="Aircraft Release"
            status={released ? "COMPLETE" : "BLOCKED"}
          />

        </div>
      </div>
    </div>
  );
}