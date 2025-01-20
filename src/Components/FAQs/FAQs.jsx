import './FAQs.css';
import ACCO from '../FAQ_ACCO/ACCO';
import HomeParagraph from '../SharedTitlesAndParagraph/HomeParagraph/HomeParagraph';
import Button from '../Buttons/Button';
import HomeMoviesAndShowsTitle from '../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle';
import { Col, Container, Row } from 'react-bootstrap';

const faqData = [
  { number: '01', que: 'What is StreamVibe?', ans: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.', lin: true },
  { number: '02', que: 'How much does StreamVibe cost?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cumque similique.', lin: true },
  { number: '03', que: 'What content is available on StreamVibe?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cumque similique.', lin: true },
  { number: '04', que: 'How can I watch StreamVibe?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cumque similique.', lin: false },
  { number: '05', que: 'How do I sign up for StreamVibe?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cumque similique.', lin: true },
  { number: '06', que: 'What is the StreamVibe free trial?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cumque similique.', lin: true },
  { number: '07', que: 'How do I contact StreamVibe customer support?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cumque similique.', lin: true },
  { number: '08', que: 'What are the StreamVibe payment methods?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cumque similique.', lin: false },
];

export default function FAQs() {
  return (
    <div id ="FAQ" className="xContainer customMargin">
      <div className="headingZA d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-start align-items-lg-center">
        <div className="faqTMA d-flex flex-column justify-content-center align-items-start">
          <HomeMoviesAndShowsTitle 
            title="Frequently Asked Questions" 
            titlePadding="home" 
            fontSizeType="type4" 
            lineHeightType="type4" 
          />
          <HomeParagraph 
            paragraph="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe." 
          />
        </div>
        <Button 
          text="Ask a Question" 
          isFullWidth={false} 
          isSmallerBorderRadius={true} 
          isBlack={false} 
          paddingType="type2" 
        />
      </div>

      {/* FAQ Accordion Section */}
      
        
      <Row>
        <Col md={12} lg={6}>
          <div className="FAQ-accordion">
            {faqData.slice(0, 4).map((faq, index) => (
              <ACCO 
                key={index} 
                number={faq.number} 
                que={faq.que} 
                ans={faq.ans}                 
              />
            ))}
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="FAQ-accordion">
            {faqData.slice(4).map((faq, index) => (
              <ACCO 
                key={index} 
                number={faq.number} 
                que={faq.que} 
                ans={faq.ans}          
              />
            ))}
          </div>
        </Col>
      </Row>
      
    </div>
  );
}
