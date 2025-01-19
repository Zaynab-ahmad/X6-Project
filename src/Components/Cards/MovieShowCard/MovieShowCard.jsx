import React from 'react'
import './MovieShowCard.css'
import clock from '../../../assets/Icons/clock.svg'
import seasonimg from '../../../assets/Icons/season.svg'
import viewsicon from '../../../assets/Icons/views.svg'

export default function MovieShowCard({ length, views, src, section, ratio, releaseDate, rating, seasons }) {
  return (
    <div className={section=="MustWatch" ? "MustWatchCard" : "MovieShowCard"}>
<img 
  className={
    ratio === "MustWatch"
      ? "mustWatchThumbnail"
      : ratio === "Movies"
      ? "moviesThumbnailImg"
      : ratio === "Shows"
      ? "showsThumbnailImg"
      : ""
  } 
  src={src} 
  alt="ThumbnailImg" 
/>      <div className='detailSection'>
        {
          section == "TrendingMovies" ?
            <>
              <div className='lengthTime'>
                <img src={clock} alt="clock" />
                <span>{length}</span>

              </div>
              <div className='viewCount'>
                <img src={viewsicon} alt="viewsicon" />
                <span>{views}</span>


              </div>
            </>
            :
            section == "NewReleases" ?
              <>
                <div className='releaseDate'>
                  <span>Released at {releaseDate}</span>

                </div>
              </>
              :
              section == "MustWatch" ?
                <>
                  <div className='lengthTime'>
                    <img src={clock} alt="clock" />
                    <span>{length}</span>

                  </div>
                  <div className='viewCount'>
                    <img  className='ratingImage' src={rating} alt="ratingImage" />
                    <span>20k</span>
                  </div>

                </>
                :
                section == "NewReleasedShows" ?
                  <>
                    <div className='lengthTime'>
                      <img src={clock} alt="clock" />
                      <span>{length}</span>

                    </div>
                    <div className='viewCount'>
                      <img  src={seasonimg} alt="seasonimg" />
                      <span>{seasons}</span>
                    </div>
                  </>
                  :
                  <>
                  </>
        }
      </div>



    </div>
  )
}
