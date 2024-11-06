import { Carousel, Container } from "react-bootstrap";

export default function Banner() {
  return (
    <>
      <Carousel className="text-center">
        <Carousel.Item className="px-3 pt-3 pb-1">
          <img src="./Frame 18.webp" className="img-fluid" />
        </Carousel.Item>
      </Carousel>
      <span className="notificationbar">
        <img src="./SVG ICONS/bell-svgrepo-com 1.svg" className="ps-3 pe-2" />
        <span>¡FELICIDADES artxxxxipa! GANADOR DESTACADO</span>
      </span>
    </>
  );
}
