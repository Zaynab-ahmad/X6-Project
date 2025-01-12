
import DevicesCard from '../Cards/DevicesCard/DevicesCard'
import './Devices.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
    <div className='StreamingExpTay'>   
          <div className='StreamingExpTitleTay'>
              <h3 className='StreamingExpH3Tay'>We Provide you streaming experience across various devices.</h3>
              <p className='StreamingExpPTay'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime,
                anywhere. Our platform is designed to be compatible with 
                a wide range of devices, 
                ensuring that you 
                never miss a moment of entertainment.</p>
          </div>
          <div className='CardsTay'>
                <Container>
                <Row>
                <Col xs={12} sm={12} md={6} lg={4} xl={4}  xxl={4}>
                  <DevicesCard icon={icon1} title={"Smartphones"} />
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                  <DevicesCard icon={icon2} title={"Tablet"} />
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} >
                  <DevicesCard icon={icon3} title={"Smart TV"} />
                </Col>
                <Col  xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                  <DevicesCard icon={icon4} title={"Laptops"} />
                </Col>
                <Col  xs={12}sm={12} md={6} lg={4} xl={4} xxl={4}>
                  <DevicesCard icon={icon5} title={"Gaming Consoles"} />
                </Col>
                <Col  xs={12}sm={12} md={6} lg={4} xl={4} xxl={4}>
                  <DevicesCard icon={icon6} title={"VR Headsets"} />
                </Col>
                </Row>
                </Container>
                  
          </div>    
        </div>

  )
}
