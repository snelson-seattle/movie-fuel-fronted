import { original } from '@reduxjs/toolkit'
import React from 'react'
import { Card, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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


function DiscoverResult(movie: resultItem) {


  return (
    <Card key={movie.id} style={{width: "60rem", backgroundColor: "black"}}>
        {/* Card Header */}SearchResult
        <Card.Header>
            <Card.Title as="h3" className='text-light'>{`${movie.original_title}`}</Card.Title>
        </Card.Header>
        <Card.Body>
            <div className="d-flex align-items-center">
                <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt='Movie Poster' className='mr-3 d-flex '
                    style={{width: 120, height: 180}} rounded
                />
                <Card.Text style={{fontSize : 24}} className='mr-9 text-light'>
                {`${movie.overview}`}
                </Card.Text>
            </div>
        </Card.Body>
        <Card.Body className='mb-0 pt-0'>
            <p className='text-light'> Rating: {`${movie.vote_average}`}
                <span className='text-light'> Based on: {`${movie.vote_count}`} votes</span> 
            </p>
            
            
        </Card.Body>
        <Card.Footer className='d-flex justify-content-start'>
            <Link to={`/movies/${movie.id}`}>
                <Button variant='danger' className='mt-0'>Go to review page</Button>
            </Link>
            <Link to={`/discover/${movie.genre_ids}`}>
                <Button variant='secondary'>Find similar movies</Button>
            </Link>
            <Link to={`/Reviews`}>
                <Button variant='secondary'>Review This Movie</Button>
            </Link>
        </Card.Footer>
    </Card>
  )

}

export default DiscoverResult