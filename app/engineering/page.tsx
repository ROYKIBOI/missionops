import AppShell from "@/components/layout/AppShell";

import EngineeringHeader from "@/components/engineering/EngineeringHeader";
import EngineeringKPIs from "@/components/engineering/EngineeringKPIs";
import EngineeringPriority from "@/components/engineering/EngineeringPriority";
import EngineeringTasks from "@/components/engineering/EngineeringTasks";
import EngineeringDependencyFlow from "@/components/engineering/EngineeringDependencyFlow";

export default function EngineeringPage() {
  return (
    <AppShell>

      <EngineeringHeader />

      <div className="mt-8">
        <EngineeringKPIs />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <EngineeringTasks />
        </div>

        <EngineeringPriority />

      </div>

      <div className="mt-8">
        <EngineeringDependencyFlow />
      </div>

    </AppShell>
  );
}