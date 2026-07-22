import { calculateDepartmentImpact } from "@/lib/engines/departmentImpact";

export default function DepartmentImpact() {
  const departments = calculateDepartmentImpact();

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold">
        Department Impact
      </h2>

      <p className="mt-2 text-slate-400">
        Department contribution to mission readiness.
      </p>

      <div className="mt-8 space-y-6">

        {departments.map((department) => {

          const colour =
            department.readiness === 100
              ? "bg-green-500"
              : department.readiness >= 50
              ? "bg-yellow-500"
              : "bg-red-500";

          return (
            <div key={department.department}>

              <div className="mb-2 flex justify-between">

                <span className="font-medium">
                  {department.department}
                </span>

                <span>
                  {department.readiness}%
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-700">

                <div
                  className={`h-full ${colour}`}
                  style={{
                    width: `${department.readiness}%`,
                  }}
                />

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}