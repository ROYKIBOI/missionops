interface Props {
    id: string;
  }
  
  export default function MissionHeader({ id }: Props) {
    return (
      <div className="rounded-2xl border border-yellow-500/40 bg-gradient-to-r from-yellow-500/10 to-slate-900 p-8">
  
        <div className="flex items-center justify-between">
  
          <div>
  
            <div className="mb-3 inline-flex rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-black">
              MISSION AT RISK
            </div>
  
            <h1 className="text-4xl font-bold">
              {id} - Medical Relief
            </h1>
  
            <p className="mt-2 text-slate-300">
              Wilson → Lokichoggio
            </p>
  
            <p className="mt-4 text-slate-400">
              Aircraft: <strong>5Y-ABC</strong> • ETD: <strong>08:30 UTC</strong>
            </p>
  
          </div>
  
          <div className="text-right">
  
            <p className="text-slate-400">
              Mission Readiness
            </p>
  
            <h2 className="text-6xl font-bold text-cyan-400">
              84%
            </h2>
  
          </div>
  
        </div>
  
      </div>
    );
  }