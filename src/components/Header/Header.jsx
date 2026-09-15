import { useState } from 'react'
import logo from '../../assets/images/logo.png'
import './Header.css'

const NAV_LINKS = ['About Us', 'Our Space', 'Curriculum', 'Admissions', 'Contact Us']

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__topbar">
        <div className="container">
          <span>yenopoyaworld@email.com</span>
        </div>
      </div>

      <div className="header__main">
        <div className="container header__main-inner">
          <a href="#top" className="header__logo">
            <img src={logo} alt="The Yenopoya World" />
          </a>

          <nav className={`header__nav ${isMenuOpen ? 'is-open' : ''}`}>
            <ul>
              {NAV_LINKS.map((link, i) => (
                <li key={link}>
                  <a
                    href="#top"
                    className={i === 0 ? 'is-active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={`header__toggle ${isMenuOpen ? 'is-open' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <button
          type="button"
          className="header__scrim"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Header
