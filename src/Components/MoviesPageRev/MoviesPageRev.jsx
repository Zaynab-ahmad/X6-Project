import "./MoviesPageRev.css";
import ReviewsCard from "./../Cards/ReviewsCard/ReviewsCard";
import RevSlider from"../Sliders/RevSlider/RevSlider"
import plus from "../../assets/Icons/plus.svg"
export default function MoviesPageRev() {
  const reviewsData = [
  { from: "From India", name: "Aniket Roy", numbervalue: "4.5", paragraph: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldnt watch it.", rating: true },
  { from: "From India", name: "Swaraj", numbervalue: "5", paragraph: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.", rating: false },
  { from: "From Brazil", name: "Bráulio Mantovani", numbervalue: "4.0", paragraph: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.", rating: true },
  { from: "From Germany", name: "Ronald Harwood", numbervalue: "2.0", paragraph: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldnt watch it.", rating: false },
];

  
  const CardsRev = reviewsData.map((item, index) => (
    <ReviewsCard
      key={index}
      from={item.from}
      name={item.name}
      numbervalue={item.numbervalue}
      paragraph={item.paragraph}  
      rating={item.rating}    
    />
  ));
   
  return(
<>
 <div className="tayTotalCard">
  <div className="tayTitleCard">
    <h2 className="tayTitleCardh2">Reviews</h2>
    <div className="tayTitleCardbutton"> 
      <img className="spanButtonimg" src={plus}/> <h6 className="spanButtonH6">Add Your Review</h6>
      </div>
  </div>
  <div className="tay-Body">
  <RevSlider CardsRev={CardsRev}  slidesToShow={2}/>
  </div>
 </div>
</>

  );
}

