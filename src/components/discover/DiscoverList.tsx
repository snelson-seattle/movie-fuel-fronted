import React from 'react';
import DiscoverResult from './DiscoverResult';
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

function DiscoverList(resultlist: any) {
    console.log("This is the result list", resultlist.resultlist)
  const filtered = resultlist.resultlist.map((result:any) => DiscoverResult({...result})); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default DiscoverList;