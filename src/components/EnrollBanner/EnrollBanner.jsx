import notebook from "../../assets/images/notebook-graphic.png";
import "./EnrollBanner.css";

function EnrollBanner() {
  return (
    <section className="enroll">
      <div
        className="enroll__banner"
        style={{ "--enroll-bg": `url(${notebook})` }}>
        <div className="container enroll__content">
          <h2>Our Education like no other</h2>

          <button className="btn-outline">ENROLL</button>
        </div>
      </div>
    </section>
  );
}

export default EnrollBanner;
