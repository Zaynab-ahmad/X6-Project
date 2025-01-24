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
import Director2 from '../../assets/Imgs/ShowsPageOpen/StrangerThingsDirector.png'
import Music1 from '../../assets/Imgs/ShowsPageOpen/StrangerThingsMusic.png'

export default function MoviesPageInfo({genre}) {
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
        <div className='bordText'><p className='pargraphBordeSA'>English</p></div>
        <div className='bordText'><p className='pargraphBordeSA'>Hindi</p></div>
        <div className='bordText'><p className='pargraphBordeSA'>Tamil</p></div>
        <div className='bordText'><p className='pargraphBordeSA'>Telegu</p></div>
        <div className='bordText'><p className='pargraphBordeSA'>Kannada</p></div>
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
        <div className='borderSA' style={{display: genre === "movies" ? 'flex' : 'none'}}>
        <div className='bordText'><p className='pargraphBordeSA'>Action</p></div>
        <div className='bordText'><p className='pargraphBordeSA'>Adventure</p></div>
        </div>
        <div className='borderSA' style={{display: genre === "movies" ? 'none' : 'flex'}}>
        <div className='bordText'><p className='pargraphBordeSA'>Sci-Fi TV</p></div>
        <div className='bordText'><p className='pargraphBordeSA'>Teen TV Shows</p></div>
        <div className='bordText'><p className='pargraphBordeSA'>US TV Shows</p></div>    
     </div>
    </div>
    <div className='director'>
    <h6 className='titleSA year'>Director</h6>
    <div className='bordLast'>
    <img className='photoSA' src={genre === "movies" ? kantaraphoto : Director2} />
    <div className='controlParagraphEnd'>
     <p className='paragraphEnd'>{genre === "movies" ? "Rishab Shetty" : "The Duffer Brothers"}</p>
     <p className='paragraphENdia'>{genre === "movies" ? "From India" : "From USA"}</p>
     </div>
    </div>
    </div>
    <div className='music'>
    <h6 className='titleSA year'>Music</h6>
    <div className='bordLast'>
    <img className='photoSA' src={genre==="movies"? kanteramusic: Music1} />
    <div className='controlParagraphEnd'>
     <p className='paragraphEnd'>{genre =="movies"? "B. Ajaneesh Loknath": "Kyle Dixon"}</p>
     <p className='paragraphENdia'>{genre === "movies" ? "From India" : "From USA"}</p>
     </div>
    </div>
    </div>
  </div>
  )
}
