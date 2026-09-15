// HeroIntro.jsx
import "./HeroIntro.css";

const SOCIAL_ICONS = [
  {
    name: "Facebook",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  },
  {
    name: "Instagram",
    path: "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.78.22 2.42.46.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.24.64.41 1.36.46 2.42.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.78-.46 2.42a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.24-1.36.41-2.42.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.78-.22-2.42-.46a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.24-.64-.41-1.36-.46-2.42C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.78.46-2.42.26-.66.6-1.21 1.15-1.76.5-.5 1.1-.9 1.76-1.15.64-.24 1.36-.41 2.42-.46C8.94 2.01 9.28 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.17 1.17 0 1 1-2.34 0 1.17 1.17 0 0 1 2.34 0Z",
  },
  {
    name: "YouTube",
    path: "M23.5 6.5s-.23-1.64-.94-2.36c-.9-.95-1.9-.95-2.36-1.01C16.9 2.8 12 2.8 12 2.8h-.01s-4.9 0-8.2.33c-.46.06-1.46.06-2.36 1.01-.71.72-.94 2.36-.94 2.36S.2 8.42.2 10.35v1.82c0 1.93.23 3.85.23 3.85s.23 1.64.94 2.36c.9.95 2.08.92 2.6 1.02 1.9.19 8.06.32 8.06.32s4.9-.01 8.2-.33c.46-.06 1.46-.06 2.36-1.01.71-.72.94-2.36.94-2.36s.23-1.93.23-3.85v-1.82c0-1.93-.23-3.85-.23-3.85ZM9.6 14.6V7.9l6.4 3.35-6.4 3.35Z",
  },
];

function HeroIntro() {
  return (
    <div className="hero-intro">
      {/* horizontal top line */}
      <span
        className="hero-intro__accent hero-intro__accent--left"
        aria-hidden="true"
      />

      {/* vertical line — stretches from top:44px down to the bottom edge of
          .hero-intro (i.e. exactly where HeroStrip begins). Never crosses
          into the image strip. */}
      <span
        className="hero-intro__accent-vert hero-intro__accent-vert--left"
        aria-hidden="true"
      />

      <span
        className="hero-intro__accent hero-intro__accent--right"
        aria-hidden="true"
      />

      <div className="container hero-intro__inner">
        <div className="hero-intro__text">
          <h1>The Yenopoya World</h1>

          <p>
            A supportive and stimulating environment that fosters academic
            excellence, character development, and a love for learning.
          </p>
        </div>

        <div className="hero-intro__social">
          {SOCIAL_ICONS.map((icon) => (
            <a href="#top" key={icon.name} aria-label={icon.name}>
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true">
                <path d={icon.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroIntro;
