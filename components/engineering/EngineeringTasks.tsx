const tasks = [
  "HF Operational Test",
  "Oil Quantity Check",
  "ELT Functional Test",
  "Daily Inspection",
];

export default function EngineeringTasks() {

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-xl font-bold">
        Open Engineering Tasks
      </h2>

      <div className="space-y-3">

        {tasks.map((task) => (

          <div
            key={task}
            className="rounded-xl border border-slate-700 p-4 hover:border-cyan-500"
          >
            {task}
          </div>

        ))}

      </div>

    </div>

  );

}