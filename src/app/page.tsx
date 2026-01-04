import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Services from "@/components/services";
import FeaturedProjects from "@/components/featured-projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/loadingscreen";

export default function Home() {
  return (
    <>
        <LoadingScreen/>
      <Navbar />

      <Hero />
      <Products />
      <Services />
      <FeaturedProjects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
