import Button from '../Buttons/Button'
import './CTA.css'
import CTAImg from '../../assets/Imgs/CTA.png';

export default function CTA() {
  return (
    <div className='ctaContainer'>
      <div className='ctaSA'>
      <div className='ctaBackgroundSA'><img src={CTAImg} alt="CTA" /></div>
     
       <div className="ctaOverlaySA"></div>
       <div className='ctaContentSA'>
        <div className='ctaTextSection'>
        <h6>Start your free trial today!</h6>
        <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
      </div>
      <Button text="Start a Free Trail" isFullWidth={false} isSmallerBorderRaduis={true} isBlack={false} />
      </div>
      </div>
    </div>
  );
}