import { missionDrivers } from "@/mock/missionDrivers";
import { calculateMissionReadiness } from "@/lib/engines/readiness";

export default function MissionKPIs() {
  const readiness = calculateMissionReadiness();

  const activeBlockers = missionDrivers.filter(
    (driver) => driver.status !== "COMPLETE"
  ).length;

  const cards = [
    {
      title: "Mission Readiness",
      value: `${readiness.score}%`,
      colour: "text-cyan-400",
    },
    {
      title: "Aircraft",
      value: "5Y-FAJ",
      colour: "text-white",
    },
    {
      title: "Active Drivers",
      value: activeBlockers,
      colour: activeBlockers ? "text-red-400" : "text-green-400",
    },
    {
      title: "Estimated Release",
      value: "11:40",
      colour: "text-yellow-400",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-xl"
        >

          <p className="text-xs uppercase tracking-widest text-slate-500">
            {card.title}
          </p>

          <h2 className={`mt-5 text-4xl font-bold ${card.colour}`}>
            {card.value}
          </h2>

        </div>

      ))}

    </div>
  );
}