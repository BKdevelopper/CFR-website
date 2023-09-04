import React from 'react'
import { FiMail, FiPhone, FiMapPin, FiFacebook } from 'react-icons/fi'
import './CSS/footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container-section">
        <div className="information-section">
          <h3>Information</h3>
          <ul>
            <li>
              <Link to="/solaire">Photovoltaïque</Link>
            </li>
            <li>
              <Link to="/isolation">Isolation</Link>
            </li>
            <li>
              <Link to="/climatisation">Climatisation</Link>
            </li>
            <li>
              <Link to="/thermodynamique">Ballon thermodynamique</Link>
            </li>
            <li>
              <Link to="/pompe-a-chaleur">Pompe à chaleur</Link>
            </li>
          </ul>
        </div>

        <div className="contact-section">
          <h3>Contact</h3>
          <ul>
            <li>
              <FiMail />
              <a href="mailto:contact@moncfr.fr">contact@moncfr.fr</a>
            </li>
            <li>
              <FiPhone />
              <a href="tel:+763626188">07 63 62 61 88</a>
            </li>
            <li>
              <FiMapPin />
              <p>7, Boulevard Aristide briand, 14000 Caen</p>
            </li>
          </ul>
        </div>

        <div className="social-section">
          <h3>Nous suivre</h3>
          <p>
            Et pour plus d’informations,
            <br /> vous pouvez nous suivre sur nos réseaux sociaux !
          </p>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61550349755738"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez-nous sur Facebook"
              >
                <FiFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="legal-section">
        <p>
          &copy; {new Date().getFullYear()} CFR -{' '}
          <Link className="link-mention" to="/mention-legal">
            Mentions légales
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
