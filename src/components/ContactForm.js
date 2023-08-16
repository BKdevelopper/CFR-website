import React, { useState } from 'react'
import './CSS/contactform.css'
import ReCAPTCHA from 'react-google-recaptcha'
const ContactForm = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Envoyer les données du formulaire vers un point d'API
  }
  function onChange(value) {
    console.log('Captcha value:', value)
  }

  return (
    <>
      <div className="contact-form-container" id="contactform">
        Contact
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group-name">
          <div className="form-group-name-prenom">
            <label htmlFor="name" className="form-label">
              Prénom
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group-name-nom">
            <label htmlFor="surname" className="form-label">
              Nom
            </label>
            <input
              type="text"
              id="surname"
              className="form-input"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group-info">
          <div className="form-group-info-city">
            <label htmlFor="city" className="form-label">
              Ville
            </label>
            <input
              type="text"
              id="city"
              className="form-input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="form-group-info-email">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group-subject">
          <label htmlFor="subject" className="form-label">
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            className="form-input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-group-message">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            className="form-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <ReCAPTCHA
          sitekey="6LeeiKwnAAAAABnT9ZWv4I-WQgTuQANATYUqNNZB"
          onChange={onChange}
        />
        <button type="submit" className="submit-button">
          Envoyer
        </button>
      </form>
    </>
  )
}

export default ContactForm
