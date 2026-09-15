// HeroStrip.jsx
import strip1 from "../../../../assets/images/strip-1.jpg";
import strip2 from "../../../../assets/images/strip-2.jpg";
import strip3 from "../../../../assets/images/strip-3.jpg";
import strip4 from "../../../../assets/images/strip-4.jpg";
import strip5 from "../../../../assets/images/strip-5.jpg";
import strip6 from "../../../../assets/images/strip-6.jpg";

import "./HeroStrip.css";

const STRIP_IMAGES = [strip1, strip2, strip3, strip4, strip5, strip6];

function HeroStrip() {
  return (
    <div className="hero-strip">
      {STRIP_IMAGES.map((src, i) => (
        <img
          src={src}
          alt=""
          key={i}
          className={`hero-strip__image hero-strip__image--${i + 1}`}
        />
      ))}

      {/* Picks the line back up below the strip and carries it toward
          the "At A Glance" stats card. Height values below are placeholders
          measured from the screenshot — tune per breakpoint once you can
          see the real distance to the stats card, same way you're tuning
          .stats__quote with bottom/left. */}
      <span className="hero-strip__accent-vert" aria-hidden="true" />
    </div>
  );
}

export default HeroStrip;
