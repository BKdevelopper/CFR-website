import React, { useState } from 'react'
import './CSS/gallery.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { MdZoomIn, MdClose } from 'react-icons/md'
import Modal from 'react-modal'

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
    'https://bkdevelopper.github.io/CFR-website/img/photo1.jpeg',
    'https://bkdevelopper.github.io/CFR-website/img/photo2.jpeg',
    'https://bkdevelopper.github.io/CFR-website/img/photo3.jpeg',
    'https://bkdevelopper.github.io/CFR-website/img/photo4.jpeg',
    'https://bkdevelopper.github.io/CFR-website/img/photo5.jpeg',
    'https://bkdevelopper.github.io/CFR-website/img/photo6.jpeg',
    'https://bkdevelopper.github.io/CFR-website/img/photo7.jpeg',
    'https://bkdevelopper.github.io/CFR-website/img/photo8.jpeg',
    'https://bkdevelopper.github.io/CFR-website/img/photo9.jpeg',
    'https://bkdevelopper.github.io/CFR-website/img/photo10.jpeg',
    'https://bkdevelopper.github.io/CFR-website/img/photo11.jpeg',
    'https://bkdevelopper.github.io/CFR-website/img/photo12.jpeg',
    'https://bkdevelopper.github.io/CFR-website/img/photo13.jpeg',
    'https://bkdevelopper.github.io/CFR-website/img/photo14.jpeg',
    'https://bkdevelopper.github.io/CFR-website/img/photo15.jpeg',
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
      <h2>Nos réalisation</h2>
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
