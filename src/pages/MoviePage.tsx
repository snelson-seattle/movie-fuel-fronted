import { useParams, useNavigate } from "react-router-dom";
import BackdropCard from "../components/MovieCard/BackdropCard";
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { collection, company, genre, country, language, fetchedMovie} from "../types/movie_byID"

function MoviePage(){
    let movieID = useParams();
    const [loading, setLoading] = useState(false); 
    const [movie, setMovie] = useState <fetchedMovie>();
    useEffect(() => { 
        const loadMovies = async () => { 
            setLoading(true);
            var urltext = `http://35.91.76.180/MovieFuel/search/byID?idnumber=${movieID.tmdb_id}`;
            const response = await axios({
              method: 'get',
              url: urltext,
              withCredentials: false
            })
            setMovie(response.data); 
            setLoading(false); 
        } 
    
        // Call the function 
        loadMovies(); 
    }, []);
    return(
        <>
         {
         loading ? ( 
                <h4>Loading...</h4>) :
        (<>
        <BackdropCard {...movie}/>
        </>)
         }
        </>
        
    )
}
export default MoviePage