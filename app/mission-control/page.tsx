import AppShell from "@/components/layout/AppShell";
import MissionList from "@/components/mission/MissionList";

export default function MissionControlPage() {
  return (
    <AppShell>

      <div className="mb-8">

        <h1 className="text-4xl font-bold">

          Today's Missions

        </h1>

        <p className="mt-2 text-slate-400">

          Shared operational picture for all active missions.

        </p>

      </div>

      <MissionList />

    </AppShell>
  );
}