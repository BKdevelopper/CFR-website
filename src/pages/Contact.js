import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CSS/contact.css'
import ContactForm from '../components/ContactForm'
import galery1 from '../img/galery1.jpg'
import CookieConsent from '../components/CookieConsent'
import { useCookies } from 'react-cookie'
const Contact = () => {
  const [cookies] = useCookies(['cookieConsent'])
  const handleClick = () => {
    window.scrollTo({
      top: document.querySelector('#contactform').offsetTop,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <Navbar scroll={true} aria-label="Menu de navigation" />
      <div
        className="wallpaper"
        style={{
          backgroundImage: `url("${galery1}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100%',
          position: 'relative',
        }}
      >
        <div
          className="wallpaper-text"
          style={{
            color: 'white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '1rem',
            borderRadius: '5px',
            width: '100%',
            textAlign: 'center',
            height: '300px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            fontFamily: 'Arial',
          }}
          aria-label="Informations de contact"
        >
          <p>Vous souhaitez obtenir un devis</p>
          <p>ou</p>
          <p>un bilan énergétique gratuit ?</p>
          <p>Vous avez des questions ?</p>
          <button
            id="contact-btn"
            className="wallpaper-btn"
            style={{
              backgroundColor: 'white',
              color: 'black',
              padding: '1rem',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
              fontFamily: 'Arial',
            }}
            onClick={handleClick}
            aria-label="Contactez-nous"
          >
            Contactez-nous !
          </button>
        </div>
      </div>
      <ContactForm aria-label="Formulaire de contact" />
      {!cookies.cookieConsent && <CookieConsent />}
      <Footer aria-label="Pied de page" />
    </>
  )
}

export default Contact
