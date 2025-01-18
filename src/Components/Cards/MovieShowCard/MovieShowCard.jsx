import React from 'react'
import './MovieShowCard.css'
import clock from '../../../assets/Icons/clock.svg'
import seasonimg from '../../../assets/Icons/season.svg'
import viewsicon from '../../../assets/Icons/views.svg'

export default function MovieShowCard({ length, views, src, section, releaseDate, rating, seasons }) {
  return (
    <div className={section=="MustWatch" ? "MustWatchCard" : "MovieShowCard"}>
      <img className={section=="MustWatch" ? "mustWatchThumbnail" :"thumbnailImg"} src={src} alt="" />
      <div className='detailSection'>
        {
          section == "TrendingMovies" ?
            <>
              <div className='lengthTime'>
                <img src={clock} alt="" />
                <span>{length}</span>

              </div>
              <div className='viewCount'>
                <img src={viewsicon} alt="" />
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
                    <img src={clock} alt="" />
                    <span>{length}</span>

                  </div>
                  <div className='viewCount'>
                    <img  className='ratingImage' src={rating} alt="" />
                    <span>20k</span>
                  </div>

                </>
                :
                section == "NewReleasedShows" ?
                  <>
                    <div className='lengthTime'>
                      <img src={clock} alt="" />
                      <span>{length}</span>

                    </div>
                    <div className='viewCount'>
                      <img  src={seasonimg} alt="" />
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
