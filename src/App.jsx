import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Stats from './components/Stats/Stats.jsx'
import EnrollBanner from './components/EnrollBanner/EnrollBanner.jsx'
import InquireMission from './components/InquireMission/InquireMission.jsx'
import QuickLinks from './components/QuickLinks/QuickLinks.jsx'
import ContactBanner from './components/ContactBanner/ContactBanner.jsx'
import DiscoverFurther from './components/DiscoverFurther/DiscoverFurther.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import InquireForm from './components/InquireForm/InquireForm.jsx'
import CTASection from './components/CTASection/CTASection.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Stats />
        <EnrollBanner />
        <InquireMission />
        <QuickLinks />
        <ContactBanner />
        <DiscoverFurther />
        <Testimonials />
        <InquireForm />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
