'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
// import { projects } from "@/lib/utils"; // Unused in provided snippet
import { CartBuild, CartBuildStatus } from "@/lib/types";
import {
    Truck,
    Clock,
    CheckCircle2,
    ArrowUpRight,
    Loader2,
    Sparkles,
    Wrench,
    Calendar,
    DollarSign,
    ChevronRight,
    X,
    ImageIcon,
    Search
} from "lucide-react";

export default function CustomBuildsPage() {
    const [builds, setBuilds] = useState<CartBuild[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState<CartBuildStatus | 'all'>('all');
    const [selectedBuild, setSelectedBuild] = useState<CartBuild | null>(null);

    useEffect(() => {
        fetchBuilds();
    }, []);

    async function fetchBuilds() {
        try {
            const response = await fetch('/api/builds');
            const data = await response.json();
            if (data.success) {
                setBuilds(data.data || []);
            }
        } catch (error) {
            console.error('Failed to fetch builds:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const filteredBuilds = filter === 'all'
        ? builds
        : builds.filter(b => b.status === filter);

    const statusConfig = {
        blueprint: {
            label: "Blueprint Phase",
            icon: Clock,
            color: "text-neutral-400",
            bg: "bg-neutral-800/50",
            border: "border-neutral-700"
        },
        production: {
            label: "In Assembly",
            icon: Wrench,
            color: "text-amber-400",
            bg: "bg-amber-900/20",
            border: "border-amber-500/30"
        },
        delivered: {
            label: "Commission Complete",
            icon: CheckCircle2,
            color: "text-emerald-400",
            bg: "bg-emerald-900/20",
            border: "border-emerald-500/30"
        }
    };

    return (
        <div className="bg-[#050505] min-h-screen text-neutral-200 font-sans selection:bg-[var(--color-primary)] selection:text-white">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative w-full pt-40 pb-32 overflow-hidden">
                {/* Background Atmosphere */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--color-primary)]/20 blur-[120px] rounded-full opacity-40 mix-blend-screen pointer-events-none" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md mb-8">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]"></span>
                            </span>
                            <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">Atelier Division</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
                            Precision Engineered <br />
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
                                Culinary Machines
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                            We don't just build food trucks. We architect high-performance mobile kitchens tailored to your specific operational workflows.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- GALLERY SECTION --- */}
            <section className="relative w-full px-6 pb-24 lg:px-8 z-10">
                <div className="mx-auto max-w-7xl">

                    {/* Filter Bar - Floating Glass */}
                    {/*<motion.div*/}
                    {/*    initial={{ opacity: 0, y: 20 }}*/}
                    {/*    whileInView={{ opacity: 1, y: 0 }}*/}
                    {/*    viewport={{ once: true }}*/}
                    {/*    className="sticky top-24 z-40 mb-12 flex justify-center"*/}
                    {/*>*/}
                    {/*    <div className="flex p-1.5 gap-1 bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-full shadow-2xl shadow-black/50">*/}
                    {/*        <button*/}
                    {/*            onClick={() => setFilter('all')}*/}
                    {/*            className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${*/}
                    {/*                filter === 'all'*/}
                    {/*                    ? 'bg-white text-black shadow-lg'*/}
                    {/*                    : 'text-neutral-500 hover:text-white hover:bg-neutral-800'*/}
                    {/*            }`}*/}
                    {/*        >*/}
                    {/*            All Commissions*/}
                    {/*        </button>*/}
                    {/*        {(['delivered', 'production', 'blueprint'] as CartBuildStatus[]).map(status => (*/}
                    {/*            <button*/}
                    {/*                key={status}*/}
                    {/*                onClick={() => setFilter(status)}*/}
                    {/*                className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${*/}
                    {/*                    filter === status*/}
                    {/*                        ? 'bg-neutral-800 text-white border border-neutral-700 shadow-inner'*/}
                    {/*                        : 'text-neutral-500 hover:text-white hover:bg-neutral-800'*/}
                    {/*                }`}*/}
                    {/*            >*/}
                    {/*                {status === 'production' && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"/>}*/}
                    {/*                {statusConfig[status].label}*/}
                    {/*            </button>*/}
                    {/*        ))}*/}
                    {/*    </div>*/}
                    {/*</motion.div>*/}

                    {/* Grid */}
                    {isLoading ? (
                        <div className="h-96 flex flex-col items-center justify-center border border-dashed border-neutral-800 rounded-3xl">
                            <Loader2 className="w-6 h-6 animate-spin text-neutral-600 mb-4" />
                            <span className="text-sm text-neutral-600 uppercase tracking-widest">Retrieving Specifications...</span>
                        </div>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-4">
                            <AnimatePresence mode="popLayout">
                                {filteredBuilds.map((build, index) => (
                                    <BuildCard
                                        key={build.id}
                                        build={build}
                                        index={index}
                                        statusConfig={statusConfig}
                                        onClick={() => setSelectedBuild(build)}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    )}

                    {!isLoading && filteredBuilds.length === 0 && (
                        <div className="py-32 text-center">
                            <Search className="w-12 h-12 text-neutral-800 mx-auto mb-4" />
                            <h3 className="text-xl text-neutral-600 font-light">No commissions found matching criteria.</h3>
                        </div>
                    )}
                </div>
            </section>

            {/* --- MODAL --- */}
            <AnimatePresence>
                {selectedBuild && (
                    <BuildModal
                        build={selectedBuild}
                        statusConfig={statusConfig}
                        onClose={() => setSelectedBuild(null)}
                    />
                )}
            </AnimatePresence>

            {/* --- FOOTER CTA --- */}
            <section className="relative py-32 bg-[#050505] overflow-hidden border-t border-neutral-900">
                <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                    <h2 className="text-4xl font-light text-white mb-8">
                        Initiate Your <span className="text-[var(--color-primary)] font-semibold">Commission</span>
                    </h2>
                    <p className="text-neutral-400 mb-10 leading-relaxed max-w-xl mx-auto">
                        Secure your build slot. Our engineering team is ready to translate your culinary concept into mechanical reality.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/quote"
                            className="group relative px-8 py-4 bg-[var(--color-primary)] text-white text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-12"
                        >
                            <span className="relative z-10">Configure Build</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <ArrowUpRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-transparent border border-neutral-800 text-neutral-400 text-sm font-bold uppercase tracking-widest hover:text-white hover:border-white transition-colors"
                        >
                            Contact Studio
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

// --- SUB-COMPONENTS ---

function BuildCard({
                       build,
                       index,
                       statusConfig,
                       onClick
                   }: {
    build: CartBuild;
    index: number;
    statusConfig: any;
    onClick: () => void;
}) {
    const config = statusConfig[build.status];
    const hasImage = build.images && build.images.length > 0;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={onClick}
            className="group relative flex flex-col bg-[#0a0a0a] border border-neutral-800 cursor-pointer hover:border-[var(--color-primary)]/50 transition-colors duration-500 overflow-hidden"
        >
            {/* Status Line */}
            <div className={`absolute top-0 left-0 w-full h-0.5 ${config.bg.replace('/20', '')} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-20`} />

            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                {hasImage ? (
                    <img
                        src={build.images[0]}
                        alt={build.model}
                        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-20">
                        <Truck className="w-16 h-16 text-neutral-500" />
                    </div>
                )}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />

                {/* Floating Badge */}
                <div className={`absolute top-4 right-4 backdrop-blur-md px-3 py-1 border ${config.border} ${config.bg} ${config.color} text-[10px] font-bold uppercase tracking-widest`}>
                    {config.label}
                </div>
            </div>

            {/* Info Section */}
            <div className="p-6 relative -mt-12 z-10">
                <div className="flex justify-between items-end mb-4">
                    <div>
                        <p className="text-xs text-[var(--color-primary)] font-mono mb-1">
                            COMMISSION #{build.id.substring(0, 4).toUpperCase()}
                        </p>
                        <h3 className="text-xl font-medium text-white group-hover:text-[var(--color-primary-light)] transition-colors">
                            {build.model}
                        </h3>
                    </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 border-t border-neutral-800 pt-4 gap-y-4">
                    <div>
                        <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Client</p>
                        <p className="text-sm text-neutral-300 font-light truncate pr-2">{build.clientName}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Valuation</p>
                        <p className="text-sm text-white font-mono">{Number(build.price).toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</p>
                    </div>
                </div>
            </div>

            {/* Hover Reveal Button */}
            <div className="absolute bottom-0 left-0 w-full z-30 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-full py-3 bg-white text-black text-xs font-bold uppercase tracking-widest text-center">
                    Inspect Specification
                </div>
            </div>
        </motion.div>
    );
}

function BuildModal({
                        build,
                        statusConfig,
                        onClose
                    }: {
    build: CartBuild;
    statusConfig: any;
    onClose: () => void;
}) {
    const config = statusConfig[build.status];
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-6xl h-[85vh] bg-[#0a0a0a] border border-neutral-800 flex flex-col md:flex-row shadow-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-[var(--color-primary)] text-white transition-colors border border-white/10"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* LEFT: Image Gallery (60% width) */}
                <div className="w-full md:w-3/5 h-1/2 md:h-full relative bg-neutral-900 group">
                    {build.images && build.images.length > 0 ? (
                        <>
                            <img
                                src={build.images[currentImage]}
                                alt="Detail View"
                                className="w-full h-full object-cover"
                            />
                            {/* Navigation Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent flex gap-3 overflow-x-auto">
                                {build.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImage(idx)}
                                        className={`relative h-16 w-24 flex-shrink-0 border-2 transition-all ${
                                            currentImage === idx ? 'border-[var(--color-primary)] opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
                                        }`}
                                    >
                                        <img src={img} className="w-full h-full object-cover" alt="" />
                                    </button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-neutral-600 gap-4">
                            <ImageIcon className="w-12 h-12 opacity-20" />
                            <span className="text-xs uppercase tracking-widest">No Visuals Available</span>
                        </div>
                    )}
                </div>

                {/* RIGHT: Specs (40% width) */}
                <div className="w-full md:w-2/5 h-1/2 md:h-full overflow-y-auto border-l border-neutral-800 bg-[#0a0a0a] p-8 md:p-10 flex flex-col">

                    {/* Header */}
                    <div className="mb-8">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 border ${config.border} ${config.bg} ${config.color} text-[10px] font-bold uppercase tracking-widest`}>
                            {config.icon && <config.icon className="w-3 h-3" />}
                            {config.label}
                        </div>
                        <h2 className="text-3xl font-light text-white mb-2">{build.model}</h2>
                        <p className="text-neutral-500 text-sm">Commissioned by <span className="text-white font-medium">{build.clientName}</span></p>
                    </div>

                    {/* Technical Specs Data */}
                    <div className="space-y-6 mb-8 flex-grow">
                        <div className="grid grid-cols-2 gap-4 pb-6 border-b border-neutral-800">
                            <div>
                                <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Total Valuation</p>
                                <p className="text-xl text-white font-mono">{Number(build.price).toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Completion Est.</p>
                                <p className="text-xl text-white font-mono">{new Date(build.lastUpdated).toLocaleDateString()}</p>
                            </div>
                        </div>

                        {build.description ? (
                            <p className="text-neutral-400 font-light leading-relaxed text-sm">
                                {build.description}
                            </p>
                        ) : (
                            <p className="text-neutral-600 text-sm italic">
                                No additional engineering notes available for this unit.
                            </p>
                        )}

                        <div className="bg-neutral-900/50 p-4 border border-neutral-800">
                            <h4 className="text-[10px] text-neutral-500 uppercase tracking-widest mb-3">System Metadata</h4>
                            <div className="flex flex-col gap-2 text-xs font-mono text-neutral-400">
                                <div className="flex justify-between">
                                    <span>Build ID:</span>
                                    <span className="text-white">{build.id.toUpperCase()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Registered:</span>
                                    <span className="text-white">{new Date(build.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto space-y-3 pt-6 border-t border-neutral-800">
                        <Link
                            href="/quote"
                            className="flex items-center justify-center w-full py-4 bg-white hover:bg-neutral-200 text-black text-sm font-bold uppercase tracking-widest transition-colors"
                        >
                            Request This Model
                        </Link>
                        <Link
                            href="/contact"
                            className="flex items-center justify-center w-full py-4 bg-transparent border border-neutral-800 hover:border-neutral-600 text-white text-sm font-bold uppercase tracking-widest transition-colors"
                        >
                            Download Blueprint
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}