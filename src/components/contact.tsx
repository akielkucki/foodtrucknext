import Link from "next/link";

const faqs = [
  {
    question: "What are your shipping options?",
    answer:
      "We offer standard ground shipping (5-7 business days), expedited shipping (2-3 business days), and next-day delivery for urgent orders. Free shipping on orders over $500.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase for unused items in original packaging. Custom orders and electrical components may have different return terms.",
  },
  {
    question: "Do you offer warranties?",
    answer:
      "All new parts come with manufacturer warranties. We also offer extended warranty options on select equipment. Installation services include a 90-day labor warranty.",
  },
  {
    question: "Can you source hard-to-find parts?",
    answer:
      "Yes! Our extensive network of suppliers allows us to locate most parts, even discontinued items. Contact us with your part number or equipment details.",
  },
];

const contactInfo = [
  {
    title: "Address",
    details: ["123 Industrial Parkway", "Suite 100", "Houston, TX 77001"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Phone",
    details: ["Sales: (800) 555-0123", "Support: (800) 555-0124"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: "Email",
    details: ["sales@foodtruckparts.com", "support@foodtruckparts.com"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Hours",
    details: ["Mon-Fri: 7am - 6pm CST", "Sat: 8am - 2pm CST", "Sun: Closed"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section className="bg-[#EDEDED] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#2F2F2F] sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-[#8A8A8A]">
            Have questions or need a quote? We're here to help.
          </p>
        </div>

        {/* Contact Form + Info Grid */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-[#2F2F2F]">
              Request a Quote
            </h3>
            <p className="mt-2 text-sm text-[#8A8A8A]">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form className="mt-6 space-y-5">
              {/* Name & Email Row */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2F2F2F]">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-lg border border-[#8A8A8A]/30 bg-white px-4 py-2.5 text-[#2F2F2F] placeholder:text-[#8A8A8A]/50 focus:border-[#D6452F] focus:outline-none focus:ring-1 focus:ring-[#D6452F]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2F2F2F]">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-lg border border-[#8A8A8A]/30 bg-white px-4 py-2.5 text-[#2F2F2F] placeholder:text-[#8A8A8A]/50 focus:border-[#D6452F] focus:outline-none focus:ring-1 focus:ring-[#D6452F]"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Phone & Role Row */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2F2F2F]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full rounded-lg border border-[#8A8A8A]/30 bg-white px-4 py-2.5 text-[#2F2F2F] placeholder:text-[#8A8A8A]/50 focus:border-[#D6452F] focus:outline-none focus:ring-1 focus:ring-[#D6452F]"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-[#2F2F2F]">
                    Your Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="mt-1 block w-full rounded-lg border border-[#8A8A8A]/30 bg-white px-4 py-2.5 text-[#2F2F2F] focus:border-[#D6452F] focus:outline-none focus:ring-1 focus:ring-[#D6452F]"
                  >
                    <option value="">Select...</option>
                    <option value="owner">Food Truck Owner</option>
                    <option value="manager">Fleet Manager</option>
                    <option value="operator">Operator</option>
                    <option value="builder">Truck Builder</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Truck Type */}
              <div>
                <label htmlFor="truck-type" className="block text-sm font-medium text-[#2F2F2F]">
                  Truck Type / Model
                </label>
                <input
                  type="text"
                  id="truck-type"
                  name="truck-type"
                  className="mt-1 block w-full rounded-lg border border-[#8A8A8A]/30 bg-white px-4 py-2.5 text-[#2F2F2F] placeholder:text-[#8A8A8A]/50 focus:border-[#D6452F] focus:outline-none focus:ring-1 focus:ring-[#D6452F]"
                  placeholder="e.g., Ford E-450, Chevy P30, Custom trailer"
                />
              </div>

              {/* Part Needed */}
              <div>
                <label htmlFor="part-needed" className="block text-sm font-medium text-[#2F2F2F]">
                  Part Needed / Service Request
                </label>
                <input
                  type="text"
                  id="part-needed"
                  name="part-needed"
                  className="mt-1 block w-full rounded-lg border border-[#8A8A8A]/30 bg-white px-4 py-2.5 text-[#2F2F2F] placeholder:text-[#8A8A8A]/50 focus:border-[#D6452F] focus:outline-none focus:ring-1 focus:ring-[#D6452F]"
                  placeholder="Part number, name, or describe what you need"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2F2F2F]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-[#8A8A8A]/30 bg-white px-4 py-2.5 text-[#2F2F2F] placeholder:text-[#8A8A8A]/50 focus:border-[#D6452F] focus:outline-none focus:ring-1 focus:ring-[#D6452F]"
                  placeholder="Additional details, timeline, budget, etc."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#D6452F] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#D6452F]/90 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6452F]"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col gap-8">
            {/* Contact Info Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D6452F]/10 text-[#D6452F]">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-[#2F2F2F]">{item.title}</h4>
                  </div>
                  <div className="mt-3 space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-[#8A8A8A]">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="flex-1 overflow-hidden rounded-xl bg-white shadow-sm">
              <div className="relative h-full min-h-[250px] bg-[#8A8A8A]/10">
                <div className="flex h-full flex-col items-center justify-center text-[#8A8A8A]/50">
                  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <span className="mt-2 text-sm">Map placeholder</span>
                  <span className="text-xs">Embed Google Maps here</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#2F2F2F] sm:text-3xl">
              Frequently Asked Questions
            </h3>
            <p className="mt-2 text-[#8A8A8A]">
              Quick answers to common questions
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <h4 className="font-semibold text-[#2F2F2F]">{faq.question}</h4>
                <p className="mt-2 text-sm text-[#8A8A8A]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alternative Contact CTA */}
        <div className="mt-16 rounded-2xl bg-[#2F2F2F] p-8 text-center sm:p-12">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Prefer to talk to someone?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Our sales team is available Monday through Saturday to answer questions and help you find exactly what you need.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+18005550123"
              className="inline-flex items-center gap-2 rounded-lg bg-[#D6452F] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#D6452F]/90 hover:shadow-xl"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call (800) 555-0123
            </a>
            <a
              href="mailto:sales@foodtruckparts.com"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white hover:text-[#2F2F2F]"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}