import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function CustomBuildsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-8">
        <div className="relative h-[400px] w-full overflow-hidden bg-[#EDEDED]">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#8A8A8A]/20 to-[#8A8A8A]/10">
            <div className="text-center text-[#8A8A8A]">
              <p className="text-sm">Custom builds hero image</p>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
            <div className="mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Custom Food Truck <span className="text-[#F5A623]">Builds</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-white/90 sm:text-xl">
                  Every food truck we build is a unique masterpiece designed around your vision and culinary needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="w-full bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2F2F2F] sm:text-4xl">
              Our Build Process
            </h2>
            <p className="mt-4 text-lg text-[#8A8A8A]">
              From concept to completion in six strategic steps
            </p>
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
            ].map((item) => (
              <div key={item.step} className="relative border-l-4 border-[#D6452F] bg-[#EDEDED] p-6">
                <div className="mb-2 text-4xl font-bold text-[#F5A623]">{item.step}</div>
                <h3 className="mb-2 text-xl font-semibold text-[#2F2F2F]">{item.title}</h3>
                <p className="text-[#8A8A8A]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Builds Gallery */}
      <section className="w-full bg-[#EDEDED] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2F2F2F] sm:text-4xl">
              Featured Builds
            </h2>
            <p className="mt-4 text-lg text-[#8A8A8A]">
              Explore our portfolio of custom food truck creations
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
                <div className="aspect-[4/3] w-full bg-[#8A8A8A]/20">
                  <div className="flex h-full items-center justify-center text-[#8A8A8A]">
                    Build {item}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-[#2F2F2F]">
                    Build Project {item}
                  </h3>
                  <p className="mb-4 text-sm text-[#8A8A8A]">
                    Custom designed food truck with specialized equipment and layout
                  </p>
                  <button className="text-sm font-semibold text-[#D6452F] hover:text-[#F5A623]">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#2F2F2F] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Build Your Dream Food Truck?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Let's discuss your project and bring your vision to life
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
