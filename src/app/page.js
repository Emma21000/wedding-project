import { about } from "../../data/about";
import { hero } from "../../data/hero";
import { portfolioData } from "../../data/portfolioSec";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import PortfolioSec from "./components/PortfolioSec";

export default function Home() {
              
  return (
    <div>
      <Hero data={hero}/>
      <PortfolioSec data={portfolioData} />
      <About data={about} />
      <Contact />
    </div>
  );
}

 