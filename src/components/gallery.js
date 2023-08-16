import React, { useState } from 'react'
import './CSS/gallery.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { MdZoomIn, MdClose } from 'react-icons/md'
import Modal from 'react-modal'
import photo1 from '../img/photo1.png'
import photo2 from '../img/photo2.JPG'
import photo3 from '../img/photo3.JPG'
import photo4 from '../img/photo4.png'
import photo5 from '../img/photo5.png'
import photo6 from '../img/photo6.png'
import photo7 from '../img/photo7.png'
import photo8 from '../img/photo8.JPG'
import photo9 from '../img/photo9.JPG'
import photo10 from '../img/photo10.png'
import photo11 from '../img/photo11.png'
import photo12 from '../img/photo12.JPG'
import photo13 from '../img/photo13.JPG'
import photo14 from '../img/photo14.JPG'
import photo15 from '../img/photo15.JPG'
Modal.setAppElement('#root') // Set the root element for react-modal

const PhotoGallery = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const image = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
  ]

  const openModal = (img) => {
    setModalImage(img)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="carousels">
      <div className="carousels-title section-title position-relative text-center">
        <h6 className="carousels-title-projet text-uppercase mb-3">Projet</h6>
        <h1 className="carousels-title-rea font-secondary display-4 text-white">
          Nos réalisations
        </h1>
      </div>
      <Slider {...settings}>
        {image.map((photo, index) => (
          <div className="box" key={index}>
            <img
              src={photo}
              className="image"
              alt={`Réalisation ${index + 1}`}
              onClick={() => openModal(photo)}
            />

            <MdZoomIn className="zoom-icon" onClick={() => openModal(photo)} />
          </div>
        ))}
      </Slider>

      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <MdClose className="close-icon" onClick={closeModal} />
        <img src={modalImage} alt="Zoomed In" className="modal-image" />
      </Modal>
    </div>
  )
}

export default PhotoGallery
