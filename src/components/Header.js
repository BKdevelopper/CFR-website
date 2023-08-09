import { useRef } from 'react'
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import './CSS/header.css'
import { Link } from 'react-router-dom'
function Header() {
  const navRef = useRef()
  const [scrolled, setScrolled] = useState(false)
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav1')
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      className="header-nav1"
      style={{
        position: scrolled ? 'fixed' : 'relative',
      }}
    >
      <div className="navbar1">
        <img
          src="https://bkdevelopper.github.io/CFR-website/img/logo white.png"
          className="logo"
          alt=""
        />
        <nav ref={navRef}>
          <Link to="/acceuil">Accueil</Link>
          <Link to="/maintenance">Votre projet en 5 étapes</Link>
          <Link to="/maintenance">Blog</Link>
          <Link to="/maintenance">Contact</Link>

          <button className="nav-btn1 nav-close-btn1" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <div className="navbar-contact1">
          <div className="navbar-contact-devis1">
            Obtenir un devis ou un bilan énergétique gratuit
          </div>
          <a className="navbar-contact-phone1" href="tel:0763626188">
            {' '}
            <BsTelephone /> 07 63 62 61 88
          </a>
        </div>
      </div>
      <button className="nav-btn1" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Header
