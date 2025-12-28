import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function FinancingPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold text-[#2F2F2F]">Financing</h1>
        <p className="mt-4 text-[#8A8A8A]">
          We offer flexible financing options for builds and equipment. Contact us for details.
        </p>
      </main>
      <Footer />
    </>
  );
}
