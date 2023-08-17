import React, { useState } from 'react'
import Arrow from '../img/arrow-dropdown.svg'
import './CSS/climatisation.css' // Assurez-vous d'avoir un fichier CSS pour styliser le composant
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import clima from '../img/CFR-climatisation.jpg'
import climatisationwallpaper from '../img/climatisation.jpg'
import climatisation from '../img/icon/climatisation.png'
import { Link } from 'react-router-dom'

const Climatisation = () => {
  const data = [
    {
      title: 'Un seul appareil pour toutes les saisons.',
      content:
        'Un unique dispositif pour répondre à tous les besoins saisonniers.',
    },
    {
      title: 'Rafraichissement rapide en été, chauffage efficace en hiver !',
      content:
        'Refroidissement instantané pendant les mois estivaux, chauffage performant durant la saison hivernale !',
    },
    {
      title:
        'Un air filtré de meilleure qualité et une absorption des excès d’humidité.',
      content:
        'Une amélioration de la qualité de l’air intérieur et une absorption des excès d’humidité pour un confort optimal.',
    },
    {
      title:
        'Restitution en moyenne 3 kWh de chaleur pour 1 kWh de source d’énergie consommée.',
      content:
        'Émission en moyenne de 3 kWh de chaleur pour chaque 1 kWh de source d’énergie consommée',
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
            <h1>Climatisation réversible, faire face aux pics de chaleur</h1>
            <img
              src={clima}
              alt="Climatisation"
              className="energy-img-climatisation"
            />
          </div>
          <div className="energy-container-1-explication">
            <img
              src={climatisationwallpaper}
              alt="Climatisation"
              className="energy-img-climatisation-wallpaper"
            />
            <div className="energy-container-1-explication-text">
              <p>
                La climatisation réversible, également connue sous le nom de
                pompe à chaleur air-air, représente une solution écologique et
                économique hautement performante pour assurer à la fois le
                refroidissement et le chauffage de votre résidence.{' '}
              </p>
              <p>
                Opérant tout au long de l'année, cette technologie présente un
                investissement judicieux à double effet, vous assurant une
                rentabilité solide et un confort optimal en toutes saisons.
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
              src={climatisation}
              alt=" "
              className="energy-container-2-img"
            />

            <h1>Climatisation</h1>
            <h2 className="energy-container-2-group-h2">
              Voici quatre solides raisons pour opter pour l'installation d'une
              climatisation réversible
            </h2>
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
              Le tarif sera influencé par des facteurs tels que les dimensions
              de votre espace et, par conséquent, votre demande énergétique. En
              règle générale, le coût variera entre 45 et 65 € par mètre carré.
              Cependant, la démarche la plus avantageuse pour vous serait de
              mener une évaluation détaillée en collaboration avec CFR.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Climatisation
