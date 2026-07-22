import AppShell from "@/components/layout/AppShell";

import MissionHeader from "@/components/mission/MissionHeader";
import MissionKPIs from "@/components/mission/MissionKPIs";
import MissionStatus from "@/components/mission/MissionStatus";
import MissionBrief from "@/components/mission/MissionBrief";
import NextAction from "@/components/mission/NextAction";
import MissionChain from "@/components/mission/MissionChain";
import MissionDrivers from "@/components/mission/MissionDrivers";
import MissionTimeline from "@/components/mission/MissionTimeline";
import ExecutiveSummary from "@/components/dashboard/ExecutiveSummary";
import MissionEventLog from "@/components/mission/MissionEventLog";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function MissionPage({ params }: Props) {
  const { id } = await params;

  return (
    <AppShell>

      {/* Mission Header */}
      <MissionHeader missionId={id} />

      {/* KPI Cards */}
      <div className="mt-8">
        <MissionKPIs />
      </div>

      {/* Executive Summary */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        <MissionStatus />

        <MissionBrief />

        <NextAction />

      </div>

      {/* Overall Mission Summary */}
      <div className="mt-8">
        <ExecutiveSummary />
      </div>

      {/* Mission Dependency Chain */}
      <div className="mt-8">
        <MissionChain />
      </div>

      {/* Mission Drivers */}
      <div className="mt-8">
        <MissionDrivers />
      </div>

      {/* Mission Timeline */}
      <div className="mt-8">
        <MissionTimeline />
      </div>

      {/* Mission Activity Log */}
      <div className="mt-8">
        <MissionEventLog />
      </div>

    </AppShell>
  );
}