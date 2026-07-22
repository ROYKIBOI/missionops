import { mission } from "@/lib/mission";

export function calculateDepartmentImpact() {
  const departments = new Map<
    string,
    {
      total: number;
      complete: number;
    }
  >();

  mission.drivers.forEach((driver) => {
    if (!departments.has(driver.owner)) {
      departments.set(driver.owner, {
        total: 0,
        complete: 0,
      });
    }

    const dept = departments.get(driver.owner)!;

    dept.total += driver.readinessWeight;

    if (driver.status === "COMPLETE") {
      dept.complete += driver.readinessWeight;
    }
  });

  return Array.from(departments.entries()).map(
    ([department, value]) => ({
      department,
      readiness:
        value.total === 0
          ? 0
          : Math.round(
              (value.complete / value.total) * 100
            ),
    })
  );
}