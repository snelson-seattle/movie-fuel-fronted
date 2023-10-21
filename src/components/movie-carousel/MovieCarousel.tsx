import { Carousel } from "react-bootstrap";
import { Movie } from "../../types/Movie";
import { Link } from "react-router-dom"

import "./moviecarousel.css";

type Props = { movies: Movie[]};

export default function MovieCarousel({ movies }: Props) {
  return (
    <Carousel className="carousel" controls={false} indicators={false} interval={3000}>
      {movies.map((movie) => {
        return (
          <Carousel.Item key={movie.id} className="border border-warning rounded overflow-hidden">
            <Link to={`/movies/${movie.id}`}>
            <img
              height={500}
              className="d-block w-100"
              src={movie.poster_path}
              alt={movie.title}
            />
            </Link>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}