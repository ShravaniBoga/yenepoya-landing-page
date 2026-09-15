import strip from "../../assets/images/testimonial-strip.jpg";
import chat from "../../assets/images/chat.png";

import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__visual">
        <img
          src={strip}
          alt="Children at school"
          className="testimonials__image"
        />
      </div>

      <div className="testimonials__heading">
        <div className="testimonials__heading-icon" aria-hidden="true">
          <img src={chat} alt="Chat icon" />
        </div>

        <h2>Testimonials</h2>
        <p>Contact Us for More Information</p>
      </div>

      <div className="testimonials__quote">
        <span className="testimonials__mark" aria-hidden="true">
          “
        </span>

        <p className="testimonials__author">- Anonymous</p>

        <p className="testimonials__text">
          “My child&rsquo;s physical and mental fitness has improved in the last
          few years. His grades have improved and his concentration power has
          increased. He also looks happier and more confident now. I must thank
          St. Michael&rsquo;s School for focusing on a holistic development of
          children.”
        </p>
      </div>
    </section>
  );
}

export default Testimonials;
