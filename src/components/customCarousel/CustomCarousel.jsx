import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/pic1.jpeg";
import img2 from "../../assets/pic 2.jpg";
import img3 from "../../assets/pic 3.jpg";
import img4 from "../../assets/image 4.jpg";

export const CustomCarousel = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="first slide" />
        <Carousel.Caption className="bg-dark p-2 rounded text-light opacity-2">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="first slide" />
        <Carousel.Caption className="bg-dark p-2 rounded text-light opacity-2">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="first slide" />
        <Carousel.Caption className="bg-dark p-2 rounded text-light opacity-2">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="first slide" />
        <Carousel.Caption className="bg-dark p-2 rounded text-light opacity-2">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
