import "./MoviesPageRev.css";
import ReviewsCard from "./../Cards/ReviewsCard/ReviewsCard";
import RevSlider from"../Sliders/RevSlider/RevSlider"
import plus from "../../assets/Icons/plus.svg"
import star from "../../assets/Icons/star.svg"
export default function MoviesPageRev() {
  const reviewsData = [
    { from: "British", name: "Christopher Nolan", numbervalue: "3.5", paragraph: "A sci-fi thriller about a skilled thief infiltrating people's dreams.",star:star},
    { from: "American", name: "Damien Chazelle", numbervalue: "1.0", paragraph: "A psychological drama about drummer who faces an abusive instructor.",star:star},
    { from: "Brazilian", name: "Bráulio Mantovani", numbervalue: "4.0", paragraph: "A gritty crime drama set in Rio de Janeiro's favelas, following organized crime's rise.",star:star} ,
    { from: "British", name: "Ronald Harwood", numbervalue: "2.0", paragraph: "A biographical drama about a Jewish pianist struggling to survive during WWII.",star:star},
  ];
  
  const CardsRev = reviewsData.map((item, index) => (
    <ReviewsCard
      key={index}
      from={item.from}
      name={item.name}
      numbervalue={item.numbervalue}
      paragraph={item.paragraph}
      star={item.star}
      
    />
  ));
   
  return(
<>
 <div className="tayTotalCard">
  <div className="tay-TitleCard">
    <h2 className="tay-TitleCardh2">Reviews</h2>
    <button className="tay-TitleCardbutton"> <span className="spanButton">
      <img className="spanButtonimg" src={plus}/> <h6 className="spanButtonH6">Add Your Review</h6>
      </span></button>
  </div>
  <div className="tay-Body">
  <RevSlider CardsRev={CardsRev}  slidesToShow={2}/>
  </div>
 </div>
</>

  );
}

