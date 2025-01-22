import React from 'react'
import  './MoviesPageInfo.css';
import clender from "./../../assets/Icons/calendar.svg"
import languag from "./../../assets/Icons/Language.svg"
import rating from "./../../assets/Icons/ratingStar.svg"
import gerne from "./../../assets/Icons/genre.svg"
import FourRating1 from './../../assets/Icons/fourAndHalfStar.png'
import FourRating2 from './../../assets/Icons/fourStars.png'
import kantaraphoto from "./../../assets/Imgs/MoviesPageOpen/KantaraCast1.png"
import kanteramusic from "./../../assets/Imgs/MoviesPageOpen/KantaraMusic.png"

export default function MoviesPageInfo() {
  return (
  <div className='moviesInfoSA'>
    <div className='infoContentSA'>
       <div className='year'> 
        <img className='iconClender' src={clender}/>
        <h6 className='titleSA'>Released Year</h6>
        </div>
        <p className='pargraphSA'>2022</p>
    </div>

    <div className='infoLanguageSA'>
      <div className='year'>
      <img className='iconClender' src={languag}/>
     <h6 className='titleSA'>Available Languages</h6>
     </div>
     <div className='borderSA'>
        <div className='bordText'><p className='pargraphSA'>English</p></div>
        <div className='bordText'><p className='pargraphSA'>Hindi</p></div>
        <div className='bordText'><p className='pargraphSA'>Tamil</p></div>
        <div className='bordText'><p className='pargraphSA'>Telegu</p></div>
        <div className='bordText'><p className='pargraphSA'>Kannada</p></div>
       </div>
    </div>

    <div className='ratingSA'>
      <div className='year'>
      <img className='iconClender' src={rating}/>
     <h6 className='titleSA'>Ratings</h6>
     </div>
     <div className='borderRating'>  
      <div className='borderStar'>
      <p className='pargraphSA'>IMDb</p>
      <div className='controlStarParagraph'>
      <img className='iconStars' src={FourRating1}/>
      <p className='pargraphNumber'>4.5</p>
      </div>

      </div>
      <div className='borderStar'>
      <p className='pargraphSA'>Streamvibe</p>
      <div className='controlStarParagraph'>
      <img className='iconStars' src={FourRating2}/>
      <p className='pargraphNumber'>4</p>
      </div>
      </div>
      </div>
    </div>
    
    <div className='gernesSA'>
     <div className='year'>
      <img className='iconClender' src={gerne}/>
      <h6 className='titleSA'>Gernes</h6>
      </div>
      <div className='borderSA'>
        <div className='bordText'><p className='pargraphSA'>Action</p></div>
        <div className='bordText'><p className='pargraphSA'>Adventure</p></div>
     </div>
    </div>

    <div className='director'>
    <h6 className='titleSA'>Director</h6>
    <div className='bordLast'>
    <img className='photoSA' src={kantaraphoto}/>
    <div className='controlParagraphEnd'>
     <p className='paragraphEnd'>Rishab Shetty</p>
     <p className='paragraphENdia'>From India</p>
     </div>
    </div>
    </div>

    <div className='music'>
    <h6 className='titleSA'>Music</h6>
    <div className='bordLast'>
    <img className='photoSA' src={kanteramusic}/>
    <div className='controlParagraphEnd'>
     <p className='paragraphEnd'>B. Ajaneesh Loknath</p>
     <p className='paragraphENdia'>From India</p>
     </div>
    </div>
    </div>
   


  </div>
  )
}
