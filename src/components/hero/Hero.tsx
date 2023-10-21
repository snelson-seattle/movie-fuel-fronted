import {useState, useEffect} from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import MovieCarousel from "../movie-carousel/MovieCarousel";
import { Movie } from "../../types/Movie";

import "./hero.css";

const Hero = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovieData = async () => {
    const response = await axios.get("http://localhost:4000/MovieFuel/nowPlaying");
    setMovies(response.data);
  }

  useEffect(() => {
    getMovieData();
  }, [])


  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-content_left">
          <h1>
            Real People <br /> Real Reviews
          </h1>
          <p className="text-warning">Seen any movies lately?</p>
          <div className="actions">
            <Button
              variant="danger"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              WRITE A REVIEW
            </Button>
            <Button variant="outline-warning">READ REVIEWS</Button>
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
