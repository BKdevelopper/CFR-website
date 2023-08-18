import React, { useState, useRef } from 'react'
import './CSS/contactform.css'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    city: '',
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    subject: '',
    token: '',
  })
  const [captchaValid, setCaptchaValid] = useState(false)
  const emailRef = useRef(null)
  const [formErrors, setFormErrors] = useState({
    email: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  function isValidEmail(email) {
    // Vérification basique avec une expression régulière pour la structure de l'e-mail
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/
    return emailRegex.test(email)
  }
  function onChange(value) {
    console.log('Captcha value:', value)
    setCaptchaValid(true)
    setFormData((prevState) => ({
      ...prevState,
      token: value,
    }))
  }
  const validateFormData = () => {
    const errors = {
      email: isValidEmail(formData.email) ? '' : 'Email is not valid',
    }
    setFormErrors(errors)
    const isFormDataValid = Object.values(errors).every((error) => error === '')
    setCaptchaValid(isFormDataValid && captchaValid) // Update captchaValid here
    return isFormDataValid && captchaValid
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateFormData()) {
      console.log('Form data is not valid')
      return
    }
    try {
      const response = await axios.post('https://moncfr.fr/api/mail', formData)

      if (response.data && response.data.success) {
        console.log('Email sent successfully')
        // If you want to utilize the ref for some post-submit logic, you can:
        // Clear form fields after successful submission
        setFormData({
          city: '',
          first_name: '',
          last_name: '',
          email: '',
          message: '',
          subject: '',
          token: '',
        })
        // Reset CAPTCHA validation status
        setCaptchaValid(false)
      } else {
        console.error('Error sending email', response.data)
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
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
              name="first_name"
              id="name"
              className="form-input"
              value={formData.first_name}
              placeholder="Prénom"
              onChange={handleChange}
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
              ref={emailRef}
            />
            {formErrors.email && (
              <p className="error-message">{formErrors.email}</p>
            )}
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
