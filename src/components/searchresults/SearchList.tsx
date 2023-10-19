import React from 'react';
import SearchResult from './result';
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

function SearchList(resultlist: any) {
    console.log(resultlist.resultlist)
  const filtered = resultlist.resultlist.map((result:any) => SearchResult({...result})); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;