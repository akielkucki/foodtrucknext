import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ui/form";

export default function Hero() {
  return (
    <>
      <section className="relative w-full bg-white">
        {/* Hero Image Section */}
        <div className="relative h-[500px] w-full overflow-hidden bg-[#EDEDED] sm:h-[600px]">
          {/* Placeholder for hero image - replace with actual image */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#8A8A8A]/20 to-[#8A8A8A]/10">
            <div className="text-center text-[#8A8A8A]">
              {/* Replace this div with actual Image component when you have the photo */}
              <Image src={"/heroalt.jpg"} alt={"Hero Image"} fill className={"object-cover"}/>
              <p className="mt-2 text-sm">Food truck parts image placeholder</p>
            </div>
          </div>

          {/* Overlay content - positioned on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent">
            <div className="mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Custom Food Trucks Built to Your Vision{" "}
                  <span className="text-[#F5A623]">Since 1999</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-white/90 sm:text-xl">
                  From concept to the street, we design and build custom food trucks that bring your culinary business to life.
                </p>

                {/* Quick CTAs */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
                  <Link
                    href="/custom-builds"
                    className="rounded-lg bg-[#D6452F] px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg transition-all hover:bg-[#952d1d] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6452F]"
                  >
                    View Our Builds
                  </Link>
                  <Link
                    href="/quote"
                    className="rounded-lg border-2 border-white bg-white/10 px-8 py-3.5 text-center text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    Start Your Build
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - absolutely positioned on the right */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[400px] max-w-[90vw] hidden lg:block">
            <ContactForm/>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <Benefits/>
    </>
  );
}
function Benefits() {
  return <div className="w-full px-6 py-16 lg:px-8 lg:py-24 bg-white">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Benefit 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EDEDED]">
            <svg className="h-8 w-8 text-[#D6452F]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-[#2F2F2F]">
            Custom Designs
          </h3>
          <p className="text-sm text-[#8A8A8A]">
            Fully customized layouts tailored to your menu and workflow
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EDEDED]">
            <svg className="h-8 w-8 text-[#F5A623]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-[#2F2F2F]">
            Turnkey Solutions
          </h3>
          <p className="text-sm text-[#8A8A8A]">
            From concept to completion, we handle every detail of your build
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EDEDED]">
            <svg className="h-8 w-8 text-[#D6452F]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-[#2F2F2F]">
            Expert Builders
          </h3>
          <p className="text-sm text-[#8A8A8A]">
            Experienced team with expertise in mobile kitchen construction
          </p>
        </div>

        {/* Benefit 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EDEDED]">
            <svg className="h-8 w-8 text-[#F5A623]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-[#2F2F2F]">
            Building Since 1999
          </h3>
          <p className="text-sm text-[#8A8A8A]">
            25+ years of experience building custom food trucks
          </p>
        </div>
      </div>
    </div>
}