import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import './CSS/popup.css'
import pub from '../img/pub.png'
import { Link } from 'react-router-dom'
const Popup = () => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 5000) // Affiche la popup après 5 secondes (5000 millisecondes)

    return () => clearTimeout(timer)
  }, [])

  const closePopup = () => {
    setShowPopup(false)
  }

  return showPopup ? (
    <div className="popup-container">
      <div className="popup-content">
        <button
          className="close-button"
          onClick={closePopup}
          aria-label="Close popup"
        >
          <FiX />
        </button>
        {/* Contenu de votre popup publicitaire */}
        <img src={pub} alt="Popup Publicitaire" className="popup-image" />
        <button className="interested-button">
          <Link
            to="/contact"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Ça m'intéresse
          </Link>
        </button>
      </div>
    </div>
  ) : null
}

export default Popup
