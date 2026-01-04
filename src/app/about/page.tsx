'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
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
              Our Story
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Building Dreams <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">on Wheels</span>
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-400 max-w-2xl mx-auto">
              Since 1999, we've been transforming culinary visions into mobile reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
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
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Founded in 1999, we started with a simple mission: to help culinary entrepreneurs bring their
                  visions to life on wheels. What began as a small operation building basic food trucks has grown
                  into a full-service custom food truck manufacturing company.
                </p>
                <p>
                  Over the past 25+ years, we've built hundreds of custom food trucks for clients across the country.
                  Each build is a unique collaboration between our expert team and our clients, resulting in mobile
                  kitchens that are as functional as they are distinctive.
                </p>
                <p>
                  We've seen the food truck industry evolve from simple catering vehicles to sophisticated mobile
                  restaurants. Through it all, we've remained committed to quality craftsmanship, innovative design,
                  and exceptional customer service.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center"
            >
              <div className="aspect-[4/3] w-full rounded-3xl bg-slate-200 shadow-sm ring-1 ring-slate-100">
                <div className="flex h-full items-center justify-center text-slate-400">
                  Company image placeholder
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
                Our Values
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                The principles that guide everything we do
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Quality First",
                description: "We never compromise on materials, workmanship, or attention to detail.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                )
              },
              {
                title: "Customer Focus",
                description: "Your vision and success are at the center of every decision we make.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "We continuously evolve our designs and processes to stay ahead.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                )
              },
              {
                title: "Integrity",
                description: "Honest communication, fair pricing, and reliable service every time.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl bg-slate-50 p-6 text-center shadow-sm ring-1 ring-slate-100"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-red-600 text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
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
                By the Numbers
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Our impact in the food truck industry
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "25+", label: "Years in Business" },
              { number: "500+", label: "Trucks Built" },
              { number: "50+", label: "States Served" },
              { number: "98%", label: "Customer Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">{stat.number}</div>
                <div className="text-lg font-medium text-slate-900">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
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
                Our Team
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Expert craftspeople dedicated to your success
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "Design Team", description: "Creative minds who transform your vision into detailed plans" },
              { name: "Build Team", description: "Master craftspeople with decades of combined experience" },
              { name: "Support Team", description: "Dedicated specialists ensuring your ongoing success" }
            ].map((team, index) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl bg-slate-50 p-8 text-center shadow-sm ring-1 ring-slate-100"
              >
                <div className="mb-6 aspect-square w-full rounded-3xl bg-slate-200">
                  <div className="flex h-full items-center justify-center text-slate-400">
                    Team photo
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">{team.name}</h3>
                <p className="text-sm text-slate-600">{team.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
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
                Certifications & Partnerships
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Working with industry-leading partners
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.05 }}
                className="flex items-center justify-center rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <div className="text-center text-sm text-slate-400">Partner Logo {item}</div>
              </motion.div>
            ))}
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
              Ready to Start Your Journey?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
              Let's build something great together
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="group relative inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-900/20"
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
