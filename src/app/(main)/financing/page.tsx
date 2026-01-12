'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  DollarSign,
  FileText,
  Calendar,
  TrendingUp,
  PieChart,
  CreditCard,
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
  Wallet
} from "lucide-react";

export default function FinancingPage() {
  return (
      <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans selection:bg-[#9B3A4E] selection:text-white">
        <Navbar />

        {/* --- HERO SECTION --- */}
        <section className="relative w-full pt-40 pb-32 overflow-hidden border-b border-neutral-900">
          {/* Background Atmosphere */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#9B3A4E]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md mb-8">
                <span className="w-1.5 h-1.5 bg-[#9B3A4E] rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">Capital Services</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
                Strategic <br />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9B3A4E] to-red-500">
                Financing Solutions
              </span>
              </h1>

              <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                Acquire your mobile asset without compromising liquidity. We offer precision-tailored financial instruments designed for culinary entrepreneurs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- FINANCING OPTIONS (TIERS) --- */}
        <section className="w-full px-6 py-24 relative z-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <span className="text-[#9B3A4E] font-mono text-xs mb-2 block">01 // INSTRUMENTS</span>
                <h2 className="text-3xl font-light text-white">Funding Pathways</h2>
              </div>
              <p className="text-neutral-500 text-sm max-w-xs text-right hidden md:block">
                Partnerships with tier-one lenders to secure optimal rates.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Equipment Financing",
                  icon: Wallet,
                  subtitle: "Asset-Based Lending",
                  description: "Leverage the value of the vehicle itself to secure capital with minimized upfront requirements.",
                  features: ["Up to 100% LTV", "24-60 Month Terms", "Rapid Underwriting", "Fixed Rates"]
                },
                {
                  title: "Business Capital",
                  icon: TrendingUp,
                  subtitle: "Growth Injection",
                  description: "Direct capital infusion to launch operations, manage inventory, and fund marketing.",
                  features: ["Limits up to $500K", "Flexible Repayment", "48h Approval Window", "No Prepayment Penalty"]
                },
                {
                  title: "Lease Structures",
                  icon: FileText,
                  subtitle: "OpEx Optimized",
                  description: "Minimize balance sheet impact with lease-to-own structures offering tax advantages.",
                  features: ["Lower Monthly Outlay", "Tax Deductible", "End-of-Term Buyout", "Balance Sheet Mgmt"]
                }
              ].map((option, index) => (
                  <motion.div
                      key={option.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative rounded-2xl bg-[#0a0a0a] border border-neutral-800 p-8 hover:border-[#9B3A4E]/50 transition-all duration-500 overflow-hidden"
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#9B3A4E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="mb-6 inline-flex items-center justify-center p-3 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:text-[#9B3A4E] transition-colors">
                        <option.icon className="h-6 w-6" />
                      </div>

                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-1">{option.title}</h3>
                        <p className="text-xs font-mono text-[#9B3A4E] uppercase tracking-wider">{option.subtitle}</p>
                      </div>

                      <p className="mb-8 text-sm text-neutral-400 font-light leading-relaxed border-l-2 border-neutral-800 pl-4 group-hover:border-[#9B3A4E] transition-colors">
                        {option.description}
                      </p>

                      <div className="space-y-3 bg-neutral-900/30 p-4 rounded-lg border border-neutral-800/50">
                        {option.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                              <div className="h-1.5 w-1.5 rounded-full bg-[#9B3A4E]" />
                              <span className="text-xs font-mono text-neutral-300">{feature}</span>
                            </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROCESS SCHEMATIC --- */}
        <section className="w-full bg-[#080808] px-6 py-24 border-y border-neutral-900">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-white">Acquisition <span className="font-bold">Protocol</span></h2>
              <div className="h-0.5 w-12 bg-[#9B3A4E] mx-auto mt-4" />
            </div>

            <div className="relative grid gap-8 md:grid-cols-4">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-neutral-800 z-0" />

              {[
                { step: "01", title: "Application", desc: "Submit secure digital briefing." },
                { step: "02", title: "Assessment", desc: "Lender underwriting review." },
                { step: "03", title: "Approval", desc: "Terms issued within 48h." },
                { step: "04", title: "Execution", desc: "Funds deployed. Build begins." }
              ].map((item, index) => (
                  <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative z-10 text-center"
                  >
                    <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-[#0a0a0a] border border-neutral-800 flex items-center justify-center shadow-2xl group cursor-default hover:border-[#9B3A4E] transition-colors">
                      <span className="text-2xl font-mono font-bold text-neutral-600 group-hover:text-white transition-colors">{item.step}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white uppercase tracking-wider">{item.title}</h3>
                    <p className="text-xs text-neutral-500 max-w-[150px] mx-auto">{item.desc}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SPECS & BENEFITS (Split View) --- */}
        <section className="w-full px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16">

              {/* Left: Requirements */}
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <ShieldCheck className="w-6 h-6 text-[#9B3A4E]" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
                    Prerequisites
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Credit Standing", value: "600+ FICO", detail: "Preferred tier for optimal rates." },
                    { label: "Business Plan", value: "Required", detail: "Proof of concept and revenue projections." },
                    { label: "Capital Injection", value: "10-20%", detail: "Typical down payment structure." }
                  ].map((req, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-neutral-900/20 border border-neutral-800 rounded-xl hover:bg-neutral-900/40 transition-colors">
                        <div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">{req.label}</h3>
                          <p className="text-xs text-neutral-500">{req.detail}</p>
                        </div>
                        <div className="mt-4 sm:mt-0 px-3 py-1 bg-neutral-950 border border-neutral-800 rounded text-[#9B3A4E] font-mono text-sm">
                          {req.value}
                        </div>
                      </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Benefits Grid */}
              <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <PieChart className="w-6 h-6 text-[#9B3A4E]" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
                    Strategic Advantage
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Cash Flow Preservation",
                      description: "Retain working capital for operational overhead."
                    },
                    {
                      title: "Credit Velocity",
                      description: "Establish commercial credit history for future expansion."
                    },
                    {
                      title: "Tax Optimization",
                      description: "Potential Section 179 deductions on equipment."
                    },
                    {
                      title: "Immediate Deployment",
                      description: "Accelerate market entry. Don't wait to accumulate cash."
                    }
                  ].map((benefit) => (
                      <div key={benefit.title} className="p-6 bg-[#0a0a0a] border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors">
                        <CheckCircle2 className="h-5 w-5 text-[#9B3A4E] mb-4" />
                        <h4 className="mb-2 text-sm font-bold text-white">{benefit.title}</h4>
                        <p className="text-xs text-neutral-500 leading-relaxed">{benefit.description}</p>
                      </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="relative py-32 bg-[#050505] overflow-hidden border-t border-neutral-900">
          <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
            <h2 className="text-4xl font-light text-white mb-8">
              Ready to <span className="text-[#9B3A4E] font-semibold">Fund Your Build?</span>
            </h2>
            <p className="text-neutral-400 mb-10 leading-relaxed max-w-xl mx-auto">
              Our financial specialists are standing by to structure a deal that aligns with your business goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                  href="/quote"
                  className="group relative px-8 py-4 bg-[#9B3A4E] text-white text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-[#7a2e3d]"
              >
                      <span className="relative z-10 flex items-center gap-2">
                          Request Financing Info <ChevronRight className="w-4 h-4" />
                      </span>
              </Link>
              <Link
                  href="/contact"
                  className="px-8 py-4 bg-transparent border border-neutral-800 text-neutral-400 text-sm font-bold uppercase tracking-widest hover:text-white hover:border-white transition-colors"
              >
                Speak to an Agent
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
  );
}