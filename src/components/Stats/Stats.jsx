import "./Stats.css";

const STATS = [
  { value: "1,954", label: "Year Founded" },
  { value: "934", label: "Certified Teachers" },
  { value: "65,409", label: "Graduated Students" },
  { value: "289", label: "Awards Winner" },
];

function Stats() {
  return (
    <section className="stats">
      <div className="container stats__inner">
        <div className="stats__left">
          <h2>At A Glance</h2>
          <p>Character development, and a love for learning.</p>

          <div className="stats__grid">
            {STATS.map((stat) => (
              <div className="stats__item" key={stat.label}>
                <span className="stats__value">{stat.value}</span>
                <span className="stats__label">{stat.label}</span>
              </div>
            ))}
            <span className="stats__connector" aria-hidden="true"></span>
          </div>
        </div>

        <div className="stats__right">
          <svg
            viewBox="0 0 60 30"
            width="60"
            height="30"
            className="stats__clouds"
            aria-hidden="true">
            <ellipse cx="14" cy="18" rx="13" ry="9" fill="#dfeef4" />
            <ellipse cx="30" cy="12" rx="15" ry="10" fill="#dfeef4" />
            <ellipse cx="46" cy="18" rx="12" ry="8" fill="#dfeef4" />
          </svg>
          <p className="stats__quote">
            &ldquo;Strive for Excellence, Inspire for Life&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
