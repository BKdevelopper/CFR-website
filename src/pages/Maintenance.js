import React from 'react'
import './CSS/maintenance.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const Maintenance = () => {
  return (
    <>
      <Navbar scroll={false} />
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
