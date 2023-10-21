import Scroll from "./Scroll";
import SearchList from "./DiscoverList";
import React, { useState, useEffect } from 'react'
import axios from 'axios'; 
interface query{
    text:string  | undefined,
    language:string | null,
    page:number | null,
    sortby:string | undefined,
    sortdir:string | undefined
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
function DiscoverScroll(props:query){
  const [loading, setLoading] = useState(false); 
  const [movies, setMovies] = useState([]);
  
  useEffect(() => { 
    const loadMovies = async () => { 

        // Till the data is fetch using API  
        // the Loading page will show. 
        setLoading(true);
        if(props.text && props.page){
           var urltext = `http://127.0.0.1:4000/MovieFuel/discover?include=${props.text}&page=${props.page}&sortBy=${props.sortby}&sortDir=${props.sortdir}&exclude=""`;
           console.log(urltext)
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

        // After fetching data stored it in posts state. 
        setMovies(response.data.results); 

        // Closed the loading page 
        setLoading(false); 
    } 

    // Call the function 
    loadMovies(); 
}, [props.text,props.page,props.sortby,props.sortdir]); 
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

export default DiscoverScroll