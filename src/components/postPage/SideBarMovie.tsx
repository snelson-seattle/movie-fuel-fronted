import React, { useEffect } from 'react'
import { Card, Button} from 'react-bootstrap'
import imageUrl from './sothebys-md.brightspotcdn.jpg';
import { useGetMovieByIDMutation } from '../../state/movieAPI/movieApiSlice';
import { Movie, Genre} from '../../types/Movie';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
type sideBarProps = {
  movieID: number
}

interface movieIdResponse {
  data : Movie
}

function SideBarMovie({movieID}: sideBarProps) {
    const [movieImage, setMovieImage] = React.useState<string>("https://via.placeholder.com/150");
    const [movieTitle, setMovieTitle] = React.useState<string>("Loading Movie Title...");
    const [movieDescription, setMovieDescription] = React.useState<string>("Loading Movie Description...");
    const [movieImdb, setMovieImdb] = React.useState<string>("https://via.placeholder.com/150");
    const [releaseDate, setReleaseDate] = React.useState<string>("Loading Movie Release Date...");
    const [runTime, setRunTime] = React.useState<number>(0);
    const [genres, setGenres] = React.useState<string>(""); // this was props in the begining
    const [fetchMovieByID] = useGetMovieByIDMutation();

    const getTop3Genres = (genres: Genre[]) => {
      // use map to return only 3 genres from the genres array
      const top3Genres = genres.length >= 3 ? genres.slice(0,3).map((genre) => genre.name) 
        : genres.map((genre) => genre.name);
      return top3Genres;
    }
    const handleFetch = async () => {
      const dataResponse = await fetchMovieByID(movieID) as movieIdResponse;
      console.log("this is data from SIDEBARMOVIE \n",dataResponse);
      const posterPath = "https://image.tmdb.org/t/p/original/" + dataResponse.data.poster_path;
      const imbdPath = "https://www.imdb.com/title/" + dataResponse.data.imdb_id;
      const top3Genres = getTop3Genres(dataResponse.data.genres!);
      setGenres(top3Genres.join(", "));
      setRunTime(dataResponse.data.runtime!)
      setReleaseDate(dataResponse.data.release_date)
      setMovieImdb(imbdPath)
      setMovieTitle(dataResponse.data.title)
      setMovieDescription(dataResponse.data.overview)
      setMovieImage(posterPath);        
  }
    useEffect(() => {
        handleFetch();

    },[])

  return (
    <Card style={{ width: '18rem' }} className='text-dark px-3'>
    <Card.Header className='bg-body'>
        <Card.Title className='text-center mb-3'>{movieTitle}</Card.Title>
        <Card.Title className='text-center fs-6'>{releaseDate}, {genres}, Runtime {runTime}m</Card.Title>
    </Card.Header>
      <Card.Img variant="top" src={movieImage}/>
      <Card.Body className='d-flex flex-column align-items-center'>
        {/* No director header because need another endpoint */}
        {/* <Card.Title className='fs-5 mb-3'>Director: Ridley Scott</Card.Title> */}
        <Card.Text className='bg-light'>
          {movieDescription}
        </Card.Text>
        <LinkContainer to={`/Movies/${movieID}`}>
        <Button variant="primary" className="mt-3">Go To Movie Page</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  )
}

export default SideBarMovie