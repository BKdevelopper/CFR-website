import '../components/CSS/App.css'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Informations from '../components/Informations'
import PhotoGallery from '../components/gallery'
import House from '../components/house'
import Footer from '../components/Footer'
import Popup from '../components/Popup'
import Sponsors from '../components/Sponsor'
function Accueil() {
  return (
    <div>
      <Popup />
      <Navbar scroll={true} />
      <Slider />
      <Informations />
      <PhotoGallery />
      <House />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default Accueil
