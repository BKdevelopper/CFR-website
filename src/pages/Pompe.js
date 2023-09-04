import React, { useState } from 'react'
import Arrow from '../img/arrow-dropdown.svg'
import './CSS/thermodynamique.css' // Assurez-vous d'avoir un fichier CSS pour styliser le composant
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import clima from '../img/CFR-climatisation.jpg'
import climatisationwallpaper from '../img/CFR-pompe.jpg'
import pompe from '../img/icon/pompe.png'
import { Link } from 'react-router-dom'

const Pompe = () => {
  const data = [
    {
      title:
        'Les performances d’une PAC sont très dépendantes de la qualité d’installation et d’exploitation',
      content:
        'Au-delà des performances nominales évaluées en laboratoire dans des conditions stables, ce sont les performances sur la saison de chauffage entière qui importent le plus. Des éléments tels que les variations des conditions extérieures, comme la température pour les PAC aérothermiques, ont un impact notable sur l’efficacité saisonnière.De plus, une surdimension de la puissance de la PAC par rapport aux besoins de chauffage peut augmenter les cycles marche/arrêt, engendrant une surconsommation électrique par rapport à un fonctionnement stable et une usure prématurée.Il est recommandé de faire appel à un professionnel qualifié, particulièrement avec la qualification "Reconnue Grenelle Environnement", pour une installation optimale.',
    },
    {
      title: 'Vigilance sur l’acoustique des PAC aérothermiques',
      content:
        'Les pompes à chaleur aérothermiques, placées à l’extérieur, peuvent causer des perturbations sonores pour les voisins. Des directives d’installation simples sont disponibles pour prévenir ces bruits indésirables, ce qui devrait être un facteur déterminant lors du choix de votre installation.',
    },
    {
      title:
        'Un impact sur le réseau de distribution électrique à prendre en considération',
      content:
        'À mesure que l’écart entre la température de la source de chaleur et la température intérieure désirée augmente, la demande en électricité de la PAC s’accroît, particulièrement pour les PAC aérothermiques avec chauffage d’appoint par effet Joule.        Dans certaines régions de France, en raison de la capacité électrique du réseau, il peut être recommandé d’explorer d’autres méthodes de chauffage afin de ne pas surcharger davantage le réseau électrique.',
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
              Pompe à chaleur performante et valorisante des sources
              renouvelables
            </h1>
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
            <div
              className="energy-container-1-explication-text"
              aria-label="Informations sur la pompe à chaleur et les sources renouvelables"
            >
              <p>
                La PAC tire une partie de son énergie de sources renouvelables :
                AIR / EAU / SOL. Environ 60% de la chaleur et/ou de l'eau chaude
                produite par la PAC provient de sources renouvelables, tandis
                que le reste est issu de l'électricité nécessaire au
                fonctionnement du compresseur.
              </p>
              <p>
                Les pompes à chaleur ont évolué depuis leur introduction sur le
                marché français dans les années 80, devenant aujourd'hui matures
                et fiables, avec un fort potentiel d'amélioration. Des progrès
                sont réalisés sur les coefficients de performance, certains
                modèles atteignant un COP supérieur à 5, grâce au développement
                de compresseurs à vitesse variable qui réduisent la consommation
                électrique de la PAC.
              </p>
              <Link to="/contact" aria-label="Contactez-nous">
                <button className="energy-container-1-explication-text-button">
                  Contactez-nous
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="energy-container-2">
          <div className="energy-container-2-group">
            <img src={pompe} alt=" " className="energy-container-2-img" />

            <h1>Pompe à chaleur</h1>
            <h2 className="energy-container-2-group-h2">Points de vigilance</h2>
            <p>
              Avant d'initier votre projet d'installation de pompe à chaleur, il
              est essentiel d'examiner attentivement ces points importants.
            </p>
            <div
              className="dropdown"
              aria-label="Options d'installation de la pompe à chaleur"
            >
              <div className="dropdown-container">
                {data.map((item, i) => (
                  <div className="dropdown-container-item" key={item.title}>
                    <div
                      className="dropdown-container-item-title"
                      onClick={() => toggle(i)}
                      aria-label={`Afficher ou masquer ${item.title}`}
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

export default Pompe
