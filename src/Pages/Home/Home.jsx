import Categories from '../../Components/Categories/Categories'
import Devices from '../../Components/Devices/Devices'
import FAQs from '../../Components/FAQs/FAQs'
import HomeHero from '../../Components/Heros/HomeHero/HomeHero'
import Pricing from '../../Components/Pricing/Pricing'
import ScrollAnimation from '../../Components/ScrollAnimation/ScrollAnimation'
import './Home.css'

export default function Home() {
  return (
    <div>
      <HomeHero/>
      <ScrollAnimation>
      <Categories/>
      </ScrollAnimation>
      <ScrollAnimation>
      <Devices/>
      </ScrollAnimation>
      <ScrollAnimation>
      <FAQs/>
      </ScrollAnimation>
      <ScrollAnimation>
      <Pricing/>
      </ScrollAnimation>
    </div>
  )
}
