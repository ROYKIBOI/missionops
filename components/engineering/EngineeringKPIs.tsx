export default function EngineeringKPIs() {

  const cards = [
    {
      title: "Open Tasks",
      value: "4",
      colour: "text-red-400",
    },
    {
      title: "Completed",
      value: "12",
      colour: "text-green-400",
    },
    {
      title: "Deferred",
      value: "1",
      colour: "text-yellow-400",
    },
    {
      title: "Engineers",
      value: "6",
      colour: "text-cyan-400",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
        >

          <p className="text-sm text-slate-400">
            {card.title}
          </p>

          <h2 className={`mt-3 text-3xl font-bold ${card.colour}`}>
            {card.value}
          </h2>

        </div>

      ))}

    </div>
  );
}