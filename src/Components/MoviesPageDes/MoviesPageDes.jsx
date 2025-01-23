import { Card, Container } from "react-bootstrap";
import "./MoviesPageDes.css";

export default function MoviesPageDes() {
  return (
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
}
