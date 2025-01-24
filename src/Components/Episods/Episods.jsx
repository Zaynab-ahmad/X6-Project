import './Episods.css'
import ShowsChapter from "../../Components/ShowsChapter/ShowsChapter";
export default function Episods() {
  return (
    <div className='episodsSecZA'>
       <h3 className='EpHeader'>Seasons and Episodes</h3>
              <ShowsChapter Season="1" epnum="9" />
              <ShowsChapter Season="2" epnum="5" />
              <ShowsChapter Season="3" epnum="7" />
    </div>
  )
}
