import BigTable from '../BigTable/BigTable';
import SmlTable from '../SmlTable/SmlTable';
import './SubTable.css'
export default function SubTable() {

  return (
    <>
      <div className="xContainer customMargin">
        <h2 className='plans-h2'>Compare our plans and find the right one for you</h2>
        <p className='plans-para'>
        StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that&apos;s right for you.
        </p>

        <BigTable className="big-screen-table"></BigTable>
        <SmlTable className="small-screen-table"></SmlTable>
    </div> 
    </>
  )
}
