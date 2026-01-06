import Link from "next/link";
import { contactInfo, faqs } from "@/lib/utils";

const contactCards = [
  {
    title: "Address",
    details: [contactInfo.address.street, `${contactInfo.address.city} ${contactInfo.address.state}`],
    icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
    ),
  },
  {
    title: "Phone",
    details: [`Sales: ${contactInfo.phone.sales}`],
    icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
    ),
  },
  {
    title: "Email",
    details: [contactInfo.email.sales, contactInfo.email.support],
    icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
    ),
  },
  {
    title: "Hours",
    details: [contactInfo.hours.weekdays],
    icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
  },
];

export default function Contact() {
  return (
      <section className="bg-slate-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Main Content Grid: Text Left, Form Right */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left Side: Headline & Text */}
            <div className="flex flex-col justify-center">
              {/* Trust Badge */}
              <div className="mb-6 inline-flex w-fit items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 backdrop-blur-sm">
                <span className="mr-2 h-2 w-2 rounded-full bg-red-500 animate-pulse shadow-lg shadow-red-500/50"></span>
                Building Excellence Since 1999
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:leading-[1.1]">
                We Build The Kitchens <br className="hidden lg:block" />
                That Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Your Business.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                From concept sketches to the opening day, we design custom food trucks engineered for workflow, durability, and health code compliance.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Link
                    href="/custom-builds"
                    className="group relative flex items-center justify-center gap-2 rounded-lg bg-red-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-red-600/30 transition-all hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5"
                >
                  View Our Builds
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                    href="/quote"
                    className="flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50"
                >
                  Start Your Build
                </Link>
              </div>

              {/* Mini Social Proof */}
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-xs text-white">
                        <span className="opacity-50">Use</span>
                      </div>
                  ))}
                </div>
                <p>Trusted by <span className="font-semibold text-white">500+</span> Mobile Vendors</p>
              </div>
            </div>

            {/* Right Side: The Contact Form Card */}
            <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900/60 p-1 backdrop-blur-xl shadow-2xl shadow-red-900/20 lg:ml-auto lg:w-full lg:max-w-md">
              <div className="rounded-xl bg-slate-800/50 p-6 md:p-8 border border-slate-700/30">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">Get a Free Quote</h3>
                  <p className="text-sm text-slate-300">Tell us about your project timeline.</p>
                </div>

                <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-slate-900">Contact Us</h4>

                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase text-slate-600">
                        Name *
                      </label>
                      <input
                          type="text"
                          id="name"
                          className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase text-slate-600">
                        Email *
                      </label>
                      <input
                          type="email"
                          id="email"
                          className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="help" className="block text-xs font-semibold uppercase text-slate-600">
                        How Can We Help You? *
                      </label>
                      <select
                          id="help"
                          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                      >
                        <option>Custom Build Quote</option>
                        <option>Parts Inquiry</option>
                        <option>General Question</option>
                      </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-red-600 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      Submit Form
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-20 h-px w-full bg-white/10" />

          {/* Contact Info Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 hover:bg-slate-800 hover:border-red-600/30 transition-all hover:shadow-lg hover:shadow-red-600/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/20 text-red-500">
                    {item.icon}
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-white">{item.title}</h4>
                  <div className="mt-2 space-y-1">
                    {item.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-slate-300">
                          {detail}
                        </p>
                    ))}
                  </div>
                </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="mt-24">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Frequently Asked Questions
              </h3>
              <p className="mt-2 text-slate-300">
                Quick answers to common questions
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {faqs.map((faq) => (
                  <div
                      key={faq.question}
                      className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 hover:bg-slate-800 hover:border-red-600/30 transition-all hover:shadow-lg hover:shadow-red-600/10"
                  >
                    <h4 className="font-bold text-white">{faq.question}</h4>
                    <p className="mt-2 text-sm text-slate-300">{faq.answer}</p>
                  </div>
              ))}
            </div>
          </div>

        </div>
      </section>
  );
}