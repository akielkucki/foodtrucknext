import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "25+", label: "Years in Business" },
  { value: "500+", label: "Trucks Built" },
  { value: "50+", label: "Custom Designs" },
  { value: "98%", label: "Customer Satisfaction" },
];

const values = [
  {
    title: "Craftsmanship",
    description: "Every truck we build is crafted with precision and attention to detail, using only premium materials and equipment.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Industry Expertise",
    description: "Our team brings decades of combined experience in custom food truck fabrication and mobile kitchen design.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Your Vision, Our Build",
    description: "We work closely with you from concept to completion, ensuring your truck perfectly matches your business needs.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Design Consultation",
    description: "Share your vision, menu, and business goals. We'll create a custom layout that maximizes efficiency and workflow.",
  },
  {
    step: "02",
    title: "Blueprint & Quote",
    description: "Receive detailed plans, 3D renderings, and a comprehensive quote with timeline for your custom build.",
  },
  {
    step: "03",
    title: "Fabrication",
    description: "Our expert team builds your truck with precision craftsmanship, keeping you updated at every milestone.",
  },
  {
    step: "04",
    title: "Delivery & Support",
    description: "We deliver your completed truck and provide ongoing support, parts, and maintenance as you grow.",
  },
];

export default function About() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Company Story */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image / Facility Photo */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#EDEDED]">
            <div className="flex h-full flex-col items-center justify-center text-[#8A8A8A]/50">
              <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
              <span className="mt-2 text-sm">Workshop / Facility photo</span>
            </div>
          </div>

          {/* Company History */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#F5A623]">
              Our Story
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#2F2F2F] sm:text-4xl">
              Building Custom Food Trucks Since 1999
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#8A8A8A]">
              What started as a passion for mobile culinary innovation has grown into one of the most trusted custom food truck builders in the industry. For over 25 years, we've been transforming visions into rolling restaurants.
            </p>
            <p className="mt-4 text-[#8A8A8A]">
              Our founder combined restaurant equipment expertise with custom fabrication skills to create something unique—a full-service shop dedicated to building dream food trucks from the ground up. Today, our team of skilled craftsmen and designers work together to create mobile kitchens that are as functional as they are impressive.
            </p>
            <p className="mt-4 text-[#8A8A8A]">
              From our 15,000 sq. ft. fabrication facility, we design and build custom trucks for entrepreneurs across the country. We also offer parts, service, and maintenance for those who need it. Whether you're launching your first truck or expanding your fleet, we bring your vision to life.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-[#EDEDED] p-6 text-center"
            >
              <p className="text-3xl font-bold text-[#D6452F] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[#8A8A8A]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us / Values */}
        <div className="mt-20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#2F2F2F] sm:text-3xl">
              Why Choose Us
            </h3>
            <p className="mt-2 text-[#8A8A8A]">
              What sets us apart from the competition
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D6452F]/10 text-[#D6452F]">
                  {value.icon}
                </div>
                <h4 className="mt-4 text-lg font-semibold text-[#2F2F2F]">
                  {value.title}
                </h4>
                <p className="mt-2 text-sm text-[#8A8A8A]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="mt-20 rounded-2xl bg-[#2F2F2F] p-8 sm:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              How We Work
            </h3>
            <p className="mt-2 text-white/70">
              Our simple process gets you what you need, fast
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div key={item.step} className="relative">
                <span className="text-5xl font-bold text-[#D6452F]/30">
                  {item.step}
                </span>
                <h4 className="mt-2 text-lg font-semibold text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section Placeholder */}
        <div className="mt-20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#2F2F2F] sm:text-3xl">
              Meet the Team
            </h3>
            <p className="mt-2 text-[#8A8A8A]">
              The experts behind your food truck success
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-full bg-[#EDEDED]">
                  <div className="flex h-full items-center justify-center text-[#8A8A8A]/30">
                    <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                </div>
                <h4 className="mt-4 font-semibold text-[#2F2F2F]">
                  Team Member
                </h4>
                <p className="text-sm text-[#8A8A8A]">Position Title</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/about"
              className="rounded-lg bg-[#D6452F] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#D6452F]/90 hover:shadow-xl"
            >
              Learn More About Us
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-[#2F2F2F] px-8 py-3.5 text-base font-semibold text-[#2F2F2F] transition-all hover:bg-[#2F2F2F] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}