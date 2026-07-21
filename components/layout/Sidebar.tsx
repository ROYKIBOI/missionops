"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Plane,
  Wrench,
  Package,
  AlertTriangle,
  BarChart3,
} from "lucide-react";

const menu = [
  {
    name: "Mission Control",
    href: "/mission-control",
    icon: LayoutDashboard,
  },
  {
    name: "Mission Blockers",
    href: "/mission-blockers",
    icon: AlertTriangle,
  },
  {
    name: "Engineering",
    href: "/engineering",
    icon: Wrench,
  },
  {
    name: "Stores",
    href: "/stores",
    icon: Package,
  },
  {
    name: "Fleet",
    href: "/fleet",
    icon: Plane,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r border-slate-800 bg-slate-900">

      <div className="border-b border-slate-800 p-6">

        <h1 className="text-2xl font-bold">
          Mission<span className="text-cyan-400">Ops</span>
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Mission Readiness Platform
        </p>

      </div>

      <nav className="space-y-2 p-4">

        {menu.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            (item.href === "/mission-control" &&
              pathname.startsWith("/mission/"));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                active
                  ? "bg-cyan-500 text-slate-950 font-semibold"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}