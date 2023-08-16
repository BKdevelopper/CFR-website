import React from 'react'
import './CSS/about.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import sections from './DATA/about'
import { TbSolarPanel } from 'react-icons/tb'
import { GiWindTurbine } from 'react-icons/gi'
import { RiWaterFlashFill } from 'react-icons/ri'
import { GiHeatHaze } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import presentation from '../img/présentation.jpg'
import avantage from '../img/avantage.png'
import service from '../img/service.jpg'
import equipe from '../img/equipe.jpg'
const About = () => {
  return (
    <>
      <Navbar scroll={false} />
      <div className="about-title">
        <h1>Qui somme nous ?</h1>
      </div>
      <div className="about-container">
        <div className="about-container-first">
          <div className="section">
            <img src={presentation} alt="Header" />
            <div className="about-container-first-textcontainer">
              <h2>1. Présentation CFR</h2>
              <p>{sections.header}</p>
            </div>
          </div>
          <div className="section">
            <img src={avantage} alt="Header" />
            <div className="about-container-first-textcontainer">
              <h2>2. Les avantages</h2>
              <p>{sections.advantages}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-container-middle">
        <div className="about-container-middle-title">
          <h2>Nos services incluent</h2>
        </div>
        <div className="about-container-middle-text">
          <div className="about-container-middle-text-1">
            <TbSolarPanel />
            <h2>L'énergie solaire</h2>
            <p>{sections.solaire}</p>
          </div>
          <div className="about-container-middle-text-2">
            <GiWindTurbine />
            <h2>L'énergie éolienne</h2>
            <p>{sections.eolien}</p>
          </div>
          <div className="about-container-middle-text-3">
            <RiWaterFlashFill />
            <h2>L'énergie hydraulique</h2>
            <p>{sections.hydraulique}</p>
          </div>
          <div className="about-container-middle-text-4">
            <GiHeatHaze />
            <h2>L'énergie géothermique</h2>
            <p>{sections.geothermique}</p>
          </div>
        </div>
        <button className="about-container-middle-btn">
          <Link
            to="/contact"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Demandez un devis
          </Link>
        </button>
      </div>

      <div className="about-container">
        <div className="about-container-first">
          <div className="section">
            <img src={service} alt="Header" />
            <div className="about-container-first-textcontainer">
              <h2>3. Nos services</h2>
              <p>{sections.services}</p>
            </div>
          </div>
          <div className="section">
            <img src={equipe} alt="Header" />
            <div className="about-container-first-textcontainer">
              <h2>4. Notre équipe</h2>
              <p>{sections.conclusion}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
