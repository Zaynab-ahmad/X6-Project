<<<<<<< HEAD
<<<<<<< HEAD
import { Card, Container } from "react-bootstrap";
import "./MoviesPageDes.css";
=======
import './MoviesPageDes.css'
>>>>>>> ea3609b916cdd728a040950d3dd2f7e23a0ec515
=======
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import "./MoviesPageDes.css";
>>>>>>> f5913079834c0c3ad77d28cdf5007d41b2afa335

export default function MoviesPageDes({ des }) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Container className="mx-0 p-0 ml-pro w-pro">
      <Card className="mb-4 Des p-3">
        <Card.Title className="text-title">Description</Card.Title>
        <Card.Body className="p-0">
          <Card.Text className="text-light">
            A fiery young man clashes with an unflinching forest officer in a
            south Indian village where spirituality, fate and folklore rule the
            lands.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
=======
    <div className='moviesPageDes'>
      <h3 className='descriptionTit'>
        Description
      </h3>
      <p className='descriptionParag'>
        {des}
      </p>
      
    </div>
  )
>>>>>>> ea3609b916cdd728a040950d3dd2f7e23a0ec515
=======
    <div className="moviesPageDes">
      <ScrollAnimation>
        <h3 className="descriptionTit">Description</h3>
      </ScrollAnimation>
      <ScrollAnimation>
        <p className="descriptionParag">{des}</p>
      </ScrollAnimation>
    </div>
  );
>>>>>>> f5913079834c0c3ad77d28cdf5007d41b2afa335
}
