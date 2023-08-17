import React, { useState } from 'react'
import Arrow from '../img/arrow-dropdown.svg'
import './CSS/solar.css' // Assurez-vous d'avoir un fichier CSS pour styliser le composant
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import photovol from '../img/CFR-photovoltaïque.jpg'
import homesolar from '../img/galery3.jpg'
import photovoltaique from '../img/icon/photovoltaique.png'
import { Link } from 'react-router-dom'

const SolarPanel = () => {
  const data = [
    {
      title: 'La production injectée dans le réseau',
      content:
        'L’intégralité de votre production est injectée dans le réseau et vendue au tarif d’achat. Dans cette situation, deux compteurs communicants sont installés chez vous.',
    },
    {
      title: 'La production consommée et le surplus injecté dans le réseau',
      content:
        'Seul le surplus de production sur l’instantané est injecté dans le réseau, vous consommez le reste.',
    },
    {
      title: 'La production intégralement consommée',
      content:
        'Vous consommez alors la totalité de votre production sans injecter d’électricité dans le réseau (« autoconsommation totale »).',
    },
  ]
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <>
      <Navbar scroll={false} />
      <div className="energy-container">
        <div className="energy-container-1">
          <div className="energy-container-1-titre">
            <h1>
              Photovoltaïque l’énergie solaire pour produire son électricité
            </h1>
            <img src={photovol} alt="Energie Solaire" className="energy-img" />
          </div>
          <div className="energy-container-1-explication">
            <img src={homesolar} alt="Energie Solaire" className="energy-img" />
            <div className="energy-container-1-explication-text">
              <p>
                L'énergie solaire présente des caractéristiques
                environnementales positives, étant à la fois propre, abordable,
                largement accessible, renouvelable et adaptable. Elle offre la
                possibilité de générer votre propre approvisionnement électrique
                ou même de le revendre.
              </p>
              <p>
                CFR se chargera d'analyser les options adaptées à votre
                contexte, les éventuelles subventions disponibles et les étapes
                à suivre pour réaliser avec succès votre projet de conversion
                photovoltaïque.
              </p>
              <Link to="/contact">
                <button className="energy-container-1-explication-text-button">
                  Contactez-nous
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="energy-container-2">
          <div className="energy-container-2-group">
            <img
              src={photovoltaique}
              alt=" "
              className="energy-container-2-img"
            />

            <h1>Photovoltaïque</h1>
            <h2 className="energy-container-2-group-h2">
              Quelles alternatives avez-vous pour gérer l'électricité dans le
              cadre de votre projet ?
            </h2>
            <p>
              Avant d'initier votre démarche pour l'installation de panneaux
              solaires, il est crucial d'examiner les diverses stratégies de
              gestion de l'électricité disponibles à votre disposition, en plus
              de considérer les implications financières qui leur sont
              associées.
            </p>
            <div className="dropdown">
              <div className="dropdown-container">
                {data.map((item, i) => (
                  <div className="dropdown-container-item" key={item.title}>
                    <div
                      className="dropdown-container-item-title"
                      onClick={() => toggle(i)}
                    >
                      <h2>{item.title}</h2>
                      <img
                        src={Arrow}
                        alt="arrow accordeon"
                        className="dropdown-container-item-title-img"
                        style={{
                          transform: selected === i ? 'rotate(-180deg)' : null,
                          transition: '0.2s',
                        }}
                      />
                    </div>
                    <div
                      className={selected === i ? 'boxx show' : 'boxx'}
                      key={i.content}
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p>
              Peu importe le choix que vous faites pour vendre votre électricité
              produite, celle-ci sera toujours acheminée vers l'utilisateur le
              plus proche, qu'il s'agisse de vous ou de votre voisin.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SolarPanel
