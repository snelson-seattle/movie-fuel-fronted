import { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";
import { Button } from "react-bootstrap";
import MovieCarousel from "../movie-carousel/MovieCarousel";
import { Movie } from "../../types/Movie";

import "./hero.css";

const Hero = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getNowPlayingMovies = async () => {
    const response = await axios.get(
      "https://7dezero58a.execute-api.us-west-2.amazonaws.com/DEV/MovieFuel/nowPlaying"
    );
    setMovies(response.data);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-content_left">
          <h1>
            Real People <br /> Real Reviews
          </h1>
          <p className="text-warning">Seen any movies lately?</p>
          <div className="actions">
            <LinkContainer to="/Search/Barbie">
              <Button
                variant="danger"
                style={{ fontFamily: "Poppins, sans-serif" }}
                as="a"
              >
                WRITE A REVIEW
              </Button>
            </LinkContainer>
            <LinkContainer to="/reviews">
              <Button variant="outline-warning" as="a">
                READ REVIEWS
              </Button>
            </LinkContainer>
          </div>
        </div>
        <div className="hero-content_right">
          <h1 className="text-center font-weight-bold">Now Playing</h1>
          <MovieCarousel movies={movies} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
