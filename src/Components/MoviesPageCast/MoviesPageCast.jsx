import './MoviesPageCast.css'
import CastSlider from '../Sliders/CastSlider/CastSlider'
import { MoviesCast } from '../../Data/data'
import { ShowCast } from '../../Data/data'

export default function MoviesPageCast({ genre }) {
  const castData = genre === "movies" ? MoviesCast : ShowCast;

  return (
    <div className='moviesPageDes '>
      <h3 className='castTit'>
        Cast
      </h3>
      <CastSlider cast={castData} />

    </div>
  )
}
