import { collection, company, genre, country, language, fetchedMovie} from "../../types/movie_byID"
import { Link } from 'react-router-dom'
function DetailsCard({poster_path, ...props}:fetchedMovie) {
  let genres = ""
  if(props.genres){
    for(let i=0;i<props.genres?.length;i++){
      genres += props.genres[i].name + ", "
    }
  }
  return (
    <div className="card mb-3" style={{ maxWidth: "67vw", backgroundColor: "rgba(0,0,0, 0.5)"}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} className="img-fluid rounded-start" alt="..."></img>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{props.tagline}</h5>
          <p className="card-text">{props.overview}</p>
          <p className="card-text">Runtime: {props.runtime} minutes</p>
          <p className="card-text">Budget: ${props.budget}&nbsp;&nbsp;&nbsp;&nbsp; Box office revenue: ${props.revenue}</p>
          <p className="card-text">Average Rating: {props.vote_average}&nbsp;&nbsp;&nbsp;&nbsp; Based on {props.vote_count} votes</p>
          <p className="card-text">Genres: {genres}</p>
        </div>
        <Link to={`https://www.imdb.com/title/${props.imdb_id}`} target="_blank">
          <button type="button" className="btn btn-warning">Go to IMDB page</button>
        </Link>
      </div>
    </div>
  </div>
  );
}

export default DetailsCard;