export default function Topbar() {
    const now = new Date();
  
    return (
      <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">
        <div>
          <h2 className="text-2xl font-bold">
            Mission Control
          </h2>
  
          <p className="text-sm text-slate-400">
            Shared Mission Context
          </p>
        </div>
  
        <div className="text-right">
          <p className="text-sm text-slate-400">
            Live UTC
          </p>
  
          <p className="font-semibold">
            {now.toUTCString()}
          </p>
        </div>
      </header>
    );
  }