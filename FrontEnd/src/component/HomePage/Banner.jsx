import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'; // Import custom styles
import bridge from '../../asset/bridge-6314795_1280.jpg'

const Banner = () => {
  return (
    <Carousel data-bs-theme="dark" className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-img"
          src={bridge}
          alt="Luxury Cars"
        />
        <Carousel.Caption>
          <h3 className="custom-carousel-title">Experience Luxury</h3>
          <p className="custom-carousel-text">Drive in style with our premium car rentals.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-img"
          src={bridge}
          alt="Affordable Prices"
        />
        <Carousel.Caption>
          <h3 className="custom-carousel-title">Unbeatable Prices</h3>
          <p className="custom-carousel-text">Get the best deals on car rentals today.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-img"
          src={bridge}
          alt="Adventure Awaits"
        />
        <Carousel.Caption>
          <h3 className="custom-carousel-title">Adventure Awaits</h3>
          <p className="custom-carousel-text">Explore new places with our reliable rentals.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
