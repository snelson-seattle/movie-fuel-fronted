import React, {FormEvent, useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useGetMovieQueryMutation } from '../../state/movieAPI/movieApiSlice';
import {Movie} from '../../types/Movie';
import { useCreateReviewMutation } from '../../state/reviews/reviewsApiSlice';
type Props = {
    setShowReplyForm: React.Dispatch<React.SetStateAction<boolean>>,
    triggerRefetch:  boolean,
    setTriggerRefetch: React.Dispatch<React.SetStateAction<boolean>>
};

function ReviewForm({ setShowReplyForm, triggerRefetch, setTriggerRefetch }: Props) {
    const [fetchMovie] = useGetMovieQueryMutation();
    const [createReply] = useCreateReviewMutation();
    // Form states
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [movie, setMovie] = useState("");

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReviewTitle(e.target.value);
    }
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReviewText(e.target.value);
    }
    const handleChangeMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovie(e.target.value);
    }

    type responseFetchMovie = {
        data: {
            page: number,
            results: Movie[],
            total_pages: number,
            total_results: number
        }
    }

    const getMovieID = async (movieTitle: string) => {
        const payload = {
            search: movieTitle,
            page: 1
        }
        
        const dataResponse= await fetchMovie(payload) as unknown as responseFetchMovie;
        console.log("this is data from movie card \n",dataResponse);
        // Get the first id on the list, if its wrong then boohoo
        if(dataResponse.data.total_results === 0) { return 48138; }
        const movieID = await dataResponse.data.results[0].id;
        console.log("This is movieID", movieID)
        return movieID;
    }
    
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        // Get movie id from movie title
        console.log("submitting form");
        const movieID = await getMovieID(movie);
        // Now we have the movie id, we can create the review
        const newReview = await createReply({Title: reviewTitle, Comment: reviewText, Movie: movieID}).unwrap();
        console.log(newReview);
        
        setReviewTitle("");
        setReviewText("");
        setMovie("");
        setShowReplyForm(false);
        setTriggerRefetch(!triggerRefetch);
    }
    return (
        <Form onSubmit={handleSubmit} className='mb-5'>
            <Form.Group className="mb-3" controlId="Review Title Input">
                <Form.Label>Review Title</Form.Label>
                <Form.Control type="text" placeholder="Review Title" value={reviewTitle} onChange={handleChangeTitle} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Movie Input">
                <Form.Label>Movie</Form.Label>
                <Form.Control type="text" placeholder="Movie" value={movie} onChange={handleChangeMovie} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Review Input">
                <Form.Label>Review</Form.Label>
                <Form.Control as="textarea" rows={3} value={reviewText} onChange={handleChangeText} required/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}


export default ReviewForm