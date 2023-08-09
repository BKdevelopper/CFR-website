import React from 'react'
import './CSS/maintenance.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Maintenance = () => {
  return (
    <>
      <Header />
      <div className="construction-message">
        <h2>Page en Cours de Construction</h2>
        <p>Nous travaillons dur pour vous apporter du contenu intéressant.</p>
        <p>Revenez bientôt pour découvrir les nouveautés!</p>
      </div>
      <Footer />
    </>
  )
}

export default Maintenance
