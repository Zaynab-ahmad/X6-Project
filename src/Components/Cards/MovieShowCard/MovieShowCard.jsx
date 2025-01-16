import React from 'react'
import './MovieShowCard.css'
import image from '../../../assets/Imgs/Movies/MustWatchMovies2.png'
import clock from '../../../assets/Icons/clock.svg'
import views from '../../../assets/Icons/views.svg'

export default function MovieShowCard() {
  return (
    <div className='MovieShowCard'>
        <img className='thumbnailImg' src={image} alt="" />
        <div className='detailSection'>
            <div className='lengthTime'>
                <img src={clock} alt="" />
                <span>1h 30min</span>

            </div>
            <div className='viewCount'>
                <img src={views} alt="" />
                <span>2K</span>


            </div>
        </div>



    </div>
  )
}
