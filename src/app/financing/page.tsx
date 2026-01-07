'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, DollarSign, FileText, Calendar } from "lucide-react";

export default function FinancingPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />

      {/* Modern Hero Section */}
      <section className="relative w-full bg-slate-950 pt-32 pb-24 overflow-hidden">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(150,56,79,1),transparent)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-[var(--color-primary-light)] backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
              Flexible Options
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Financing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)]">Solutions</span>
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-400 max-w-2xl mx-auto">
              Turn your food truck dreams into reality with our flexible financing options designed for entrepreneurs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="w-full bg-slate-50 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Financing Options
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We partner with leading lenders to offer competitive financing
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Equipment Financing",
                icon: <DollarSign className="h-6 w-6" />,
                description: "Finance your food truck equipment with competitive rates and flexible terms.",
                features: [
                  "Up to 100% financing",
                  "Terms from 24-60 months",
                  "Fast approval process",
                  "Competitive interest rates"
                ]
              },
              {
                title: "Business Loans",
                icon: <FileText className="h-6 w-6" />,
                description: "Get the capital you need to launch or expand your food truck business.",
                features: [
                  "Loan amounts up to $500K",
                  "Flexible repayment terms",
                  "Quick funding decisions",
                  "No prepayment penalties"
                ]
              },
              {
                title: "Lease Options",
                icon: <Calendar className="h-6 w-6" />,
                description: "Lease your food truck with the option to own at the end of the term.",
                features: [
                  "Lower monthly payments",
                  "Tax benefits available",
                  "Flexible lease terms",
                  "Purchase option at end"
                ]
              }
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] p-3 text-white">
                  {option.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">{option.title}</h3>
                <p className="mb-6 text-slate-600">{option.description}</p>
                <div className="space-y-3">
                  {option.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Simple steps to get your financing approved
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Apply",
                description: "Complete a simple application with basic business information."
              },
              {
                step: "02",
                title: "Review",
                description: "Our financing partners review your application quickly."
              },
              {
                step: "03",
                title: "Approval",
                description: "Get approved often within 24-48 hours."
              },
              {
                step: "04",
                title: "Build",
                description: "Start building your dream food truck right away."
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)]">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="w-full bg-slate-50 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
                Qualification Requirements
              </h2>
              <div className="space-y-4">
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">Credit Score</h3>
                  <p className="text-slate-600">
                    Minimum credit score of 600+ for most financing options. Higher scores may qualify for better rates.
                  </p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">Business Plan</h3>
                  <p className="text-slate-600">
                    A basic business plan or concept outline showing your food truck vision and projected revenues.
                  </p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">Down Payment</h3>
                  <p className="text-slate-600">
                    Typically 10-20% down payment required, though some programs offer up to 100% financing.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
                Why Finance?
              </h2>
              <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
                <div className="space-y-6">
                  {[
                    {
                      title: "Preserve Cash Flow",
                      description: "Keep your working capital available for inventory, marketing, and operations."
                    },
                    {
                      title: "Build Business Credit",
                      description: "Establish credit history for your food truck business for future growth."
                    },
                    {
                      title: "Tax Benefits",
                      description: "Potential tax deductions on interest payments and equipment depreciation."
                    },
                    {
                      title: "Get Started Faster",
                      description: "Don't wait years to save up - start your business now and begin earning sooner."
                    }
                  ].map((benefit) => (
                    <div key={benefit.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="h-6 w-6 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-semibold text-slate-900">{benefit.title}</h4>
                        <p className="text-sm text-slate-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Ready to Explore Financing?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
              Contact us today to discuss your financing options and get pre-qualified
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="group relative inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-8 py-3 text-base font-semibold text-white transition-all hover:bg-[var(--color-primary-dark)] hover:shadow-lg hover:shadow-[color:rgba(150,56,79,0.2)]"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
