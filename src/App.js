import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Mention from './pages/mention'
import NoPage from './pages/NoPage'
import Maintenance from './pages/Maintenance'
import Contact from './pages/Contact'
import About from './pages/About'
import Project from './pages/Project'
import Solar from './pages/Solar'
import Climatisation from './pages/Climatisation'
import Thermodynamique from './pages/Thermodynamique'
import Pompe from './pages/Pompe'
import Isolation from './pages/Isolation'

export default function App() {
  // Vérifier si le protocole est HTTPS
  const isHttps = window.location.protocol === 'https:'

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {isHttps ? (
            <>
              <Route index element={<Accueil />} />
              <Route path="/" element={<Accueil />} />
              <Route path="/accueil" element={<Accueil />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/qui-somme-nous" element={<About />} />
              <Route path="/mention-legal" element={<Mention />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/projet" element={<Project />} />
              <Route path="/solaire" element={<Solar />} />
              <Route path="/climatisation" element={<Climatisation />} />
              <Route path="/thermodynamique" element={<Thermodynamique />} />
              <Route path="/pompe-a-chaleur" element={<Pompe />} />
              <Route path="/isolation" element={<Isolation />} />
              <Route path="*" element={<NoPage />} />
            </>
          ) : (
            // Rediriger vers HTTPS
            <Navigate
              to={`https://${window.location.host}${window.location.pathname}`}
            />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
