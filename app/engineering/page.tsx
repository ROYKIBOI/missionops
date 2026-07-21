import AppShell from "@/components/layout/AppShell";
import EngineeringWorkspace from "@/components/engineering/EngineeringWorkspace";

export default function EngineeringPage() {
  return (
    <AppShell>

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Engineering Workspace
        </h1>

        <p className="mt-3 text-slate-400">
          Engineering owns the technical readiness of the aircraft.
          Completing tasks here contributes directly to mission readiness.
        </p>

      </div>

      <EngineeringWorkspace />

    </AppShell>
  );
}