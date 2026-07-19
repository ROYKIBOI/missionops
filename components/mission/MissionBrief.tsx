import { generateMissionBrief } from "@/lib/missionBrief";

export default function MissionBrief() {
  const brief = generateMissionBrief();

  return (
    <div className="rounded-2xl border border-cyan-500 bg-cyan-500/5 p-6">
      <h2 className="text-2xl font-bold">{brief.title}</h2>

      <p className="mt-4 text-slate-300 leading-7">
        {brief.summary}
      </p>
    </div>
  );
}