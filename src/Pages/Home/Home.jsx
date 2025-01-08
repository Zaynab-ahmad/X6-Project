import Categories from '../../Components/Categories/Categories'
import Devices from '../../Components/Devices/Devices'
import FAQs from '../../Components/FAQs/FAQs'
import HomeHero from '../../Components/Heros/HomeHero/HomeHero'
import Pricing from '../../Components/Pricing/Pricing'
import './Home.css'

export default function Home() {
  return (
    <div>
      
      <HomeHero/>
      <Categories/>
      <Devices/>
      <FAQs/>
      <Pricing/>
      
    </div>
  )
}
