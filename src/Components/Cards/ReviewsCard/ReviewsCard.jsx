import './ReviewsCard.css'
import React from "react";
import StarRatings from "react-star-ratings";
export default function ReviewsCard({from,name,numbervalue,paragraph,star}) {
  const rating = parseFloat(numbervalue);
  return (
    <div className='tayCard'>
          <div className='tayCardTiltle'>
            <div className='tayNameAndFrom'>
              <h4 className='tayName'>{name}</h4>
              <h5 className='tayfrom'>{from}</h5>
            </div>
            <div className='tayValue'>
              <div className='tayStars'>
                  <StarRatings
              rating={rating}
              starRatedColor="red"
              starEmptyColor="gray"
              numberOfStars={4}
              starDimension="14px"
              starSpacing="0px"
            />
            </div> 
              <h6 className='tayNumber'>{numbervalue}</h6>
           
          </div> 
          </div>
          <p className='tayParagraph'>
           {paragraph}
          </p>   
       </div>
    
  )
}
