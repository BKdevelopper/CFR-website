import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './CSS/nopage.css'
import { Link } from 'react-router-dom'
const NoPage = () => {
  return (
    <>
      <Header />
      <div className="not-found">
        <h2 className="not-found-title">404 - Page Introuvable</h2>
        <p className="not-found-text">
          Oups! La page que vous recherchez semble avoir été égarée.
        </p>
        <p className="not-found-text">
          Peut-être pouvez-vous retourner à{' '}
          <Link to="/acceuil">la page d'accueil</Link>?
        </p>
      </div>
      <Footer />
    </>
  )
}
export default NoPage
