import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { WhyWorkWithMe } from "./components/WhyWorkWithMe";
import { CreativeProcess } from "./components/CreativeProcess";
import { Testimonials } from "./components/Testimonials";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Hero />
      <Services />
      <Portfolio />
      <WhyWorkWithMe />
      <CreativeProcess />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
