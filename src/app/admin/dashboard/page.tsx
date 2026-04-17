import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Shield, User, Settings, Wrench } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/admin/login");
  }

  const userRole = (session.user as any)?.role || "user";
  const userId = (session.user as any)?.id || "N/A";

  return (

      <div className="min-h-screen bg-[#11151d] text-neutral-200 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-[#11151d] to-[#11151d]">

        <main className="max-w-7xl mx-auto px-6 py-12 ">
          {/* Welcome Banner - Sculpted metallic look */}
          <div className="relative overflow-hidden bg-neutral-900 rounded-3xl p-8 mb-10 border border-neutral-800 shadow-2xl shadow-black/50 mt-12">
            {/* Subtle lighting effect */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 h-64 w-64 bg-gradient-to-br from-amber-600/20 to-transparent blur-3xl opacity-70"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-light tracking-tight text-white mb-3">
                Welcome back, <span className="font-semibold text-amber-500">{session.user?.name}</span>.
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl">
                Manage your site dynamic content here
              </p>
            </div>
          </div>

          {/* Session Info Grid */}
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            {/* User Info Card */}
            <div className="bg-neutral-900/80 backdrop-blur-md rounded-2xl border border-neutral-800/60 p-8 hover:border-neutral-700 transition-colors duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-neutral-800 rounded-xl border border-neutral-700 group-hover:border-amber-500/50 transition-colors">
                  <User className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-medium text-white tracking-wide">User Profile</h3>
              </div>
              <div className="space-y-5">
                <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Name</p>
                  <p className="font-medium text-neutral-200">{session.user?.name || "N/A"}</p>
                </div>
                <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Email</p>
                  <p className="font-medium text-neutral-200">{session.user?.email || "N/A"}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Role</p>
                  <span className="inline-flex items-center px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full text-xs font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                  {userRole}
                </span>
                </div>
              </div>
            </div>

            {/* Session Details Card */}
            <div className="bg-neutral-900/80 backdrop-blur-md rounded-2xl border border-neutral-800/60 p-8 hover:border-neutral-700 transition-colors duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-neutral-800 rounded-xl border border-neutral-700 group-hover:border-emerald-500/50 transition-colors">
                  <Shield className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-medium text-white tracking-wide">Security Info</h3>
              </div>
              <div className="space-y-5">
                <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Status</p>
                  <span className="inline-flex items-center gap-2 text-emerald-400 font-medium">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  Active / Authenticated
                </span>
                </div>
                <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Provider</p>
                  <p className="font-medium text-neutral-200">Credentials Encrypted</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">User ID</p>
                  <p className="font-mono text-xs text-neutral-400 bg-neutral-800/50 px-2 py-1 rounded">{userId}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Center */}
          <div className="mb-12">
            <h2 className="text-2xl font-light text-white mb-8 tracking-tight">Control Center</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Action Card 1 */}
              <Link href="/admin/dashboard/modules/custom-builds" className="group flex flex-col items-start p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:bg-neutral-800 hover:border-amber-500/30 transition-all duration-300 text-left relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-3 bg-neutral-800/80 rounded-lg border border-neutral-700 mb-4 group-hover:border-amber-500/50 relative z-10">
                  <Wrench className="w-6 h-6 text-neutral-300 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-200 group-hover:text-white relative z-10">Cart Builds</h3>
                <p className="text-sm text-neutral-500 mt-2 group-hover:text-neutral-400 relative z-10">Configure and manage vehicle specifications.</p>
              </Link>

              {/* Action Card 2 (Placeholder) */}
              <button className="group flex flex-col items-start p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:bg-neutral-800 hover:border-amber-500/30 transition-all duration-300 text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-3 bg-neutral-800/80 rounded-lg border border-neutral-700 mb-4 group-hover:border-amber-500/50 relative z-10">
                  <Settings className="w-6 h-6 text-neutral-300 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-200 group-hover:text-white relative z-10">System Settings</h3>
                <p className="text-sm text-neutral-500 mt-2 group-hover:text-neutral-400 relative z-10">Adjust dashboard parameters.</p>
              </button>
              {/* Action Card 3 (Placeholder) */}
              <button className="group opacity-50 flex flex-col items-start p-6 bg-neutral-900/30 border border-dashed border-neutral-800 rounded-2xl cursor-not-allowed text-left">
                <div className="p-3 bg-neutral-800/50 rounded-lg border border-neutral-700/50 mb-4">
                  <Shield className="w-6 h-6 text-neutral-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-500">Audit Logs</h3>
                <p className="text-sm text-neutral-600 mt-2">Feature locked.</p>
              </button>
            </div>
          </div>

          {/* Raw Session Data (Telemetrics) */}
          <details className="group mt-12 border-t border-neutral-800 pt-8">
            <summary className="flex items-center cursor-pointer text-sm font-medium text-neutral-500 hover:text-amber-500 transition-colors focus:outline-none list-none">
              <span className="mr-2">▶</span> View System Telemetrics (Debug)
            </summary>
            <div className="mt-6 p-6 bg-[#0a0d14] border border-neutral-800 rounded-xl overflow-auto shadow-inner">
            <pre className="text-xs font-mono text-amber-300/70 leading-relaxed">
              {JSON.stringify(session, null, 2)}
            </pre>
            </div>
          </details>
        </main>
      </div>
  );
}