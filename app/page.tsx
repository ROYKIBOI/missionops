import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold tracking-tight">
            Mission<span className="text-cyan-400">Ops</span>
          </h1>

          <Link
            href="/mission-control"
            className="rounded-xl bg-cyan-500 px-5 py-2 font-medium text-slate-950 transition hover:bg-cyan-400"
          >
            Launch Mission Control
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
          Mission Readiness for Regional & Humanitarian Aviation
        </div>

        <h2 className="mt-8 max-w-4xl text-6xl font-extrabold leading-tight">
          Execute missions with a
          <span className="text-cyan-400"> shared operational picture</span>.
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          MissionOps gives Operations, Engineering, Stores and Cargo one live
          mission readiness board that explains exactly why a mission is—or
          isn't—ready.
        </p>

        <div className="mt-12 flex gap-5">
          <Link
            href="/mission-control"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Launch Mission Control
          </Link>

          <button className="rounded-xl border border-slate-700 px-8 py-4 transition hover:border-cyan-500">
            Learn More
          </button>
        </div>
      </section>

      {/* Preview Card */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl">

          <div className="mb-8 flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold">
                Mission Readiness Board
              </h3>

              <p className="mt-2 text-slate-400">
                One operational picture for every mission.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-500/20 px-6 py-3 text-emerald-400">
              8 Ready
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <p className="text-sm text-slate-400">Mission</p>

              <h4 className="mt-2 text-2xl font-bold">
                MED001
              </h4>

              <p className="mt-4 text-slate-400">
                Medical Relief
              </p>

              <div className="mt-8 rounded-xl bg-red-500/20 p-3 text-red-400">
                Mission Blocked
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <p className="text-sm text-slate-400">
                Readiness
              </p>

              <h4 className="mt-2 text-5xl font-bold text-cyan-400">
                84%
              </h4>

              <p className="mt-4 text-slate-400">
                Engineering & Stores pending
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <p className="text-sm text-slate-400">
                Why Not Ready?
              </p>

              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• HF operational check pending</li>
                <li>• HF connector not issued</li>
                <li>• Fuel confirmation pending</li>
              </ul>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}