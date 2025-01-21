import "./DevicesCard.css";
export default function DevicesCard({ icon, title }) {
  return (
    <>
      <div className="CardTay">
        <div className="devicesCardOverlay"></div>
        <div className="devicesCard">
          <div className="CardTitleTay">
            <div className="CardIconTay">
              <img className="IconTay" src={icon} />
            </div>
            <h4 className="CardTitleH4Tay">{title}</h4>
          </div>
          <p className="CardPTay">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>
      </div>
    </>
  );
}
