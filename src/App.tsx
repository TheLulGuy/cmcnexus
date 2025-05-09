import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Testimonials } from "./components/Testimonials";
import "./App.css";
import { Slide } from "react-awesome-reveal";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <Slide direction="up" triggerOnce>
        <About />
      </Slide>

      <Slide direction="right" triggerOnce delay={100}>
        <Sponsors />
      </Slide>

      <Slide direction="left" triggerOnce delay={200}>
        <Services />
      </Slide>

      <Slide direction="up" triggerOnce delay={300}>
        <Testimonials />
      </Slide>

      <Slide direction="up" triggerOnce delay={400}>
        <Pricing />
      </Slide>

      <Slide direction="right" triggerOnce delay={500}>
        <Cta />
      </Slide>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;