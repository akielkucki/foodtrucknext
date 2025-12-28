import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold text-[#2F2F2F]">Request a Quote</h1>
        <p className="mt-4 text-[#8A8A8A]">
          Tell us about your project and we will get back to you with a tailored quote.
        </p>
      </main>
      <Footer />
    </>
  );
}
