'use client';

import { useState, useEffect } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Hammer, Truck, Wrench, ClipboardList } from "lucide-react";
// Note: If you don't have lucide-react, you can use the SVGs from your previous code,
// but I've used Lucide here for a much cleaner look.

// --- Data Configuration ---
const services = [
  {
    id: "custom-builds",
    title: "Custom Builds",
    icon: <Truck className="h-6 w-6" />,
    shortDesc: "Ground-up fabrication",
    fullDesc: "We don't just assemble trucks; we engineer mobile culinary environments. From chassis selection to final inspection, every inch is optimized for workflow and weight distribution.",
    features: [
      "3D CAD Design & Workflow Optimization",
      "Heavy-Duty Electrical & Plumbing Systems",
      "Custom Stainless Steel Fabrication",
      "Health Department Compliance Guarantee"
    ]
  },
  {
    id: "renovations",
    title: "Renovations",
    icon: <Hammer className="h-6 w-6" />,
    shortDesc: "Modernize your fleet",
    fullDesc: "Breathe new life into aging units. We specialize in retrofitting older trucks with modern equipment, LED lighting, and ergonomic layout changes to increase output speed.",
    features: [
      "Kitchen Layout Re-engineering",
      "Equipment Upgrades & Swaps",
      "Exterior Wraps & Cosmetic Refreshes",
      "Generator & Power System Upgrades"
    ]
  },
  {
    id: "repairs",
    title: "Repairs & Maintenance",
    icon: <Wrench className="h-6 w-6" />,
    shortDesc: "Keep running smoothly",
    fullDesc: "Downtime is lost revenue. Our rapid-response team handles everything from broken refrigeration to generator failures, ensuring you get back to serving customers fast.",
    features: [
      "Emergency Equipment Repair",
      "Preventive Maintenance Plans",
      "Propane System Leak Testing",
      "Chassis & Engine Coordination"
    ]
  },
  {
    id: "consulting",
    title: "Consulting",
    icon: <ClipboardList className="h-6 w-6" />,
    shortDesc: "Business planning",
    fullDesc: "Avoid costly mistakes before you build. Our team provides expert guidance on permitting, menu-to-equipment matching, and operational logistics.",
    features: [
      "Business Plan Development",
      "Menu Optimization Consulting",
      "Health Permit Expediting",
      "Operational Workflow Analysis"
    ]
  }
];

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState(services[0].id);

  // Scroll spy to update active sidebar link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (const service of services) {
        const element = document.getElementById(service.id);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(service.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
      <div className="bg-slate-50 min-h-screen">
        <Navbar />

        {/* Modern Hero Section */}
        <section className="relative w-full bg-slate-950 pt-32 pb-24 overflow-hidden">
          {/* Abstract Tech Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#D6452F,transparent)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-orange-400 backdrop-blur-sm">
                <span className="mr-2 h-2 w-2 rounded-full bg-orange-400 animate-pulse"></span>
                Professional Solutions
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Engineering Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Success</span>
              </h1>
              <p className="mt-4 text-lg leading-8 text-slate-400 max-w-2xl mx-auto">
                From concept to curb, we provide the technical expertise and craftsmanship required to build high-performance mobile kitchens.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* Sticky Sidebar Navigation */}
            <div className="lg:col-span-4 lg:block">
              <div className="sticky top-32 space-y-8">
                {/* Menu */}
                <nav className="hidden lg:block space-y-2">
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-4">Services Menu</h3>
                  {services.map((service) => (
                      <button
                          key={service.id}
                          onClick={() => scrollToSection(service.id)}
                          className={`group flex w-full items-center justify-between rounded-lg px-4 py-4 text-left text-sm font-medium transition-all ${
                              activeSection === service.id
                                  ? "bg-white shadow-md ring-1 ring-slate-200 text-red-600"
                                  : "text-slate-600 hover:bg-white hover:text-slate-900"
                          }`}
                      >
                    <span className="flex items-center gap-3">
                        <span className={`p-1 rounded-md ${activeSection === service.id ? "bg-red-50" : "bg-slate-100 group-hover:bg-white"}`}>
                           {service.icon}
                        </span>
                      {service.title}
                    </span>
                        {activeSection === service.id && (
                            <motion.div layoutId="activeDot" className="h-2 w-2 rounded-full bg-red-600" />
                        )}
                      </button>
                  ))}
                </nav>

                {/* Sidebar CTA Card */}
                <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-orange-500 blur-2xl opacity-20"></div>
                  <h3 className="relative text-lg font-bold mb-2">Have a custom request?</h3>
                  <p className="relative text-sm text-slate-400 mb-6">
                    Our engineering team is ready to tackle unique challenges.
                  </p>
                  <Link
                      href="/contact"
                      className="relative flex w-full items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                  >
                    Talk to an Engineer
                  </Link>
                </div>
              </div>

              {/* Mobile Menu (Horizontal Scroll) */}
              <div className="lg:hidden -mx-6 px-6 pb-6 overflow-x-auto flex gap-4 no-scrollbar sticky top-[64px] z-30 bg-slate-50/95 backdrop-blur-sm py-4 border-b border-slate-200">
                {services.map((service) => (
                    <button
                        key={service.id}
                        onClick={() => scrollToSection(service.id)}
                        className={`flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            activeSection === service.id
                                ? "bg-red-600 text-white"
                                : "bg-white border border-slate-200 text-slate-600"
                        }`}
                    >
                      {service.title}
                    </button>
                ))}
              </div>
            </div>

            {/* Detailed Content Column */}
            <div className="lg:col-span-8 space-y-24">
              {services.map((service) => (
                  <section
                      id={service.id}
                      key={service.id}
                      className="scroll-mt-32"
                  >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="relative rounded-3xl bg-white p-8 sm:p-12 shadow-sm ring-1 ring-slate-100"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div>
                          <div className="flex items-center gap-3 text-orange-500 font-medium mb-3">
                            {service.icon}
                            <span className="text-sm uppercase tracking-wider">{service.shortDesc}</span>
                          </div>
                          <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                        </div>
                        {/* Decorative number */}
                        <span className="text-6xl font-black text-slate-100 select-none hidden sm:block">
                            0{services.indexOf(service) + 1}
                        </span>
                      </div>

                      {/* Content */}
                      <p className="text-lg text-slate-600 leading-relaxed mb-10">
                        {service.fullDesc}
                      </p>

                      {/* Features Grid */}
                      <div className="bg-slate-50 rounded-2xl p-6 sm:p-8">
                        <h4 className="font-semibold text-slate-900 mb-6 flex items-center gap-2">
                          Key Capabilities
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                          {service.features.map((feature) => (
                              <div key={feature} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-700 font-medium">{feature}</span>
                              </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </section>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <section className="relative w-full overflow-hidden bg-slate-900 py-24 sm:py-32">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Ready to get started?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
              Whether you need a single part replacement or a fleet of custom trucks,
              our team has the capacity and expertise to deliver.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                  href="/quote"
                  className="group relative inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-900/20"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
  );
}