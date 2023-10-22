import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import renderer, { act } from 'react-test-renderer';
import { Movie } from "../../types/Movie";

import Hero from "./Hero";

describe("Hero", () => {
  test("should display hero component", async () => {
    const imagePath: string = "https://image.tmdb.org/t/p/original";
    const movies: Movie[] = [
      {
        adult: false,
        backdrop_path: imagePath + "/mRGmNnh6pBAGGp6fMBMwI8iTBUO.jpg",
        genre_ids: [27, 9648, 53],
        id: 968051,
        original_language: "en",
        original_title: "The Nun II",
        overview:
          "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
        popularity: 5953.02,
        poster_path: imagePath + "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
        release_date: "2023-09-06",
        title: "The Nun II",
        video: false,
        vote_average: 7,
        vote_count: 727,
      },
      {
        adult: false,
        backdrop_path: imagePath + "/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg",
        genre_ids: [28, 18],
        id: 678512,
        original_language: "en",
        original_title: "Sound of Freedom",
        overview:
          "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
        popularity: 3510.312,
        poster_path: imagePath + "/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg",
        release_date: "2023-07-03",
        title: "Sound of Freedom",
        video: false,
        vote_average: 8.1,
        vote_count: 740,
      },
      {
        adult: false,
        backdrop_path: imagePath + "/cHNqobjzfLj88lpIYqkZpecwQEC.jpg",
        genre_ids: [28, 53, 80],
        id: 926393,
        original_language: "en",
        original_title: "The Equalizer 3",
        overview:
          "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
        popularity: 2686.985,
        poster_path: imagePath + "/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
        release_date: "2023-08-30",
        title: "The Equalizer 3",
        video: false,
        vote_average: 7.3,
        vote_count: 570,
      },
      {
        adult: false,
        backdrop_path: imagePath + "/dWnABFqQN6Hu8eIIiFAMil7lUXO.jpg",
        genre_ids: [12, 28, 18],
        id: 980489,
        original_language: "en",
        original_title: "Gran Turismo",
        overview:
          "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
        popularity: 2590.009,
        poster_path: imagePath + "/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
        release_date: "2023-08-09",
        title: "Gran Turismo",
        video: false,
        vote_average: 8,
        vote_count: 908,
      },
    ];

    const axiosGetSpy = jest
      .spyOn(axios, "get")
      .mockResolvedValueOnce({ data: movies });

    let component: any;

    await act(async () => {
      component = renderer.create(
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      );
    });

     // Assert
    expect(axiosGetSpy).toBeCalledWith(
      "http://localhost:4000/MovieFuel/nowPlaying"
    );

    expect(component.toJSON()).toMatchSnapshot();
    axiosGetSpy.mockRestore();
  });
});
