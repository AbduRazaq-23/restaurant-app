import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Reservation from "../components/Reservation";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <ScrollReveal>
        <div id="menu">
          <Menu />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="reservation">
          <Reservation />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="reviews">
          <Reviews />
        </div>
      </ScrollReveal>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
