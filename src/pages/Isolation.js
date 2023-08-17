import React, { useState } from 'react'
import Arrow from '../img/arrow-dropdown.svg'
import './CSS/thermodynamique.css' // Assurez-vous d'avoir un fichier CSS pour styliser le composant
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import clima from '../img/CFR-climatisation.jpg'
import climatisationwallpaper from '../img/CFR-isolation.png'
import pompe from '../img/icon/isolation.png'
import { Link } from 'react-router-dom'

const Isolation = () => {
  const data = [
    {
      title: 'Isolation du toit par l’extérieur',
      content:
        'Optez pour une efficacité énergétique optimale en choisissant l’isolation du toit par l’extérieur, une solution qui vous garantit des économies durables et un confort accru chez vous. Profitez d’une isolation performante tout en préservant l’intégrité esthétique de votre espace intérieur.',
    },
    {
      title: 'Menuiseries isolantes',
      content:
        'Améliorez le confort de votre maison tout en réduisant vos coûts énergétiques avec nos menuiseries isolantes de haute qualité. Optez pour une solution esthétique et performante qui vous permettra de profiter d’un environnement intérieur agréable et économiquement avantageux.',
    },
    {
      title: 'L’isolation des combles perdus par le plancher',
      content:
        'Isoler vos combles perdus par le plancher : une approche efficace pour renforcer l’efficacité énergétique de votre espace de vie. Gagnez en confort et en économies grâce à cette solution d’isolation pratique et performante.',
    },
    {
      title: 'Isolation des combles sous le rampant',
      content:
        'Optimisez l’isolation de vos combles sous le rampant pour un environnement intérieur plus confortable et économe en énergie. Profitez des avantages d’une isolation efficace et bien conçue pour une maison plus chaleureuse et économique.',
    },
    {
      title: 'Isolation des murs par l’extérieur',
      content:
        'Optez pour une isolation optimale en choisissant l’isolation des murs par l’extérieur. Cette approche vous permettra d’améliorer l’efficacité énergétique de votre maison tout en préservant l’espace intérieur. Profitez d’une solution esthétique et performante pour un confort accru et des économies durables.',
    },
    {
      title: 'Isolation des planchers bas',
      content:
        'Améliorez l’efficacité énergétique de votre habitation en isolant les planchers bas. Cette démarche vous permettra de renforcer le confort intérieur tout en réduisant vos dépenses énergétiques. Optez pour une solution pratique et bénéfique pour une meilleure isolation de votre espace de vie.',
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
            <h1>Isoler son logement</h1>
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
                Les habitations qui consomment excessivement de l'énergie
                devront être sérieusement examinées en ce qui concerne leur
                rénovation et la possibilité d'entreprendre des améliorations.
                Cela pourrait inclure des mesures telles que l'ajout d'isolant,
                le remplacement des fenêtres, l'installation de nouveaux
                systèmes de chauffage, ainsi que l'isolation thermique des
                tuyaux.
              </p>
              <p>
                Parfois, des solutions simples et économiques peuvent avoir un
                impact significatif. En entreprenant des travaux de rénovation,
                on peut non seulement réduire sa future consommation d'énergie,
                mais aussi garantir un confort de vie amélioré tout au long de
                l'année et sur le long terme.
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
            <img src={pompe} alt=" " className="energy-container-2-img" />

            <h1>Isoler son logement</h1>
            <h2 className="energy-container-2-group-h2">
              Nous vous accompagnons pour tous vos travaux d’isolation
            </h2>
            <p>
              Selon l'état de votre bâtiment et l'usage que vous en faites,
              différentes options sont disponibles pour renforcer l'efficacité
              énergétique de votre domicile.
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
              L'isolation par l'extérieur est fréquemment considérée comme
              l'option la plus économique. Elle constitue la première mesure à
              envisager, compte tenu de son fort potentiel d'économies
              d'énergie. Cependant, afin de minimiser les besoins en chauffage,
              il est essentiel d'appliquer l'isolation le plus près possible du
              volume intérieurement chauffé.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Isolation
