import "./App.css";
import { Link } from "react-scroll";
import Navbar from "./components/navbar";
import Hero from "./components/hero.js";
import Pricing from "./components/pricing.js";
import About from "./components/about.js";
import Feature from "./components/feature.js";
import Team from "./components/team.js";
import Faq from "./components/faq.js";
import Testimonials from "./components/Testimonials.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-[#cd9ffa] to-[#FF9933]">
        <Hero />
      </div>
      <About />
      <Feature />
      {/* <Team /> */}
      <Faq />
      {/* <Testimonials /> */}
      <Pricing />
      <Footer />

      <Link
        to="AnaSayfa"
        spy={false}
        smooth={true}
        offset={0}
        duration={500}
        id="sticky-banner"
        class="fixed bottom-0 right-0 z-9999 flex justify-between mr-4 animate-bounce p-3 cursor-pointer hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110 bg-transparent "
      >
        <svg
          className="rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </Link>
    </>
  );
}

export default App;
