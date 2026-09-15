import banner from '../../assets/images/contact-banner.jpg'
import './ContactBanner.css'

function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="container contact-banner__frame">
        <img src={banner} alt="Teacher pointing at a blackboard in a classroom" />
        <div className="contact-banner__overlay">
          <h2>Have questions or need assistance?</h2>
          <p>Together, let&rsquo;s embark on an exciting journey of education and exploration!</p>
          <button className="btn-outline btn-outline--light">Contact Us</button>
        </div>
      </div>

      <div className="contact-banner__divider">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#cfcfcf" strokeWidth="1">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 7v5l3 3" />
        </svg>
      </div>
    </section>
  )
}

export default ContactBanner
