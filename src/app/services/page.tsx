import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-8">
        <div className="relative h-[400px] w-full overflow-hidden bg-[#EDEDED]">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#8A8A8A]/20 to-[#8A8A8A]/10">
            <div className="text-center text-[#8A8A8A]">
              <p className="text-sm">Services hero image</p>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
            <div className="mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Our <span className="text-[#F5A623]">Services</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-white/90 sm:text-xl">
                  Comprehensive solutions for all your food truck needs, from build to maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="w-full bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2F2F2F] sm:text-4xl">
              Complete Food Truck Solutions
            </h2>
            <p className="mt-4 text-lg text-[#8A8A8A]">
              Everything you need to get on the road and stay running
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                color: "text-[#D6452F]",
                title: "Custom Builds",
                description: "Design and build custom food trucks from the ground up, tailored to your specific menu and operational needs.",
                features: ["3D Design & Layout", "Equipment Selection", "Electrical & Plumbing", "Custom Fabrication"]
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                ),
                color: "text-[#F5A623]",
                title: "Renovations & Upgrades",
                description: "Breathe new life into existing food trucks with modern upgrades, layout improvements, and equipment refreshes.",
                features: ["Kitchen Redesign", "Equipment Upgrades", "Cosmetic Refreshes", "Compliance Updates"]
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                color: "text-[#D6452F]",
                title: "Repairs & Maintenance",
                description: "Keep your food truck running smoothly with professional repair and maintenance services.",
                features: ["Equipment Repair", "Preventive Maintenance", "Emergency Service", "Parts Replacement"]
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                ),
                color: "text-[#F5A623]",
                title: "Consulting & Planning",
                description: "Expert guidance to help you plan and launch your food truck business successfully.",
                features: ["Business Planning", "Menu Optimization", "Layout Consulting", "Permit Assistance"]
              }
            ].map((service) => (
              <div key={service.title} className="rounded-lg bg-[#EDEDED] p-8">
                <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#2F2F2F]">{service.title}</h3>
                <p className="mb-4 text-[#8A8A8A]">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#2F2F2F]">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D6452F]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full bg-[#EDEDED] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2F2F2F] sm:text-4xl">
              Why Choose Our Services
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "25+ Years Experience", description: "Building food trucks since 1999" },
              { title: "Turnkey Solutions", description: "Complete end-to-end service" },
              { title: "Quality Craftsmanship", description: "Built to last and perform" },
              { title: "Ongoing Support", description: "Service after the sale" }
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-6 text-center shadow-md">
                <h3 className="mb-2 text-lg font-semibold text-[#2F2F2F]">{item.title}</h3>
                <p className="text-sm text-[#8A8A8A]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#2F2F2F] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's Discuss Your Project
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Get in touch to learn more about how we can help with your food truck needs
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
