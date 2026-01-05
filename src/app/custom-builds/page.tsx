'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {projects} from "@/lib/utils";

export default function CustomBuildsPage() {
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
              Custom Solutions
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Custom Food Truck <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Builds</span>
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-400 max-w-2xl mx-auto">
              Every food truck we build is a unique masterpiece designed around your vision and culinary needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
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
                Our Build Process
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                From concept to completion in six strategic steps
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your vision, menu, budget, and timeline to understand your needs."
              },
              {
                step: "02",
                title: "Design",
                description: "Our team creates detailed 3D designs and layouts optimized for your workflow."
              },
              {
                step: "03",
                title: "Approval",
                description: "Review and approve all specifications, materials, and equipment selections."
              },
              {
                step: "04",
                title: "Construction",
                description: "Expert builders bring your design to life with precision craftsmanship."
              },
              {
                step: "05",
                title: "Installation",
                description: "All equipment and systems are professionally installed and tested."
              },
              {
                step: "06",
                title: "Delivery",
                description: "Final walkthrough and delivery of your completed, road-ready food truck."
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <div className="mb-2 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">{item.step}</div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Builds Gallery */}
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
                Featured Projects
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Precision-engineered mobile kitchens built for performance
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-3xl bg-slate-50 shadow-sm ring-1 ring-slate-100"
              >
                <div className="aspect-[16/10] w-full relative overflow-hidden bg-slate-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
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
              Ready to Build Your Dream Food Truck?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
              Let's discuss your project and bring your vision to life
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
