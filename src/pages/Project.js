import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/project.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaHotel } from 'react-icons/fa'
import { FaHandshake } from 'react-icons/fa'
import { AiOutlineFileText } from 'react-icons/ai'
const Project = () => {
  return (
    <>
      <Navbar scroll={false} />
      <div className="project">
        <h1>Votre projet en 4 étapes</h1>
      </div>
      <div className="project-container">
        <div className="project-container-first">
          <div className="project-section">
            <img
              src="https://bkdevelopper.github.io/CFR-website/img/bilan.jpeg"
              alt="Header"
            />
            <div className="project-container-first-textcontainer">
              <h1>1. VOTRE BILAN </h1>
              <h2>Faites-en la demande dès à présent.</h2>
              <p>
                Pour assurer la génération d'énergie écologique et faciliter la
                transition vers l'autoconsommation, nous commençons par
                collaborer avec vous pour mener une évaluation. Cette étude nous
                permet d'ajuster la solution la mieux adaptée à votre mode de
                vie, à votre logement ainsi qu'à vos habitudes de consommation.
                En utilisant ces informations personnalisées, nous sommes
                ensuite en mesure de concevoir des installations sur mesure pour
                garantir une rentabilité maximale.
              </p>
              <Link
                to="/contact"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Demandez votre bilan
              </Link>
            </div>
          </div>
          <div className="project-section" style={{ marginTop: '1rem' }}>
            <img
              src="https://bkdevelopper.github.io/CFR-website/img/appareillage-electrique.png"
              alt="Header"
            />
            <div className="project-container-first-textcontainer">
              <h1>2. VISITE TECHNIQUE</h1>
              <h2>Inclus dans notre engagement</h2>
              <p>
                Avant de s'engager précipitamment dans la mise en place des
                panneaux solaires, il est important d'effectuer une étude
                préliminaire concernant les opportunités d'installation de ces
                panneaux chez vous, en prenant en compte vos besoins en énergie
                ainsi que les spécificités de votre habitation. Un professionnel
                se déplace chez vous pour analyser l'ensemble de ces aspects et
                identifier les solutions les plus appropriées pour votre projet.
                À l'issue de cette évaluation solaire, un devis vous est
                proposé.
              </p>
              <Link
                to="/contact"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Demandez un devis
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container-middle">
        <div className="project-container-middle-title">
          <h2>Quels sont les démarches à faire ?</h2>
        </div>
        <div className="project-container-middle-text">
          <div className="project-container-middle-text-1">
            <FaHotel />
            <h2>L'autorisation urbanisme</h2>
            <p>
              Ceci consiste en une démarche préliminaire pour solliciter des
              travaux auprès de la municipalité, mais les détails varient en
              fonction de votre habitation, de son emplacement et du système
              photovoltaïque envisagé.
            </p>
          </div>
          <div className="project-container-middle-text-2">
            <FaHandshake />
            <h2>Demande de raccordement au réseau</h2>
            <p>
              Pour pouvoir vendre l'excédent de votre production électrique, il
              est indispensable de solliciter une liaison auprès du gestionnaire
              de réseau approprié.
            </p>
          </div>
          <div className="project-container-middle-text-3">
            <AiOutlineFileText />
            <h2>Attestation conseul électrique</h2>
            <p>
              Cette phase survient une fois l'installation achevée. Nous nous
              chargeons d'obtenir en votre nom l'attestation de conformité
              électrique du Consuel, un document nécessaire pour la mise en
              service.
            </p>
          </div>
        </div>
        <button className="project-container-middle-btn">
          <Link
            to="/contact"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Demandez un devis
          </Link>
        </button>
      </div>

      <div className="project-container">
        <div className="project-container-first">
          <div className="project-section">
            <img
              src="https://bkdevelopper.github.io/CFR-website/img/administrative.jpg"
              alt="Header"
            />
            <div className="project-container-first-textcontainer">
              <h1>3. DÉMARCHES ADMINISTRATIVES </h1>
              <h2>100% PRISES EN CHARGE</h2>
              <p>
                Nous vous guidons et prenons en charge l'intégralité des phases
                impliquées dans la concrétisation de votre projet
                d'autoconsommation. Toutes les formalités administratives sont
                prises en charge par notre équipe afin de vous simplifier la
                tâche : déclaration préalable de travaux auprès de la mairie,
                requête de financement en collaboration avec notre partenaire
                institutionnel, démarches de raccordement (CAE) et jusqu'à la
                commande pour la mise en service.
              </p>
              <Link
                to="/contact"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                En savoir plus
              </Link>
            </div>
          </div>
          <div className="project-section">
            <img
              src="https://bkdevelopper.github.io/CFR-website/img/solar.png"
              alt="Header"
              style={{ marginTop: '-1.5rem' }}
            />
            <div className="project-container-first-textcontainer">
              <h1>4. INSTALLATION DU GÉNÉRATEUR </h1>
              <h2>INSTALLATION EN 1 JOURNÉE</h2>
              <p>
                Après avoir accompli l'analyse de faisabilité et officialisé le
                contrat, les étapes de mise en place sont enclenchées. Ces
                étapes incluent la fixation précise des panneaux solaires sur le
                toit de votre résidence ou de votre bâtiment, l'installation
                soignée du micro-onduleur et la connexion méthodique des
                panneaux solaires au réseau électrique du logement, garantissant
                ainsi un fonctionnement optimal.
              </p>
              <Link
                to="/contact"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Des questions ?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Project
