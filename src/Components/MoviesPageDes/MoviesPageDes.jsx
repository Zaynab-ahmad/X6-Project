import './MoviesPageDes.css'

export default function MoviesPageDes({des}) {
  return (
    <div className='moviesPageDes'>
      <h3 className='descriptionTit'>
        Description
      </h3>
      <p className='descriptionParag'>
        {des}
      </p>
      
    </div>
  )
}
