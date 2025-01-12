import { useState } from 'react'
import './ACCO.css'
import plus from '../../assets/Icons/plus.svg'
import minus from '../../assets/Icons/minus.svg'


export default function ACCO( {number , que , ans , lin , state}) {
const [isopen , setisopen] = useState(false) ; 

  return (
    <>
    
    <div onClick={ () => setisopen(!isopen)} 
    className="accordion">
        <div className="accordion-num">
            {number}
        </div>
        <div className="accordion-body">
            <div
            className="accordion-que">
            {que}
            </div>
            {
                isopen && (
                    <div className="accordion-ans">
                        {ans}
                    </div>
                )
            }
        </div>
       <div className="accordion-state">
            <img src= {isopen ? minus : plus} alt="indecators" />
           
       </div>
      </div>
      {/* <img src={line} alt="line" 
          className={lin ? "FAQ-line" : "hide"}
          /> */}
          <div className={lin ? "FAQ-line" : "hide"}>
          </div>
    </>
  )
}
