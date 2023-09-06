import React, { useState } from 'react'
import './CSS/contactform.css'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    token: '',
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    city: '',
    subject: '',
  })

  const [recaptchaError, setRecaptchaError] = useState('')
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [captchaValid, setCaptchaValid] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  function onChange(value) {
    //console.log('Captcha value:', value)
    setCaptchaValid(true)
    setFormData((prevState) => ({
      ...prevState,
      token: value,
    }))
  }
  const isValidEmail = (email) => {
    // Expression régulière pour valider l'adresse e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Clear previous errors
    setRecaptchaError('')
    setSubmitError('')

    try {
      if (!captchaValid) {
        setRecaptchaError('Veuillez valider le captcha.')
        return
      }
      if (
        !formData.first_name ||
        !formData.last_name ||
        !formData.email ||
        !formData.message
      ) {
        setSubmitError('Veuillez remplir tous les champs.')
        return
      }

      if (!isValidEmail(formData.email)) {
        setSubmitError('Veuillez entrer une adresse email valide.')
        return
      }
      if (formData.message.length > 1000) {
        setSubmitError('Veuillez entrer un message plus court.')
        return
      }

      if (formData.message.length < 10) {
        setSubmitError('Veuillez entrer un message plus long.')
        return
      }
      // Sending the form data to the server
      const response = await axios.post('https://moncfr.fr/api/mail', formData)

      if (response.status === 200) {
        setSubmitSuccess(true)
        setFormData({
          token: '',
          first_name: '',
          last_name: '',
          email: '',
          message: '',
          city: '',
          subject: '',
        })
      } else {
        setSubmitError('An error occurred while submitting the form.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError('An error occurred while submitting the form.')
    }
  }

  return (
    <>
      <div className="contact-form-container" id="contactform">
        <h2>Contact</h2>
      </div>
      {submitSuccess ? (
        <p>Nous vous remercions pour votre envoi !</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group-name">
            <div className="form-group-name-prenom">
              <label htmlFor="name" className="form-label">
                Prénom
              </label>
              <input
                type="text"
                name="first_name"
                id="name"
                className="form-input"
                value={formData.first_name}
                placeholder="Prénom"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-name-nom">
              <label htmlFor="surname" className="form-label">
                Nom
              </label>
              <input
                type="text"
                id="surname"
                name="last_name"
                className="form-input"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Nom"
                required
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
                name="city"
                className="form-input"
                value={formData.city}
                onChange={handleChange}
                placeholder="Ville"
                required
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
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                required
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
              name="subject"
              className="form-input"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Sujet"
              required
            />
          </div>
          <div className="form-group-message">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            ></textarea>
          </div>
          <ReCAPTCHA
            sitekey="6LeeiKwnAAAAABnT9ZWv4I-WQgTuQANATYUqNNZB"
            onChange={onChange}
          />
          {recaptchaError && <p style={{ color: 'red' }}>{recaptchaError}</p>}
          {submitError && <p style={{ color: 'red' }}>{submitError}</p>}
          <button type="submit" className="submit-button">
            Envoyer
          </button>
        </form>
      )}
    </>
  )
}

export default ContactForm
