'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/ui/form";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full bg-slate-950 pt-32 pb-48 overflow-hidden">
          {/* Abstract Tech Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_0px,#D6452F,transparent)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl"
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-orange-400 backdrop-blur-sm">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                Accepting New Projects
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Let's Build Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Vision.</span>
              </h1>
              <p className="mt-4 text-lg leading-8 text-slate-400">
                Ready to start your custom build or need parts for your existing fleet?
                Our engineering team is standing by.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Contact Section - Floating Card Layout */}
        <section className="relative z-20 -mt-24 px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid lg:grid-cols-2">

              {/* Left Side: Contact Info (Dark Theme) */}
              <div className="relative bg-slate-900 px-6 py-10 sm:px-10 sm:py-16 lg:px-12">
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Contact Information
                  </h2>
                  <p className="mt-4 text-base text-slate-400">
                    Have technical questions? Direct access to our support and sales team.
                  </p>

                  <dl className="mt-8 space-y-8">
                    {[
                      {
                        icon: Phone,
                        label: "Call Us",
                        value: "(800) 555-0123",
                        sub: "Mon-Fri 8am-6pm EST",
                        href: "tel:+18005550123"
                      },
                      {
                        icon: Mail,
                        label: "Email Sales",
                        value: "sales@foodtruckparts.com",
                        sub: "24 hour response time",
                        href: "mailto:sales@foodtruckparts.com"
                      },
                      {
                        icon: MapPin,
                        label: "Visit Our Facility",
                        value: "123 Industrial Drive",
                        sub: "Manufacturing City, ST 12345",
                        href: "#"
                      },
                      {
                        icon: Clock,
                        label: "Business Hours",
                        value: "Mon - Fri: 8:00 AM - 6:00 PM",
                        sub: "Weekend appointments available",
                        href: null
                      },
                    ].map((item) => (
                        <div key={item.label} className="flex gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/5 backdrop-blur-sm">
                            <item.icon className="h-6 w-6 text-orange-400" aria-hidden="true" />
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-slate-400">{item.label}</dt>
                            <dd className="mt-1 text-base font-semibold text-white">
                              {item.href ? (
                                  <a href={item.href} className="hover:text-orange-400 transition-colors">
                                    {item.value}
                                  </a>
                              ) : (
                                  <span>{item.value}</span>
                              )}
                            </dd>
                            <dd className="mt-1 text-xs text-slate-500">{item.sub}</dd>
                          </div>
                        </div>
                    ))}
                  </dl>

                  <div className="mt-12 pt-10 border-t border-white/10">
                    <h3 className="text-sm font-semibold text-slate-400 mb-4">Follow our builds</h3>
                    <div className="flex gap-4">
                      {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                          <a key={i} href="#" className="text-slate-400 hover:text-white transition-colors">
                            <Icon className="h-6 w-6" />
                          </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Contact Form (Light Theme) */}
              <div className="bg-white px-6 py-10 sm:px-10 sm:py-16 lg:px-12">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    Send us a Message
                  </h2>
                  <p className="mt-2 text-slate-500">
                    Fill out the form below and we'll get back to you with a quote or answer within 24 hours.
                  </p>
                </div>

                {/* Form Component Wrapper */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 shadow-inner">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full px-4 sm:px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-200 h-[400px] relative group">
              {/* Placeholder for Map - In production, replace with Google Maps Embed */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400 font-medium">
                <MapPin className="h-8 w-8 mr-2 text-slate-400" />
                Interactive Map Loading...
              </div>

              {/* Floating Location Card on Map */}
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs hidden sm:block">
                <h4 className="font-bold text-slate-900">Food Truck Parts HQ</h4>
                <p className="text-sm text-slate-500 mt-1">123 Industrial Drive</p>
                <a href="#" className="mt-3 inline-flex items-center text-xs font-bold text-red-600 hover:underline">
                  Get Directions <ArrowRight className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-slate-50 px-6 py-24 border-t border-slate-200">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Common Questions
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Quick answers to help you move forward.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question: "How long does a custom build take?",
                  answer: "Most custom builds take 8-12 weeks from design approval. We provide a detailed timeline during the quoting process."
                },
                {
                  question: "Do you ship nationwide?",
                  answer: "Yes, we handle logistics for delivery to all 50 states. We also offer international shipping for parts orders."
                },
                {
                  question: "Can I bring my own truck?",
                  answer: "Absolutely. We specialize in retrofitting customer-owned vehicles as well as providing turn-key solutions with our own inventory."
                },
                {
                  question: "Do you offer financing?",
                  answer: "We partner with top industry lenders to offer competitive financing rates for builds over $20,000."
                },
              ].map((faq, index) => (
                  <div key={index} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md">
                    <h3 className="mb-3 font-bold text-slate-900">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
  );
}