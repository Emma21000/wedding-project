import { hero } from "../../data/hero";
import { portfolioData } from "../../data/portfolioSec";
import Hero from "./components/Hero";
import PortfolioSec from "./components/PortfolioSec";

export default function Home() {
              
  return (
    <div>
      <Hero data={hero}/>
      <PortfolioSec data={portfolioData} />
    </div>
  );
}

 