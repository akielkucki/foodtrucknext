import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GalleryGrid from "@/components/gallery/GalleryGrid";

import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import {Button} from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Gallery | Food Truck Parts",
    description: "Browse our photo gallery showcasing food truck builds and parts.",
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-orange-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-slate-950 pt-24 pb-32 lg:pt-32 lg:pb-40">

                {/* Abstract Background Elements */}
                <div className="absolute inset-0 z-0">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                    {/* Radial Gradient Fade */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#1e293b,transparent)]" />
                </div>

                {/* Glowing Orbs for Depth */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center">

                        {/* Pill Badge */}
                        <div className="mb-8 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 backdrop-blur-md transition-colors hover:bg-orange-500/20">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
                            Project Gallery
                        </div>

                        {/* Main Headline */}
                        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Precision Parts. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-orange-600">
                Exceptional Builds.
              </span>
                        </h1>

                        {/* Subtext */}
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                            From complete chassis overhauls to custom stainless fabrication.
                            Explore how we turn standard trucks into culinary machines.
                        </p>
                    </div>
                </div>

                {/* Decorative bottom fade to blend with white background */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Gallery Section */}
            <section className="relative z-20 w-full -mt-12 px-4 pb-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[1920px]">
                    {/* We push the grid up slightly (-mt-12) to overlap the hero for a modern look */}
                    <GalleryGrid />
                </div>
            </section>

            {/* CTA Section - Don't let them leave without action */}
            <section className="bg-slate-50 py-24 sm:py-32 border-t border-slate-200">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Ready to start your build?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
                        Whether you need a specific part or a full custom installation,
                        our team is ready to help you hit the road.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-x-6">
                        <Button
                            size="lg"
                            className="bg-[#F5A623] hover:bg-orange-600 text-white font-semibold rounded-full px-8"
                        >
                            Get a Quote
                        </Button>
                        <a href="/contact" className="text-sm font-semibold leading-6 text-slate-900 flex items-center hover:text-orange-600 transition-colors">
                            Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}