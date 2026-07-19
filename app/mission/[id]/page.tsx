import AppShell from "@/components/layout/AppShell";
import MissionHeader from "@/components/mission/MissionHeader";
import MissionDrivers from "@/components/mission/MissionDrivers";
import MissionTimeline from "@/components/mission/MissionTimeline";
import MissionBrief from "@/components/mission/MissionBrief";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function MissionPage({ params }: Props) {
  const { id } = await params;

  return (
    <AppShell>
      <MissionHeader id={id} />

      <div className="mt-8">
        <MissionDrivers />
      </div>
      <MissionHeader id={id} />

<div className="mt-6">
  <MissionBrief />
</div>

      <div className="mt-8">
        <MissionTimeline />
      </div>
    </AppShell>
  );
}