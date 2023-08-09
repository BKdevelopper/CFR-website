import '../components/CSS/App.css'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Informations from '../components/Informations'
import PhotoGallery from '../components/gallery'
import House from '../components/house'
import Partners from '../components/Partner'
import Footer from '../components/Footer'
import Popup from '../components/Popup'
function Accueil() {
  return (
    <div>
      <Popup />
      <Navbar />
      <Slider />
      <Informations />
      <PhotoGallery />
      <House />
      <Partners />
      <Footer />
    </div>
  )
}

export default Accueil
