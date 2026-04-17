import React from 'react';
import { LogOut, Shield, ChevronRight } from "lucide-react";
import { redirect } from "next/navigation";

function AdminHeader() {
    async function handleSignOut() {
        "use server";
        redirect("/api/auth/signout");
    }

    return (
        <header className="fixed top-0 w-full z-50 border-b border-neutral-800 bg-[#11151d]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#11151d]/60">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Brand / Logo Section */}
                <div className="flex items-center gap-4 group cursor-default">
                    {/* Icon Container with subtle glow on hover */}
                    <div className="relative flex items-center justify-center w-10 h-10 bg-neutral-900 rounded-xl border border-neutral-800 group-hover:border-amber-500/30 transition-colors duration-500 shadow-lg shadow-black/50">
                        <div className="absolute inset-0 bg-amber-500/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Shield className="w-5 h-5 text-amber-500 relative z-10" />
                    </div>

                    {/* Text Styling - Technical/Automotive */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-lg font-semibold text-white tracking-wide leading-none">
                            ADMIN<span className="text-neutral-400 mx-1">/</span>PANEL
                        </h1>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-medium mt-1">
                            System Control
                        </span>
                    </div>
                </div>

                {/* Actions Area */}
                <div className="flex items-center gap-4">
                    {/* Vertical Divider */}
                    <div className="h-6 w-px bg-neutral-800 hidden sm:block"></div>

                    <form action={handleSignOut}>
                        <button
                            type="submit"
                            className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm font-medium text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-300"
                        >
                            <span>Sign Out</span>
                            <LogOut className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:text-amber-500 transition-all duration-300 group-hover:translate-x-0.5" />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default AdminHeader;