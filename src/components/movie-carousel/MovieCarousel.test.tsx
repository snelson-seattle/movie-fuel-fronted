import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieCarousel from "./MovieCarousel";
import { Movie } from "../../types/Movie";

describe("MovieCarousel", () => {
  test("should display a carousel component", async () => {
    const movies: Movie[] = [
      {
        adult: false,
        backdrop_path: "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
        genre_ids: [35, 12, 14],
        id: 346698,
        original_language: "en",
        original_title: "Barbie",
        overview:
          "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        popularity: 988.258,
        poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        release_date: "2023-07-19",
        title: "Barbie",
        video: false,
        vote_average: 7.241,
        vote_count: 5408,
      },
    ];

    // Arrange
    render(
      <BrowserRouter>
        <MovieCarousel movies={movies} />
      </BrowserRouter>
    );

    // Act
    const carouselImg = screen.getByAltText(movies[0].original_title);

    // Assert
    expect(carouselImg).toBeInTheDocument();
  });
});
