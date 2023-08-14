import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CSS/contact.css'
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
    <>
      <Navbar scroll={true} />
      <div
        className="wallpaper"
        style={{
          backgroundImage: `url("https://bkdevelopper.github.io/CFR-website/img/contact.jpg")`,
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
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '1rem',
            borderRadius: '5px',
            width: '100%',
            textAlign: 'center',
            height: '100vh',
          }}
        >
          <h1>Contact</h1>
          <p>Vous avez un projet de construction ou de rénovation ?</p>
          <p>
            Vous souhaitez obtenir un devis ou un bilan énergétique gratuit ?
          </p>
          <p>Vous avez des questions ?</p>
          <p>N'hésitez pas à nous contacter !</p>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact
