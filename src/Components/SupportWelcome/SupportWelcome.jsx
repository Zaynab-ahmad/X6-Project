import HomeMoviesAndShowsTitle from '../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle'
import HomeParagraph from '../SharedTitlesAndParagraph/HomeParagraph/HomeParagraph'
import './SupportWelcome.css'
import WelcomeImg from '../../assets/Imgs/Support1.png'


export default function SupportWelcome() {
  return (
    <div className='supportWelcomeZA'>
        <div className='supportWelcomeHedZA'> 
      <HomeMoviesAndShowsTitle title="Welcome to our support page!" fontSizeType="type5" lineHeightType="type5"/>
      <HomeParagraph paragraph="We're here to help you with any problems you may be having with our product."/>
        </div>
      
        <img className="welcomeImgZA" src={WelcomeImg} alt="WelcomeImg" />
      
    </div>
  )
}
