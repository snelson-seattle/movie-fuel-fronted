import React, { useEffect, useState } from 'react'
import { Review } from '../../types/Review'
import { Card, Col, Row, Image, Button } from 'react-bootstrap'
import { useGetMovieByIDMutation } from '../../state/movieAPI/movieApiSlice';
import { Movie } from '../../types/Movie';
import { Link } from 'react-router-dom';
import { text } from 'stream/consumers';

interface movieIdResponse {
    data : Movie
}

function ReviewMovieCard({PostID, Author, Likes, Movie, Comment, Title, DateTime}: Review ) {
    const [fetchMovieByID] = useGetMovieByIDMutation();
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };
    
    // Fetch movie image from Movie
    const [movieImage, setMovieImage] = React.useState<string>("https://via.placeholder.com/150");
    useEffect(() => {
        handleFetch();

    },[])

    const handleFetch = async () => {
        const dataResponse = await fetchMovieByID(Movie) as movieIdResponse;
        console.log("this is data from movie card \n",dataResponse);
        const poster_path = "https://image.tmdb.org/t/p/original/" + dataResponse.data.poster_path;
        
        setMovieImage(poster_path);        
    }

    const date = new Date(DateTime);
  return (
    <Link to={`/reviews/${PostID}`} style={{ textDecoration: 'none' }}>
        <Card className='text-dark mb-4'>
            <Row>
                <Col md={2}>
                    <Image fluid src={movieImage} style={{ width: 'auto', height: 'auto' }} />
                </Col>
            
                <Col md={8}>
                    <Card.Body>                
                        <Card.Title>{Title}</Card.Title>
                        <div className='d-flex align-items-center' style={{fontSize:24}}>
                            <p className='me-3' style={{fontSize:36, fontWeight:700}}>{Author}</p>
                            <p className='me-3' style={{fontSize:15.5}}>{PostID.slice(0,8)}</p>
                            <p style={{fontSize:15.5}}>{date.toUTCString()}</p>
                        </div>
                        <Card.Text>
                            {/* Vary comment size */}
                            {expanded ? Comment : Comment.slice(0, 500) + (Comment.length > 500 ? '...' : '')}
                            {Comment.length >500 && (
                                <Button variant='link' onClick={toggleExpand}>
                                    {expanded ? 'Read less' : 'Read more'}
                                </Button>
                            )}
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </Link>
   
  )
}

export default ReviewMovieCard