import AppShell from "@/components/layout/AppShell";

export default function MissionBlockersPage() {
  return (
    <AppShell>
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-3xl font-bold">
          Mission Blockers
        </h1>

        <p className="mt-4 text-slate-400">
          This page will display all active mission blockers across the fleet.
        </p>
      </div>
    </AppShell>
  );
}