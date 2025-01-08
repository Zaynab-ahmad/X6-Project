
import DevicesCard from '../Cards/DevicesCard/DevicesCard'
import './Devices.css'
import icon1 from "./../../assets/Icons/smartphone.svg"
import icon2 from "./../../assets/Icons/tablet.svg"
import icon3 from"./../../assets/Icons/smartTV.svg"
import icon4 from "./../../assets/Icons/laptops.svg"
import icon5 from"./../../assets/Icons/gaming.svg"
import icon6 from "./../../assets/Icons/VRheadsets.svg"
import HomeMoviesAndShowsTitle from '../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle'
import HomeParagraph from '../SharedTitlesAndParagraph/HomeParagraph/HomeParagraph'
export default function Devices() {

  
  return (
    // the device section
    <div className='StreamingExperienceTay xContainer customMargin'>
       {/* the devicetitle */}
       <div className='deviceTitle'>
       <HomeMoviesAndShowsTitle title ="We Provide you streaming experience across various devices." home={true}/>
       <HomeParagraph paragraph ="With StreamVibe, you can enjoy your favorite movies and TV shows anytime,
           anywhere. Our platform is designed to be compatible with 
           a wide range of devices, ensuring that you never miss a moment of entertainment."/>
       </div>
      {/* the devicecards */}
      <div className='StreamingExperienceCardsTay'>
              {/* onepartofdevicecards */}
              <div className='StreamingExperienceOnepartcardsTay'>
                <DevicesCard  icon={icon1}  title={"Smartphones"} />
                <DevicesCard  icon={icon2} title={"Tablet"}/>
                <DevicesCard  icon={icon3}title={"Smart TV"}/>
              </div>
              {/* towpartofdevicecards */}
              <div className='StreamingExperienceTowcardcardsTay'>
            <DevicesCard  icon={icon4} title={"Laptops"}/>
            <DevicesCard  icon={icon5} title={"Gaming Consoles"}/>
            <DevicesCard  icon={icon6} title={"VR Headsets "}/>
              </div>
           
            </div>

      <div className='StreamingTay'>
                <DevicesCard  icon={icon1}  title={"Smartphones"} />
                <DevicesCard  icon={icon2} title={"Tablet"}/>
                <DevicesCard  icon={icon3}title={"Smart TV"}/>
                <DevicesCard  icon={icon4} title={"Laptops"}/>
                <DevicesCard  icon={icon5} title={"Gaming Consoles"}/>
                <DevicesCard  icon={icon6} title={"VR Headsets "}/>
         </div>

    </div>
      
  )
}
