import hero1 from "../../../../assets/images/hero-1.jpg";
import hero2 from "../../../../assets/images/hero-2.jpg";
import hero3 from "../../../../assets/images/hero-3.jpg";

import "./HeroGallery.css";

function HeroGallery() {
  return (
    <div className="hero-gallery">
      <img
        src={hero1}
        alt="Student writing at their desk"
        className="hero-gallery__img hero-gallery__img--wide"
      />

      <img
        src={hero2}
        alt="Bright classroom with rows of desks"
        className="hero-gallery__img"
      />

      <img
        src={hero3}
        alt="Decorated primary classroom"
        className="hero-gallery__img"
      />
    </div>
  );
}

export default HeroGallery;
