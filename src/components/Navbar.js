import { useRef } from 'react'
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import './CSS/navbar.css'
import { Link } from 'react-router-dom'
import logo from '../img/logo white.png'
function Navbar({ scroll }) {
  const navRef = useRef()
  const [isScrolled, setIsScrolled] = useState(false)
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }
  useEffect(() => {
    if (scroll) {
      window.addEventListener('scroll', handleScroll)
    } else {
      window.removeEventListener('scroll', handleScroll)
    }

    return () => {
      if (scroll) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [scroll])

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0)
  }

  return scroll ? (
    <header
      className="header-nav"
      style={{
        backgroundColor: isScrolled ? '#ed7703' : 'transparent',
        position: 'fixed',
      }}
      id="header"
    >
      <div className="navbar">
        <Link to="/accueil">
          <img
            src={logo}
            className="logo"
            alt="Logo CFR - Solutions Énergétiques"
          />
        </Link>
        <nav className="navbar-ref" ref={navRef}>
          <Link to="/accueil">Accueil</Link>
          <Link to="/projet">Votre projet en 4 étapes</Link>
          <Link to="/qui-somme-nous">Qui sommes-nous ?</Link>
          <Link to="/contact">Contact</Link>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes aria-label="Fermer le menu de navigation" />
          </button>
        </nav>
        <div className="navbar-contact">
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <div className="navbar-contact-devis">
              Obtenir un devis ou un bilan énergétique gratuit
            </div>
          </Link>

          <a className="navbar-contact-phone" href="tel:0763626188">
            {' '}
            <BsTelephone aria-label="Numéro de téléphone" /> 07 63 62 61 88
          </a>
        </div>
      </div>
      <button
        className="nav-btn"
        aria-label="Ouvrir le menu de navigation"
        onClick={showNavbar}
      >
        <FaBars />
      </button>
    </header>
  ) : (
    <header
      className="header-nav"
      style={{
        backgroundColor: '#ed7703',
        position: 'relative',
      }}
    >
      <div className="navbar">
        <Link to="/accueil">
          <img
            src={logo}
            className="logo"
            alt="Logo CFR - Solutions Énergétiques"
          />
        </Link>
        <nav className="navbar-ref" ref={navRef}>
          <Link to="/accueil">Accueil</Link>
          <Link to="/projet">Votre projet en 4 étapes</Link>
          <Link to="/qui-somme-nous">Qui sommes-nous ?</Link>
          <Link to="/contact">Contact</Link>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes aria-label="Fermer le menu de navigation" />
          </button>
        </nav>
        <div className="navbar-contact">
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <div className="navbar-contact-devis">
              Obtenir un devis ou un bilan énergétique gratuit
            </div>
          </Link>
          <a className="navbar-contact-phone" href="tel:0763626188">
            {' '}
            <BsTelephone aria-label="Numéro de téléphone" /> 07 63 62 61 88
          </a>
        </div>
      </div>
      <button
        className="nav-btn"
        aria-label="Ouvrir le menu de navigation"
        onClick={showNavbar}
      >
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar
