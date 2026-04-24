// app/page.tsx
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Events from "./components/Events";
import Partners from "./components/Partners";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Events />
      <Partners />
      <Newsletter />
      <Footer />
    </>
  );
}