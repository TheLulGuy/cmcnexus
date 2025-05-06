import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Sponsors />
      {/* <HowItWorks /> */}
      {/* <Features /> */}
      <Services />
      {/* <ContactForm /> */}
      <Testimonials />
      <Team />
      <Pricing />
      
      {/* <Newsletter /> */}
      {/* <FAQ /> */}

      <Cta />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
