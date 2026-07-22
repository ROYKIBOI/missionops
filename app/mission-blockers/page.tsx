import AppShell from "@/components/layout/AppShell";

import MissionBlockersPanel from "@/components/mission/MissionBlockersPanel";

export default function MissionBlockersPage() {

  return (

    <AppShell>

      <div className="mb-8">

        <h1 className="text-4xl font-bold">

          Mission Blockers

        </h1>

        <p className="mt-3 text-slate-400">

          Live blockers preventing mission readiness.

        </p>

      </div>

      <MissionBlockersPanel />

    </AppShell>

  );
}