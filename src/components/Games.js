import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Dropdown,
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
} from "react-bootstrap";
import { useState } from "react";
import categories from "../api/categories";
import games from "../api/games";
import GameCard from "./GameCard";

export default function Games() {
  const [showSearch, setShowSearch] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSlideClick = (index) => {
    setSelectedSlide(index);
  };

  return (
    <>
      <div className="d-flex px-3 pt-3 position-sticky top-0 z-1 bg-white">
        <Button
          className={`search-btn d-flex flex-column align-items-center rounded-0`}
          onClick={toggleSearch}
        >
          <img src="./SVG ICONS/search.svg" className="img-fluid" width={20} />
          <span
            className={`${
              showSearch === true
                ? "text-primary border-bottom border-primary"
                : ""
            }`}
          >
            SEARCH
          </span>
        </Button>
        <div className="block"></div>
        <Swiper
          className="d-flex overflow-auto justify-content-evenly"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={5}
        >
          {categories.map((slide, index) => {
            return (
              <SwiperSlide
                key={index}
                className={`d-flex flex-column align-items-center ${
                  selectedSlide === index
                    ? "text-primary border-bottom border-primary"
                    : ""
                }`}
                onClick={() => handleSlideClick(index)}
              >
                <img
                  src={`./SVG ICONS/${slide.icon}`}
                  className="img-fluid"
                  width={20}
                />
                <span className={selectedSlide === index ? "text-primary" : ""}>
                  {slide.label}
                </span>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {showSearch && (
        <Dropdown.Menu
          show
          align="left"
          className="position-sticky dropdown-search"
        >
          <InputGroup>
            <InputGroup.Text>
              <img
                src="./SVG ICONS/search.svg"
                className="img-fluid"
                width={20}
              />
            </InputGroup.Text>
            <FormControl placeholder="Search games" aria-label="Search games" />
            <Button className="me-3">
              <img src="./SVG ICONS/game.svg" />
            </Button>
          </InputGroup>
        </Dropdown.Menu>
      )}
      <Container className="p-3">
        <Row>
          {games.map((game) => {
            console.log(game);
            return (
              <GameCard
                name={game.name}
                image={game.image}
                category={game.category}
                provider={game.provider}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
}
