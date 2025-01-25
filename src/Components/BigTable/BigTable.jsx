import './BigTable.css';

export default function BigTable() {
  const tableRows = [
    {
      feature: "Price",
      basic: "$9.99/Month",
      standard: "$12.99/Month",
      premium: "$14.99/Month",
    },
    {
      feature: "Content",
      basic: "Access to a wide selection of movies and shows, including some new releases.",
      standard:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
      premium:
        "Access to the widest selection of movies and shows, including all new releases and Offline Viewing.",
    },
    {
      feature: "Devices",
      basic: "Watch on one device simultaneously",
      standard: "Watch on two devices simultaneously",
      premium: "Watch on four devices simultaneously",
    },
    {
      feature: "Free Trial",
      basic: "7 Days",
      standard: "7 Days",
      premium: "7 Days",
    },
    {
      feature: "Cancel Anytime",
      basic: "Yes",
      standard: "Yes",
      premium: "Yes",
    },
    {
      feature: "HDR",
      basic: "No",
      standard: "Yes",
      premium: "Yes",
    },
    {
      feature: "Dolby Atmos",
      basic: "No",
      standard: "Yes",
      premium: "Yes",
    },
    {
      feature: "Ad-Free",
      basic: "No",
      standard: "Yes",
      premium: "Yes",
    },
    {
      feature: "Offline Viewing",
      basic: "No",
      standard: "Yes, for select titles.",
      premium: "Yes, for all titles.",
    },
    {
      feature: "Family Sharing",
      basic: "No",
      standard: "Yes, up to 5 family members.",
      premium: "Yes, up to 6 family members.",
    },
  ];

  return (
    <div className="big-table-dad">
      <table className="plan-table" aria-label="Subscription Plans Table">
        <thead>
          <tr>
            <th scope="col">Features</th>
            <th scope="col">Basic</th>
            <th scope="col">
              Standard <span className="spe-table">Popular</span>
            </th>
            <th scope="col">Premium</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => (
            <tr key={index} className="table-row">
              <td className="feature-column">{row.feature}</td>
              <td>{row.basic}</td>
              <td>{row.standard}</td>
              <td>{row.premium}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
