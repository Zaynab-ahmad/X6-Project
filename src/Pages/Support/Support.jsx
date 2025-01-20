import FAQs from '../../Components/FAQs/FAQs'
import SupportForm from '../../Components/SupportForm/SupportForm'
import SupportWelcome from '../../Components/SupportWelcome/SupportWelcome'
import './Support.css'

export default function Support() {
  return (
    <>
    <div className='xContainer customMargin SupportTop'>
      
      <SupportWelcome/>
      <SupportForm/>

    </div>
    <FAQs/>
    </>
  )
}
