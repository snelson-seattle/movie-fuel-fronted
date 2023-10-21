import Card from 'react-bootstrap/Card';
import DetailsCard from './DetailsCard';
import { collection, company, genre, country, language, fetchedMovie} from "../../types/movie_byID"


function BackdropCard({backdrop_path, ...props}:fetchedMovie) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="Movie Backdrop" />
      <Card.ImgOverlay>
        <DetailsCard {...props}/>
      </Card.ImgOverlay>
    </Card>
  );
}

export default BackdropCard;