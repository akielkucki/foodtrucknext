"use client";

import { useRef, MouseEvent } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useMotionValue
} from "framer-motion";
import { ArrowDown, Wrench } from "lucide-react"; // Switched Flame to Wrench

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);

    // --- SCROLL LOGIC ---
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // 1. Text Animation:
    const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

    // 2. Video Dimensions & Position:
    const videoWidth = useTransform(scrollYProgress, [0.1, 0.8], ["45%", "100%"]);
    const videoHeight = useTransform(scrollYProgress, [0.1, 0.8], ["30vh", "100vh"]);
    const videoTop = useTransform(scrollYProgress, [0.1, 0.8], ["55%", "0%"]);
    const videoRadius = useTransform(scrollYProgress, [0.1, 0.8], ["24px", "0px"]);

    // --- INTERACTIVE MOUSE TILT LOGIC ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 15, stiffness: 100 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 15, stiffness: 100 });

    function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
        if (!videoContainerRef.current) return;
        const rect = videoContainerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPct = (e.clientX - rect.left) / width - 0.5;
        const mouseYPct = (e.clientY - rect.top) / height - 0.5;
        mouseX.set(mouseXPct);
        mouseY.set(mouseYPct);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-slate-950">

            <div className="sticky top-0 h-screen overflow-hidden w-full">

                {/* --- BACKGROUND --- */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[color:rgba(150,56,79,0.2)] via-slate-950 to-slate-950 z-0"
                />

                {/* --- TEXT CONTENT --- */}
                <motion.div
                    style={{
                        opacity: textOpacity,
                        scale: textScale,
                        top: "15%",
                    }}
                    className="absolute w-full z-40 text-center px-4 flex flex-col items-center pointer-events-none"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2 text-[var(--color-primary)] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 bg-[color:rgba(150,56,79,0.15)] px-4 py-2 rounded-full border border-[color:rgba(150,56,79,0.5)] backdrop-blur-sm"
                    >
                        {/* Swapped Flame for Wrench to match "Builder" theme */}
                        <Wrench className="w-4 h-4" color="var(--color-primary)" fill="currentColor" />
                        <span>Premium Fleet Fabrication</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-8"
                    >
                        Build Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary)]">
                            Empire
                        </span>
                    </motion.h1>
                </motion.div>

                {/* --- VIDEO CONTAINER --- */}
                <motion.div
                    style={{
                        width: videoWidth,
                        height: videoHeight,
                        top: videoTop,
                        left: "50%",
                        x: "-50%",
                        borderRadius: videoRadius,
                        perspective: "1000px",
                    }}
                    className="absolute z-30 shadow-2xl shadow-[color:rgba(150,56,79,0.1)] overflow-hidden"
                >
                    <motion.div
                        ref={videoContainerRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX: useTransform(scrollYProgress, [0, 0.1], [rotateX, 0]),
                            rotateY: useTransform(scrollYProgress, [0, 0.1], [rotateY, 0]),
                            transformStyle: "preserve-3d"
                        }}
                        className="w-full h-full relative group bg-black"
                    >
                        <video
                            className="absolute inset-0 w-full h-full object-cover scale-105"
                            src="/hero.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />

                        {/* Video Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />

                        {/* Full Screen Caption (Appears only at end of scroll) */}
                        <motion.div
                            style={{ opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]) }}
                            className="absolute bottom-12 left-8 md:left-16 text-white z-40"
                        >
                            <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-2">
                                Precision Engineering
                            </h3>
                            <p className="text-lg md:text-xl text-slate-300 max-w-lg">
                                Commercial grade kitchens designed for high-volume output. NSF Certified.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* --- SCROLL HINT --- */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500 text-sm font-medium tracking-widest uppercase"
                >
                    <span>Start Building</span>
                    <ArrowDown className="w-4 h-4" />
                </motion.div>

            </div>
        </section>
    );
}