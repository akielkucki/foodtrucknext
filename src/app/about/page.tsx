import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-8">
        <div className="relative h-[400px] w-full overflow-hidden bg-[#EDEDED]">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#8A8A8A]/20 to-[#8A8A8A]/10">
            <div className="text-center text-[#8A8A8A]">
              <p className="text-sm">About us hero image</p>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
            <div className="mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  About <span className="text-[#F5A623]">Us</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-white/90 sm:text-xl">
                  Building dreams on wheels since 1999
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#2F2F2F] sm:text-4xl">
                Our Story
              </h2>
              <div className="space-y-4 text-[#8A8A8A]">
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
            </div>

            <div className="flex items-center">
              <div className="aspect-[4/3] w-full rounded-lg bg-[#EDEDED]">
                <div className="flex h-full items-center justify-center text-[#8A8A8A]">
                  Company image placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full bg-[#EDEDED] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2F2F2F] sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-[#8A8A8A]">
              The principles that guide everything we do
            </p>
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
            ].map((value) => (
              <div key={value.title} className="rounded-lg bg-white p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D6452F] text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#2F2F2F]">{value.title}</h3>
                <p className="text-sm text-[#8A8A8A]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="w-full bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2F2F2F] sm:text-4xl">
              By the Numbers
            </h2>
            <p className="mt-4 text-lg text-[#8A8A8A]">
              Our impact in the food truck industry
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "25+", label: "Years in Business" },
              { number: "500+", label: "Trucks Built" },
              { number: "50+", label: "States Served" },
              { number: "98%", label: "Customer Satisfaction" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-5xl font-bold text-[#D6452F]">{stat.number}</div>
                <div className="text-lg font-medium text-[#2F2F2F]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full bg-[#EDEDED] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2F2F2F] sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-lg text-[#8A8A8A]">
              Expert craftspeople dedicated to your success
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "Design Team", description: "Creative minds who transform your vision into detailed plans" },
              { name: "Build Team", description: "Master craftspeople with decades of combined experience" },
              { name: "Support Team", description: "Dedicated specialists ensuring your ongoing success" }
            ].map((team) => (
              <div key={team.name} className="rounded-lg bg-white p-8 text-center">
                <div className="mb-6 aspect-square w-full rounded-lg bg-[#8A8A8A]/20">
                  <div className="flex h-full items-center justify-center text-[#8A8A8A]">
                    Team photo
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#2F2F2F]">{team.name}</h3>
                <p className="text-sm text-[#8A8A8A]">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="w-full bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2F2F2F] sm:text-4xl">
              Certifications & Partnerships
            </h2>
            <p className="mt-4 text-lg text-[#8A8A8A]">
              Working with industry-leading partners
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="flex items-center justify-center rounded-lg bg-[#EDEDED] p-6">
                <div className="text-center text-sm text-[#8A8A8A]">Partner Logo {item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#2F2F2F] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Let's build something great together
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Link
              href="/quote"
              className="rounded-lg bg-[#D6452F] px-8 py-3.5 text-center text-base font-semibold text-white transition-all hover:bg-[#D6452F]/90"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-white bg-white/10 px-8 py-3.5 text-center text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
