import './FAQs.css'
import ACCO from '../FAQ_ACCO/ACCO' 
 
  //  const maba = [
  //   { number : '01' , 
  //     question : 'what is StreamVibe?',
  //     answer : "StreamVibe is a streaming service that allows you to watch movies and shows on demand "
  //   }, 

  //   { number : '02' , 
  //     question : "what is StreamVibe?",
  //     answer : "StreamVibe is a streaming service that allows you to watch movies and shows on demand "
  //   },

  //   { number : '03' , 
  //     question : "what is StreamVibe?",
  //     answer : "StreamVibe is a streaming service that allows you to watch movies and shows on demand "
  //   },

  //   { number : '04' , 
  //     question : "what is StreamVibe?",
  //     answer : "StreamVibe is a streaming service that allows you to watch movies and shows on demand "
  //   },

  //   {  number : '05' , 
  //     question : "what is StreamVibe?",
  //     answer : "StreamVibe is a streaming service that allows you to watch movies and shows on demand "
  //   },

  //   { number : '06' , 
  //     question : "what is StreamVibe?",
  //     answer : "StreamVibe is a streaming service that allows you to watch movies and shows on demand "
  //   },

  //   { number : '07' , 
  //     question : "what is StreamVibe?",
  //     answer : "StreamVibe is a streaming service that allows you to watch movies and shows on demand "
  //   },

  //   { number : '08' , 
  //     question : "what is StreamVibe?",
  //     answer : "StreamVibe is a streaming service that allows you to watch movies and shows on demand "
  //   },
    
  // ]
export default function FAQs() {
  return (
    <>
    <div className="xContainer customMargin">
      <div className="FAQ-top">
        <div className="faq-top-left">
          <h2>Frequently Asked Question</h2>
          <p>Got question? We`ve got answers!Checkout our FAQ section to find answers to 
            the most common questions about StreamVibe 
            </p>
        </div>
        <div className="faq-top-right">
          <button className='faq-button'>
            Ask a Question
          </button>
        </div>
      </div>
      </div>

      {/*/////////////////  */}

      <div className="FAQ-accordion">
        <div className="left-acco">
          <ACCO
          number = "01"
          que = "What is StreamVibe?"
          ans ="StreamVibe is a streaming
           service that allows you to watch movies
            and shows on demand."
            lin={true}
            state={false}
          ></ACCO>
          
          <ACCO
          number = "02"
          que = "How much does StreamVibe cost?"
          ans ="Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
           Voluptatum cumque similique,"
            lin={true}
          ></ACCO>

          <ACCO
          number = "03"
          que = "What content is available on StreamVibe?"
          ans ="Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
           Voluptatum cumque similique,"
            lin={true}
          ></ACCO>

          <ACCO
          number = "04"
          que = "How can I watch StreamVibe?"
          ans ="Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
           Voluptatum cumque similique,"
            lin={false}
          ></ACCO>
        </div>

        <div className="right-acco">
        <ACCO
          number = "05"
          que = "How do I sign up for StreamVibe?"
          ans ="Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
           Voluptatum cumque similique,"
            lin={true}
          ></ACCO>
          
          <ACCO
          number = "06"
          que = "What is the StreamVibe free trial?"
          ans ="Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
           Voluptatum cumque similique,"
            lin={true}
          ></ACCO>

          <ACCO
          number = "07"
          que = "How do I contact StreamVibe customer support?"
          ans ="Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
           Voluptatum cumque similique,"
            lin={true}
          ></ACCO>
          
          <ACCO
          number = "08"
          que = "What are the StreamVibe payment methods?"
          ans ="Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
           Voluptatum cumque similique,"
            lin={false}
          ></ACCO>
        </div>
        
      </div>
    
    
    </>
  )
}

