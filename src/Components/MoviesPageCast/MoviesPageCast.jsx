import KantaraCast1 from "../../assets/Imgs/MoviesPageOpen/KantaraCast1.png";
import KantaraCast2 from "../../assets/Imgs/MoviesPageOpen/KantaraCast2.png";
import KantaraCast3 from "../../assets/Imgs/MoviesPageOpen/KantaraCast3.png";
import KantaraCast4 from "../../assets/Imgs/MoviesPageOpen/KantaraCast4.png";
import KantaraCast5 from "../../assets/Imgs/MoviesPageOpen/KantaraCast5.png";
import KantaraCast6 from "../../assets/Imgs/MoviesPageOpen/KantaraCast6.png";
import KantaraCast7 from "../../assets/Imgs/MoviesPageOpen/KantaraCast7.png";
import KantaraCast8 from "../../assets/Imgs/MoviesPageOpen/KantaraCast8.png";
import KantaraMusic from "../../assets/Imgs/MoviesPageOpen/KantaraMusic.png";
/* import rightarrow from "../../assets/Icons/rightarrow.svg";
import leftarrow from "../../assets/Icons/leftarrow.svg"; */
import { Card, Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
/* import { useRef, useEffect } from "react"; */
import Slider from "react-slick";
import "./MoviesPageCast.css";

export default function MoviesPageCast() {
/*   const hiddenButton1Ref = useRef(null);
  const hiddenButton2Ref = useRef(null);
  useEffect(() => {
    const button1 = document.querySelector(".slick-next");
    const button2 = document.querySelector(".slick-prev");
    hiddenButton1Ref.current = button1;
    hiddenButton2Ref.current = button2;
  }, []);
  const handleClick1 = () => {
    if (hiddenButton1Ref.current) {
      hiddenButton1Ref.current.click();
    }
  };
  const handleClick2 = () => {
    if (hiddenButton2Ref.current) {
      hiddenButton2Ref.current.click();
    }
  }; */
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 325,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container className="ml- p-0 w-">
      <Row className="d-flex justify-content-start">
        <Col xs={12} sm={12} md={8} lg={6} className="w-100 p-0">
          <Card className="Con-slider">
            <Card.Body className="d-flex flex-column">
              <Col
                xs={12}
                sm={12}
                className="mb-4 d-flex justify-content-between align-items-center w-100 p-0">
                <Card.Title className="text-main w-25">Cast</Card.Title>
                {/* <div className=" arrow d-flex justify-content-end align-items-center w-25 m-2">
                  <Image
                    src={leftarrow}
                    alt="Left Arrow"
                    className="img-arrow"
                    onClick={handleClick1}
                  />
                  <Image
                    src={rightarrow}
                    alt="Right Arrow"
                    className="img-arrow"
                    onClick={handleClick2}
                  />
                </div> */}
              </Col>
              <Col xs={12} sm={12} className="p-0">
                <Slider {...settings} className="mx-2">
                  <Image src={KantaraCast1} alt="Kantara Cast 1" fluid />
                  <Image src={KantaraCast2} alt="Kantara Cast 2" fluid />
                  <Image src={KantaraCast3} alt="Kantara Cast 3" fluid />
                  <Image src={KantaraCast4} alt="Kantara Cast 4" fluid />
                  <Image src={KantaraCast5} alt="Kantara Cast 5" fluid />
                  <Image src={KantaraCast6} alt="Kantara Cast 6" fluid />
                  <Image src={KantaraCast7} alt="Kantara Cast 7" fluid />
                  <Image src={KantaraCast8} alt="Kantara Cast 8" fluid />
                  <Image src={KantaraMusic} alt="Kantara Music" fluid />
                </Slider>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
