import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './CSS/slider.css'
import { Link } from 'react-router-dom'
import galerie1 from '../img/galery1.jpg'
import galerie2 from '../img/galery2.jpg'
import galerie3 from '../img/galery3.jpg'
const Slider = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  const images = [
    {
      src: galerie1,
      alt: 'Image 1',
      caption:
        "Économisez de l'argent tout en réduisant votre empreinte carbone",
    },
    {
      src: galerie2,
      alt: 'Image 2',
      caption: 'Transformez votre maison en un habitat éco-énergétique',
    },
    {
      src: galerie3,
      alt: 'Image 3',
      caption: "Améliorez votre confort tout en préservant l'environnement",
    },
  ]

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ width: '100%' }}
      >
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <div style={{ position: 'relative' }}>
              <img
                className="d-block w-100 bg-slide"
                src={image.src}
                alt={image.alt}
                style={{ height: '100vh', objectFit: 'cover' }}
              />
              <h3 className="TitleSlide">
                {image.caption}
                <button className="ButtonSlide">
                  {' '}
                  <Link
                    to="/contact"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Devis gratuit
                  </Link>
                </button>
              </h3>

              <Carousel.Caption
                style={{
                  position: 'absolute',
                  bottom:
                    '20px' /* Ajustez la valeur pour le placement vertical */,
                  left: '50%',
                  transform: 'translateX(-50%)' /* Centrer horizontalement */,

                  padding: '10px 20px',
                  color: '#fff',
                  borderRadius: '5px',
                  width: '80%' /* Ajustez la largeur du texte */,
                  textAlign: 'center',
                }}
              ></Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Slider
