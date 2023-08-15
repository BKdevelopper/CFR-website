import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Mention from './pages/mention'
import NoPage from './pages/NoPage'
import Maintenance from './pages/Maintenance'
import Contact from './pages/Contact'
import About from './pages/About'
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Accueil />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/qui-somme-nous" element={<About />} />
          <Route path="/mention-legal" element={<Mention />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
