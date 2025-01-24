import './BigTable.css'

export default function BigTable() {
  return (
    <>
      <div className="big-table-dad">
      <table className="plan-table">
      <thead>
        <tr>
          <th>Features</th>
          <th>Basic</th>
          <th>Standard <span className='spe-table'>Popular</span></th>
          <th>Premium</th>
        </tr>
      </thead>
      <tbody>
        <tr className='table-row'>
            <td>price</td>
            <td>$9.99/Month</td>
            <td>$12.99/Month</td>
            <td>$14.99/Month</td>
        </tr>
        <tr className='table-row'>
            <td>Content</td>
            <td>Access to a wide selection of movies and shows, including some new releases.</td>
            <td>Access to a wider selection of movies and shows, including most new releases and exclusive content</td>
            <td>Access to a widest selection of movies and shows, including all new releases and Offline Viewing</td>
        </tr>
        <tr className='table-row'>
            <td>Devices</td>
            <td>Watch on one device simultaneously</td>
            <td>Watch on Two device simultaneously</td>
            <td>Watch on Four device simultaneously</td>
        </tr>
        <tr className='table-row'>
            <td>Free Trail</td>
            <td>7 Days</td>
            <td>7 Days</td>
            <td>7 Days</td>
        </tr>
        <tr className='table-row'>
            <td>Cancel Anytime</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        <tr className='table-row'>
            <td>HDR</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        <tr className='table-row'>
            <td>Dolby Atmos</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        <tr className='table-row'>
            <td>Ad - Free</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        <tr className='table-row'>
            <td>Offline Viewing</td>
            <td>No</td>
            <td>Yes, for select titles.</td>
            <td>Yes, for all titles.</td>
        </tr>
        <tr className='table-row'>
            <td>Family Sharing</td>
            <td>No</td>
            <td>Yes, up to 5 family members.</td>
            <td>Yes, up to 6 family members.</td>
        </tr>
      </tbody>
    </table>
      </div>
    </>
  )
}
