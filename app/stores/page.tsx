import AppShell from "@/components/layout/AppShell";
import StoresWorkspace from "@/components/stores/StoresWorkSpace";

export default function StoresPage() {
  return (
    <AppShell>
      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Stores Workspace
        </h1>

        <p className="mt-3 text-slate-400">
          Stores controls the availability of aircraft parts, tooling,
          consumables and logistics. Every completed request contributes
          directly to mission readiness.
        </p>

      </div>

      <StoresWorkspace />

    </AppShell>
  );
}