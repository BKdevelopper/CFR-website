import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Acceuil'
import Mention from './pages/mention'
import NoPage from './pages/NoPage'
import Maintenance from './pages/Maintenance'
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Accueil />} />
          <Route path="/acceuil" element={<Accueil />} />
          <Route path="/mention-legal" element={<Mention />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
