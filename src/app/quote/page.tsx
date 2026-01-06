'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import QuoteForm from "@/components/ui/quote-form";
import { motion } from "framer-motion";
import {
  FileText,
  Clock,
  Shield,
  Sparkles,
  ClipboardList,
  Ruler,
  Wrench,
  Truck,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function QuotePage() {
  const benefits = [
    {
      icon: FileText,
      title: "Detailed Breakdown",
      description: "Receive an itemized quote covering all materials, labor, and equipment costs with no hidden fees."
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Get your personalized quote within 24-48 hours. Complex projects may take up to 72 hours."
    },
    {
      icon: Shield,
      title: "No Obligation",
      description: "Our quotes are 100% free with no commitment required. Take your time to decide."
    },
    {
      icon: Sparkles,
      title: "Custom Solutions",
      description: "Every quote is tailored to your specific needs, menu concept, and business goals."
    }
  ];

  const processSteps = [
    {
      icon: ClipboardList,
      step: "01",
      title: "Submit Your Request",
      description: "Fill out the form with your project details, budget, and timeline preferences."
    },
    {
      icon: Ruler,
      step: "02",
      title: "Design Consultation",
      description: "Our team reviews your requirements and may reach out to clarify specifics."
    },
    {
      icon: FileText,
      step: "03",
      title: "Receive Your Quote",
      description: "Get a detailed, itemized quote with multiple options to fit your budget."
    },
    {
      icon: Wrench,
      step: "04",
      title: "Begin Your Build",
      description: "Once approved, we schedule your project and begin crafting your vision."
    }
  ];

  const faqs = [
    {
      question: "How accurate are the initial quotes?",
      answer: "Our initial quotes are typically within 5-10% of the final cost. We pride ourselves on transparent pricing and will communicate any potential changes before proceeding."
    },
    {
      question: "What information do I need to provide?",
      answer: "The more detail the better! Include your menu concept, required equipment, preferred truck size, budget range, and any specific features you need. Photos of inspiration builds help too."
    },
    {
      question: "Can I modify my quote after receiving it?",
      answer: "Absolutely! Quotes are starting points for discussion. We're happy to adjust specifications, swap equipment, or modify the design to better fit your needs and budget."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we partner with several lending institutions to offer competitive financing for builds over $20,000. We can include financing options in your quote upon request."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full bg-slate-950 pt-32 pb-48 overflow-hidden">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_0px,#D6452F,transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_100%,#F5A623,transparent)]" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-orange-400 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Free Quote - No Obligation
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Get Your Custom <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Build Quote.</span>
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              Ready to bring your food truck vision to life? Tell us about your project
              and receive a detailed, no-obligation quote within 48 hours.
            </p>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>500+ Builds Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Nationwide Service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Quote Form Section - Floating Card */}
      <section className="relative z-20 -mt-24 px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-6 sm:px-10">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Request Your Free Quote
              </h2>
              <p className="mt-1 text-slate-400 text-sm">
                Fill out the form below and our team will prepare a customized quote for your project.
              </p>
            </div>

            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <QuoteForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-white px-6 py-24 lg:px-8 border-t border-slate-100">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Get a Quote From Us?
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We make the quoting process simple, transparent, and stress-free.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-red-600 shadow-lg shadow-orange-500/20">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-slate-950 px-6 py-24 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,#D6452F,transparent)]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              From initial request to project kickoff, here's what to expect.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent" />
                )}

                <div className="text-center">
                  <div className="relative inline-flex">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                      <step.icon className="h-8 w-8 text-orange-400" />
                    </div>
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-600 text-xs font-bold text-white">
                      {step.step.slice(-1)}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-slate-50 px-6 py-24 border-t border-slate-200">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Quote FAQ
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Common questions about our quoting process.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md"
              >
                <h3 className="mb-3 font-bold text-slate-900">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white px-6 py-16 lg:px-8 border-t border-slate-100">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Prefer to Talk First?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our team is happy to answer questions before you request a quote.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-slate-800"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                <Truck className="mr-2 h-4 w-4" />
                View Our Builds
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
