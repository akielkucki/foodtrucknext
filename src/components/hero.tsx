import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ui/form";

export default function Hero() {
  return (
      <>
        <section className="relative w-full overflow-hidden bg-slate-900">
          {/* Background Image with Parallax-like feel */}
          <div className="absolute inset-0 h-full w-full">
            <Image
                src="/hero.webp" // Ensure this path is correct
                alt="Custom Food Truck Build"
                fill
                priority
                className="object-cover object-center opacity-90"
                // If you don't have the image yet, this placeholder shows:
                style={{ backgroundColor: "#1a1a1a" }}
            />
            {/* Professional Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 xl:py-40">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">

              {/* Left Column: Text Content */}
              <div className="flex flex-col justify-center lg:col-span-7">
                {/* Trust Badge */}
                <div className="mb-6 inline-flex w-fit items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 backdrop-blur-sm">
                  <span className="mr-2 h-2 w-2 rounded-full bg-red-500 animate-pulse shadow-lg shadow-red-500/50"></span>
                  Building Excellence Since 1999
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:leading-[1.1]">
                  We Build The Kitchens <br className="hidden lg:block" />
                  That Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Your Business.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  From concept sketches to the opening day, we design custom food trucks engineered for workflow, durability, and health code compliance.
                </p>

                {/* CTAs */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
                  <Link
                      href="/custom-builds"
                      className="group relative flex items-center justify-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-red-600/30 transition-all hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5"
                  >
                    View Our Builds
                    {/* Simple arrow SVG if not using Lucide */}
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <Link
                      href="/quote"
                      className="flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50"
                  >
                    Start Your Build
                  </Link>
                </div>

                {/* Mini Social Proof */}
                <div className="mt-10 flex items-center gap-4 text-sm text-slate-400">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-8 w-8 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-xs text-white">
                          {/* Placeholder for user avatars */}
                          <span className="opacity-50">Use</span>
                        </div>
                    ))}
                  </div>
                  <p>Trusted by <span className="font-semibold text-white">500+</span> Mobile Vendors</p>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              {/* Hidden on small mobile, visible on lg screens.
                Using a grid ensures it doesn't overlap text on medium screens. */}
              <div className="hidden lg:col-span-5 lg:block">
                <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900/60 p-1 backdrop-blur-xl shadow-2xl shadow-red-900/20">
                  <div className="rounded-xl bg-slate-800/50 p-6 md:p-8 border border-slate-700/30">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white">Get a Free Quote</h3>
                      <p className="text-sm text-slate-300">Tell us about your project timeline.</p>
                    </div>
                    {/* Your Form Component */}
                    <ContactForm />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <Benefits />
      </>
  );
}

function Benefits() {
  const benefits = [
    {
      title: "Custom Designs",
      description: "Fully customized layouts tailored to your menu, equipment needs, and workflow efficiency.",
      color: "text-red-600",
      bgColor: "bg-red-50",
      icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
          </svg>
      )
    },
    {
      title: "Turnkey Solutions",
      description: "We handle it all: sourcing the truck, fabrication, plumbing, electric, and graphic wraps.",
      color: "text-red-600",
      bgColor: "bg-red-50",
      icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
      )
    },
    {
      title: "Expert Builders",
      description: "Our certified team specializes in mobile kitchen codes, ensuring you pass inspection first try.",
      color: "text-red-600",
      bgColor: "bg-red-50",
      icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
          </svg>
      )
    },
    {
      title: "Building Since 1999",
      description: "25+ years of fabrication experience means your investment is built to last on the road.",
      color: "text-red-600",
      bgColor: "bg-red-50",
      icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
      )
    }
  ];

  return (
      <section className="w-full bg-gradient-to-b from-white to-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why Choose Us?</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We don't just build trucks; we build compliant, efficient, and profitable mobile businesses.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-4 lg:gap-8">
            {benefits.map((benefit, index) => (
                <div
                    key={index}
                    className="group relative flex flex-col items-start overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-red-200 hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1"
                >
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${benefit.bgColor} ${benefit.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-600/20`}>
                    {benefit.icon}
                  </div>

                  <h3 className="mb-3 text-lg font-bold leading-7 text-slate-900 transition-colors group-hover:text-red-600">
                    {benefit.title}
                  </h3>
                  <p className="text-base leading-7 text-slate-600">
                    {benefit.description}
                  </p>

                  {/* Decorative accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-red-500 transition-all duration-300 group-hover:w-full" />
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}