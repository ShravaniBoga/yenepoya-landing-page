import logo from '../../assets/images/logo.png'
import './CTASection.css'

function CTASection() {
  return (
    <section className="cta">
      <div className="cta__logo">
        <img src={logo} alt="The Yenopoya World" />
      </div>

      <div className="cta__band">
        <h2>The Yenopoya World</h2>
        <p>
          Our dedicated team of educators is committed to providing a supportive and
          stimulating environment
        </p>
        <button className="btn-outline btn-outline--light">Contact Us</button>
      </div>
    </section>
  )
}

export default CTASection
