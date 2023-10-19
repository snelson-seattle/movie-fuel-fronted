import { Button } from "react-bootstrap";
import MovieCarousel from "../movie-carousel/MovieCarousel";
import { Movie } from "../../types/Movie";

import "./hero.css";

let imagePath: string = "https://image.tmdb.org/t/p/original";

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
  {
    adult: false,
    backdrop_path: imagePath + "/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg",
    genre_ids: [27, 53],
    id: 1008042,
    original_language: "en",
    original_title: "Talk to Me",
    overview:
      "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
    popularity: 2277.741,
    poster_path: imagePath + "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
    release_date: "2023-07-26",
    title: "Talk to Me",
    video: false,
    vote_average: 7.2,
    vote_count: 1132,
  },
  {
    adult: false,
    backdrop_path: imagePath + "/1syW9SNna38rSl9fnXwc9fP7POW.jpg",
    genre_ids: [28, 878, 12],
    id: 565770,
    original_language: "en",
    original_title: "Blue Beetle",
    overview:
      "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
    popularity: 2211.475,
    poster_path: imagePath + "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
    release_date: "2023-08-16",
    title: "Blue Beetle",
    video: false,
    vote_average: 7.1,
    vote_count: 1200,
  },
  {
    adult: false,
    backdrop_path: imagePath + "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
    genre_ids: [28, 878, 27],
    id: 615656,
    original_language: "en",
    original_title: "Meg 2: The Trench",
    overview:
      "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
    popularity: 1707.307,
    poster_path: imagePath + "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
    release_date: "2023-08-02",
    title: "Meg 2: The Trench",
    video: false,
    vote_average: 6.9,
    vote_count: 2173,
  },
  {
    adult: false,
    backdrop_path: imagePath + "/jkKVLzLWjSvTnc84VzeljhSy6j8.jpg",
    genre_ids: [10749, 18],
    id: 820525,
    original_language: "en",
    original_title: "After Everything",
    overview:
      "Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.",
    popularity: 1488.086,
    poster_path: imagePath + "/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg",
    release_date: "2023-09-13",
    title: "After Everything",
    video: false,
    vote_average: 6.9,
    vote_count: 203,
  },
  {
    adult: false,
    backdrop_path: imagePath + "/eSsMzJpzAwCa69tm6Wco2il44aJ.jpg",
    genre_ids: [28, 80, 18, 53],
    id: 939335,
    original_language: "en",
    original_title: "Muzzle",
    overview:
      "LAPD K-9 officer Jake Rosser has just witnessed the shocking murder of his dedicated partner by a mysterious assailant. As he investigates the shooter’s identity, he uncovers a vast conspiracy that has a chokehold on the city in this thrilling journey through the tangled streets of Los Angeles and the corrupt bureaucracy of the LAPD.",
    popularity: 1294.257,
    poster_path: imagePath + "/qXChf7MFL36BgoLkiB3BzXiwW82.jpg",
    release_date: "2023-09-29",
    title: "Muzzle",
    video: false,
    vote_average: 6.3,
    vote_count: 20,
  },
  {
    adult: false,
    backdrop_path: imagePath + "/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
    genre_ids: [28, 9648, 53, 80],
    id: 762430,
    original_language: "en",
    original_title: "Retribution",
    overview:
      "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks. With his kids trapped in the back seat and a bomb that will explode if they get out of the car, a normal commute becomes a twisted game of life or death as Matt follows the stranger's increasingly dangerous instructions in a race against time to save his family.",
    popularity: 1179.834,
    poster_path: imagePath + "/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg",
    release_date: "2023-08-23",
    title: "Retribution",
    video: false,
    vote_average: 6.8,
    vote_count: 302,
  },
  {
    adult: false,
    backdrop_path: imagePath + "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
    genre_ids: [35, 12, 14],
    id: 346698,
    original_language: "en",
    original_title: "Barbie",
    overview:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    popularity: 1115.152,
    poster_path: imagePath + "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    release_date: "2023-07-19",
    title: "Barbie",
    video: false,
    vote_average: 7.3,
    vote_count: 5272,
  },
  {
    adult: false,
    backdrop_path: imagePath + "/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg",
    genre_ids: [27, 53],
    id: 951491,
    original_language: "en",
    original_title: "Saw X",
    overview:
      "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
    popularity: 938.895,
    poster_path: imagePath + "/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
    release_date: "2023-09-26",
    title: "Saw X",
    video: false,
    vote_average: 7.2,
    vote_count: 113,
  },
  {
    adult: false,
    backdrop_path: imagePath + "/f33XdT6dwNXmXQNvQ4FuyhQrUob.jpg",
    genre_ids: [27],
    id: 807172,
    original_language: "en",
    original_title: "The Exorcist: Believer",
    overview:
      "When his daughter, Angela, and her friend Katherine, show signs of demonic possession, it unleashes a chain of events that forces single father Victor Fielding to confront the nadir of evil. Terrified and desperate, he seeks out Chris MacNeil, the only person alive who's witnessed anything like it before.",
    popularity: 797.173,
    poster_path: imagePath + "/lxRLC3WOFM2INoyEa3bFGIUApvn.jpg",
    release_date: "2023-10-04",
    title: "The Exorcist: Believer",
    video: false,
    vote_average: 5.4,
    vote_count: 38,
  },
  {
    adult: false,
    backdrop_path: imagePath + "/mzlZAMjE2yk2sW3f9HTeBM3B3jw.jpg",
    genre_ids: [14, 35],
    id: 616747,
    original_language: "en",
    original_title: "Haunted Mansion",
    overview:
      "A woman and her son enlist a motley crew of so-called spiritual experts to help rid their home of supernatural squatters.",
    popularity: 736.523,
    poster_path: imagePath + "/8Im6DknDVxRiGXc5t8rVOJyzuNx.jpg",
    release_date: "2023-07-26",
    title: "Haunted Mansion",
    video: false,
    vote_average: 6.8,
    vote_count: 350,
  },
  {
    adult: false,
    backdrop_path: imagePath + "/jP3FatCTHc460ZGW57q9ypTdBqu.jpg",
    genre_ids: [53, 878],
    id: 937249,
    original_language: "en",
    original_title: "57 Seconds",
    overview:
      "When a tech blogger lands an interview with a tech guru and stops an attack on him, he finds a mysterious ring that takes him back 57 seconds into the past.",
    popularity: 720.034,
    poster_path: imagePath + "/dfS5qHWFuXyZQnwYREwb7N4qU5p.jpg",
    release_date: "2023-09-29",
    title: "57 Seconds",
    video: false,
    vote_average: 5.7,
    vote_count: 39,
  },
  {
    adult: false,
    backdrop_path: imagePath + "/oghHR3X0hIcvs7xqyoFjA0GAZWn.jpg",
    genre_ids: [53],
    id: 1002338,
    original_language: "is",
    original_title: "Napóleonsskjölin",
    overview:
      "A modern-day lawyer is sucked into an international conspiracy after being accused of a murder she didn't commit. Her only chance of freedom lies in uncovering the secret of an old German WWII aeroplane, long buried deep beneath the ice, before the CIA.",
    popularity: 677.361,
    poster_path: imagePath + "/j2Or0w69bpPXrmkE0hpTzw6hzsr.jpg",
    release_date: "2023-01-26",
    title: "Operation Napoleon",
    video: false,
    vote_average: 7,
    vote_count: 25,
  },
  {
    adult: false,
    backdrop_path: imagePath + "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    genre_ids: [16, 10751, 12, 14, 35],
    id: 502356,
    original_language: "en",
    original_title: "The Super Mario Bros. Movie",
    overview:
      "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    popularity: 598.654,
    poster_path: imagePath + "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    release_date: "2023-04-05",
    title: "The Super Mario Bros. Movie",
    video: false,
    vote_average: 7.8,
    vote_count: 6820,
  },
  {
    adult: false,
    backdrop_path: imagePath + "/Ah0T0ukrQbwPwuBeWi8tIsqy90R.jpg",
    genre_ids: [16, 35],
    id: 923579,
    original_language: "ru",
    original_title: "Коты Эрмитажа",
    overview:
      "A cartoon about the famous four-legged inhabitants of the St. Petersburg Winter Palace - museum cats that protect the territory of the State Hermitage from rats and mice.",
    popularity: 555.118,
    poster_path: imagePath + "/xEyGkeCaqwV4IdjS7dP8YswXWOU.jpg",
    release_date: "2023-03-23",
    title: "Cats in the Museum",
    video: false,
    vote_average: 7.3,
    vote_count: 26,
  },
  {
    adult: false,
    backdrop_path: imagePath + "/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
    genre_ids: [28, 53, 80],
    id: 603692,
    original_language: "en",
    original_title: "John Wick: Chapter 4",
    overview:
      "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    popularity: 541.31,
    poster_path: imagePath + "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    release_date: "2023-03-22",
    title: "John Wick: Chapter 4",
    video: false,
    vote_average: 7.8,
    vote_count: 4691,
  },
  {
    adult: false,
    backdrop_path: imagePath + "/c6Splshb8lb2Q9OvUfhpqXl7uP0.jpg",
    genre_ids: [28, 53],
    id: 717930,
    original_language: "en",
    original_title: "Kandahar",
    overview:
      "After his mission is exposed, an undercover CIA operative stuck deep in hostile territory in Afghanistan must fight his way out, alongside his Afghan translator, to an extraction point in Kandahar, all whilst avoiding elite enemy forces and foreign spies tasked with hunting them down.",
    popularity: 534.807,
    poster_path: imagePath + "/lCanGgsqF4xD2WA5NF8PWeT3IXd.jpg",
    release_date: "2023-05-25",
    title: "Kandahar",
    video: false,
    vote_average: 6.9,
    vote_count: 613,
  },
];

const Hero = () => {
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
