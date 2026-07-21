import AppShell from "@/components/layout/AppShell";

import StoresHeader from "@/components/stores/StoresHeader";
import StoresKPIs from "@/components/stores/StoresKPIs";
import StoresRequests from "@/components/stores/StoresRequests";
import StoresDetailPanel from "@/components/stores/StoresDetailPanel";

export default function StoresPage() {
  return (
    <AppShell>

      <StoresHeader />

      <div className="mt-8">
        <StoresKPIs />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <StoresRequests />
        </div>

        <StoresDetailPanel />

      </div>

    </AppShell>
  );
}