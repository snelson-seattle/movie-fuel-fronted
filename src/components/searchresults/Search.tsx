import Scroll from "./Scroll";
import SearchList from "./SearchList";
import FetchResults from "./FetchResults";
import React, { useState, useEffect } from 'react'
import axios from 'axios'; 
interface query{
    text:string | null,
    language:string | null,
    page:number | null
}
interface resultItem {
    adult: boolean,
    backdrop_path: string | null,
    genre_ids: number[] | number,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}
function SearchPage(props:query){
  const [loading, setLoading] = useState(false); 
  const [movies, setMovies] = useState([]);
  
  useEffect(() => { 
    const loadMovies = async () => { 

        // Till the data is fetch using API  
        // the Loading page will show. 
        setLoading(true);
        if(props.text && props.language && props.page){
           var urltext = `http://127.0.0.1:4000/MovieFuel/search?search=${props.text}&page=${props.page}`;
         }
         else{
          var urltext = `http://127.0.0.1:4000/MovieFuel/search?search=barbie&page=1`;
         }
        
        // Await make wait until that  
        // promise settles and return its result
        //axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8'
        //axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        const response = await axios({
          method: 'get',
          url: urltext,
          withCredentials: false
        })
        console.log(response) 

        // After fetching data stored it in posts state. 
        setMovies(response.data.results); 

        // Closed the loading page 
        setLoading(false); 
    } 

    // Call the function 
    loadMovies(); 
}, []); 
      return(
      <> 
        <div className="App"> 
            {loading ? ( 
                <h4>Loading...</h4>) : 
                (<Scroll>
                  <SearchList resultlist={movies} />
                </Scroll>
                ) 
              } 
        </div> 
      </> )
    
}

export default SearchPage