export default function StoresKPIs() {

  const cards = [
    { title: "Open Requests", value: "5" },
    { title: "Critical Parts", value: "2" },
    { title: "Awaiting Picking", value: "3" },
    { title: "Issued Today", value: "18" },
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

          <h2 className="mt-3 text-3xl font-bold text-cyan-400">
            {card.value}
          </h2>

        </div>

      ))}

    </div>

  );

}