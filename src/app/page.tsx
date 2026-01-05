import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import FeaturedProjects from "@/components/featured-projects";
import FeaturedProducts from "@/components/featured-products";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/loadingscreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <Hero />
      <Services />
      <FeaturedProjects />
      <FeaturedProducts />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
