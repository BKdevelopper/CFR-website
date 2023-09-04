import React, { useState } from 'react'
import Arrow from '../img/arrow-dropdown.svg'
import './CSS/thermodynamique.css' // Assurez-vous d'avoir un fichier CSS pour styliser le composant
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import clima from '../img/CFR-climatisation.jpg'
import climatisationwallpaper from '../img/CFR-thermodynamique.jpeg'
import thermodynamique from '../img/icon/thermodynamique.png'
import { Link } from 'react-router-dom'

const Thermodynamique = () => {
  const data = [
    {
      title: 'Économies',
      content:
        'Obtenez des économies pouvant atteindre jusqu’à 70% sur votre facture énergétique.',
    },
    {
      title: 'Rentable',
      content:
        'En optant pour un chauffe-eau thermodynamique, vous constaterez un retour sur investissement en seulement 4 à 5 ans, ce qui représente une perspective particulièrement attrayante.',
    },
    {
      title: 'Eligible aux aides',
      content:
        'En optant pour ce chauffe-eau, vous avez l’opportunité de profiter des soutiens financiers de l’État en 2021, incluant des aides telles que MaPrimeRénov, une TVA réduite, ainsi que des primes énergie (CEE : Certificat d’Économie d’Énergie).',
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
      <Navbar scroll={false} aria-label="Menu de navigation" />
      <div className="energy-container" aria-label="Contenu principal">
        <div className="energy-container-1">
          <div className="energy-container-1-titre">
            <h1>
              Chauffe-eau thermodynamique : économique, écologique et rentable
            </h1>
            <img
              src={clima}
              alt="Climatisation"
              className="energy-img-climatisation"
              aria-hidden="true"
            />
          </div>
          <div className="energy-container-1-explication">
            <img
              src={climatisationwallpaper}
              alt="Climatisation"
              className="energy-img-climatisation-wallpaper"
              aria-hidden="true"
            />
            <div className="energy-container-1-explication-text">
              <p>
                Cette pompe à chaleur de petite puissance est dédiée
                exclusivement à la production d'eau chaude sanitaire, avec un
                réservoir de 150 à 270 litres. Elle permet des économies
                considérables de l'ordre de 70% par rapport à un ballon
                électrique standard.
              </p>
              <p>
                Une solution idéale pour ceux qui cherchent à réduire leur
                consommation énergétique tout en profitant d'une source d'eau
                chaude constante et efficiente.
              </p>
              <Link to="/contact">
                <button
                  className="energy-container-1-explication-text-button"
                  aria-label="Contactez-nous"
                >
                  Contactez-nous
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="energy-container-2">
          <div className="energy-container-2-group">
            <img
              src={thermodynamique}
              alt=" "
              className="energy-container-2-img"
              aria-hidden="true"
            />

            <h1>Chauffe-eau thermodynamique</h1>
            <h2 className="energy-container-2-group-h2">Les avantages</h2>
            <p>
              Avant de vous lancer dans le processus d'installation d'une
              climatisation réversible, il est essentiel d'analyser les
              différentes approches de gestion thermique qui vous sont offertes,
              tout en prenant en compte les conséquences financières qui en
              découlent.
            </p>
            <div className="dropdown">
              <div className="dropdown-container">
                {data.map((item, i) => (
                  <div className="dropdown-container-item" key={item.title}>
                    <div
                      className="dropdown-container-item-title"
                      onClick={() => toggle(i)}
                      aria-label={`Afficher ${item.title}`}
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
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className={selected === i ? 'boxx show' : 'boxx'}
                      key={i.content}
                      aria-label={item.title}
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p>
              Pour une performance optimale dans des conditions réelles,
              plusieurs facteurs doivent être pris en compte. Par exemple,
              l'emplacement du ballon est crucial. Stocker l'eau chaude dans un
              réservoir peut entraîner des pertes thermiques significatives
              (appelées "pertes statiques"). Pour réduire ces pertes, il est
              préférable de ne pas installer le chauffe-eau thermodynamique dans
              un espace exposé aux températures extérieures (comme un abri non
              isolé). Optez plutôt pour une installation dans une zone chauffée
              ou un local adjacent.
            </p>
          </div>
        </div>
      </div>
      <Footer aria-label="Pied de page" />
    </>
  )
}

export default Thermodynamique
