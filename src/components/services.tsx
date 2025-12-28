import Link from "next/link";
import Image from "next/image";

const services = [
  {
    name: "Custom Food Truck Builds",
    description:
      "From concept to completion, we design and build fully custom food trucks tailored to your menu, workflow, and brand identity. Your vision, our expertise.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    href: "/custom-builds",
  },
  {
    name: "Design & Layout Services",
    description:
      "Already have a truck? We'll help you redesign and optimize your kitchen layout for maximum efficiency and customer experience.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    href: "/services/design",
  },
  {
    name: "Parts & Equipment",
    description:
      "Need replacement parts or equipment upgrades? We stock quality components and can source specialty items for any mobile kitchen setup.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    href: "/parts",
  },
  {
    name: "Repair & Maintenance",
    description:
      "Keep your truck running smoothly with our repair and preventive maintenance services. We service all custom builds and major equipment brands.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: "/services/repair-maintenance",
  },
];

const featuredProjects = [
  {
    id: 1,
    title: "Taco Truck Transformation",
    description:
      "Complete kitchen rebuild featuring custom stainless steel workspace, dual fryers, and upgraded ventilation system.",
    before: null,
    after: null,
    category: "Custom Build",
  },
  {
    id: 2,
    title: "Coffee Van Conversion",
    description:
      "Converted cargo van into a fully-equipped mobile espresso bar with custom cabinetry and water systems.",
    before: null,
    after: null,
    category: "Full Conversion",
  },
];

export default function Services() {
  return (
    <section className="bg-[#EDEDED] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#2F2F2F] sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-[#8A8A8A]">
            Custom food truck builds, design services, parts, and ongoing support
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group flex gap-6 rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#EDEDED] text-[#D6452F] transition-colors group-hover:bg-[#D6452F] group-hover:text-white">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2F2F2F] group-hover:text-[#D6452F]">
                  {service.name}
                </h3>
                <p className="mt-2 text-[#8A8A8A]">{service.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[#D6452F]">
                  Learn more
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Projects / Case Studies */}
        <div className="mt-20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#2F2F2F] sm:text-3xl">
              Featured Projects
            </h3>
            <p className="mt-2 text-[#8A8A8A]">
              See how we've helped food truck owners transform their businesses
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                {/* Before/After Images */}
                <div className="grid grid-cols-2">
                  <div className="relative aspect-[4/3] bg-[#8A8A8A]/10">
                    {project.before ? (
                      <Image
                        src={project.before}
                        alt={`${project.title} - Before`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center text-[#8A8A8A]/50">
                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span className="mt-1 text-xs">Before</span>
                      </div>
                    )}
                    <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[4/3] bg-[#F5A623]/10">
                    {project.after ? (
                      <Image
                        src={project.after}
                        alt={`${project.title} - After`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center text-[#F5A623]/50">
                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span className="mt-1 text-xs">After</span>
                      </div>
                    )}
                    <span className="absolute bottom-2 right-2 rounded bg-[#D6452F] px-2 py-1 text-xs font-medium text-white">
                      After
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <span className="inline-block rounded-full bg-[#F5A623]/10 px-3 py-1 text-xs font-medium text-[#F5A623]">
                    {project.category}
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-[#2F2F2F]">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-[#8A8A8A]">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#2F2F2F]">
            Ready to get started?
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-[#8A8A8A]">
            Whether you need a simple repair or a complete custom build, our team is here to help.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/services/schedule"
              className="rounded-lg bg-[#D6452F] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#D6452F]/90 hover:shadow-xl"
            >
              Schedule a Service
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-[#2F2F2F] bg-white px-8 py-3.5 text-base font-semibold text-[#2F2F2F] transition-all hover:bg-[#2F2F2F] hover:text-white"
            >
              Contact Us for Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}