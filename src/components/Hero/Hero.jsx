import "./Hero.css";

import HeroGallery from "./components/HeroGallery/HeroGallery";
import HeroIntro from "./components/HeroIntro/HeroIntro";
import HeroStrip from "./components/HeroStrip/HeroStrip";

function Hero() {
  return (
    <section className="hero" id="top">
      <HeroGallery />
      <HeroIntro />
      <HeroStrip />
    </section>
  );
}

export default Hero;
