import React from 'react'
import './CSS/cookie.css'
import { useCookies } from 'react-cookie'
const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent'])
  const giveCookieConsent = () => {
    setCookie('cookieConsent', true, { path: '/' })
  }
  if (cookies.cookieConsent) {
    return null // Do not render anything
  }
  return (
    <div className="cookie-consent">
      <p>
        Nous utilisons des cookies pour améliorer votre expérience. En
        continuant, vous acceptez notre utilisation des cookies.
        <a href={'/mention-legal'}>En savoir plus.</a>
      </p>
      <button onClick={giveCookieConsent} aria-label="Accepter les cookies">
        Accepter
      </button>
    </div>
  )
}

export default CookieConsent
