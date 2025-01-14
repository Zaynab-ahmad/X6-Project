import './MoviesPageOpen.css'
import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

function MovieOpen(){
  return (
    <Container fluid className="py-4 movie-container text-light">
      <Row className="justify-content-center mb-4">
        <Col lg={8} md={10} sm={12}>
          <h2 className="mb-3">Description</h2>
          <p>
            A fiery young man clashes with an unflinching forest officer in a
            south Indian village where spirituality, fate, and folklore rule the
            lands.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-4">
          <h3>Cast</h3>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={10} md={12} sm={12}>
          <Carousel indicators={false} interval={3000} className="text-center">
            <Carousel.Item>
              <Row className="justify-content-center">
                {[...Array(4)].map((_, idx) => (
                  <Col key={idx} xs={6} sm={4} md={3} lg={2} className="mb-3">
                    <Card className="bg-dark text-white">
                      <Card.Img
                        src={`../../assets/Imgs/MoviesPageOpen/KantaraCast1.png`} // Replace with actual image URLs
                        alt="Cast Member"
                      />
                      <Card.Img
                        src={`../../assets/Imgs/MoviesPageOpen/KantaraCast2.png`} // Replace with actual image URLs
                        alt="Cast Member"
                      />
                      <Card.Img
                        src={`../../assets/Imgs/MoviesPageOpen/KantaraCast3.png`} // Replace with actual image URLs
                        alt="Cast Member"
                      />
                      <Card.Img
                        src={`../../assets/Imgs/MoviesPageOpen/KantaraCast4.png`} // Replace with actual image URLs
                        alt="Cast Member"
                      />
                      <Card.Img
                        src={`../../assets/Imgs/MoviesPageOpen/KantaraCast5.png`} // Replace with actual image URLs
                        alt="Cast Member"
                      />
                      <Card.Img
                        src={`../../assets/Imgs/MoviesPageOpen/KantaraCast6.png`} // Replace with actual image URLs
                        alt="Cast Member"
                      />
                      <Card.Img
                        src={`../../assets/Imgs/MoviesPageOpen/KantaraCast7.png`} // Replace with actual image URLs
                        alt="Cast Member"
                      />
                      <Card.Img
                        src={`../../assets/Imgs/MoviesPageOpen/KantaraCast8.png`} // Replace with actual image URLs
                        alt="Cast Member"
                      />
                      <Card.Body>
                        <Card.Title>Actor {idx + 1}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieOpen;