import { useState } from "react";
import books from "../../assets/images/books-panel.png";
import arrow from "../../assets/images/arrow.png";
import "./InquireMission.css";

const MISSIONS = [
  {
    title: "Mission",
    text: "Our mission at The Yenopoya World is to inspire and",
  },
  {
    title: "Mission",
    text: "Our mission at The Yenopoya World is to inspire and",
  },
  {
    title: "Mission",
    text: "Our mission at The Yenopoya World is to inspire and",
  },
  {
    title: "Mission",
    text: "Our mission at The Yenopoya World is to inspire and",
  },
];

function InquireMission() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="inquire-mission">
      <div className="section-eyebrow">
        <h2>Inquire Today</h2>
        <p>Contact Us for More Information</p>
      </div>

      <div className="container inquire-mission__panel">
        <div
          className="inquire-mission__left"
          style={{ backgroundImage: `url(${books})` }}>
          <h3>Enriching Communities</h3>
          <p>
            Our mission at The Yenopoya World is to inspire and empower every
            student to achieve their full potential, become lifelong learners,
            and make positive contributions to society. We are
          </p>
          <button className="btn-outline">Learn More</button>
        </div>

        <ul className="inquire-mission__list">
          {MISSIONS.map((item, i) => (
            <li
              key={i}
              className={i === activeIndex ? "is-active" : ""}
              onClick={() => setActiveIndex(i)}>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
              {i === activeIndex && <img src={arrow} alt="" />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default InquireMission;
