import React, { useEffect, useState } from 'react'
import { useGetReviewsQuery, useGetReviewsAgainMutation } from '../state/reviews/reviewsApiSlice';
import { Review } from '../types/Review';
import ReviewMovieCard from '../components/reviewsPage/ReviewMovieCard';
import { Alert, Button, Container } from 'react-bootstrap';
import { RootState } from '../state/store';
import { useSelector } from 'react-redux';
import ReviewForm from '../components/reviewsPage/ReviewForm';

function Reviews() {
    const token = useSelector((state: RootState) => state.auth.token);
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [triggerRefetch, setTriggerRefetch] = useState(false);

    const [refetchReviews] = useGetReviewsAgainMutation();
    
    useEffect(() => { 
        handleFetch();
    },[triggerRefetch]);

    const [reviews, setReviews] = React.useState<Review[]>([]);
    type response = {
        message: string,
        data: {
            data: {
                Items: Review[]
            }
        }
    }

    const handleFetch = async () => {
        const dataGot= await refetchReviews({}) as response;
        const datab : Review[] = dataGot.data.data.Items;
        let sortedReviews = Array.from(datab).sort((a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime());
        setReviews(sortedReviews);

    };
    const handleReplyClick = () => {
        if(token) {
            setShowReplyForm(!showReplyForm);
        } else {
            setShowAlert(true);
        }
    }
    

    // console.log(data?.data?.Items);
    // const Reviews: Review[] = data?.Items;
    // const reviewNodes = Reviews.map((review: Review) => (<div key={review.PostID}>{review.Title}</div>))
    return (
        <Container>
            {/* <button onClick={handleFetch}>Refetch Reviews</button> */}
            <Alert variant='info' show={showAlert} onClose={() => setShowAlert(false)} dismissible> Can't reply to post unless you log in!</Alert>
            <Button variant='primary' className='mb-3' onClick={handleReplyClick}>Post Your Own Review!</Button>
            {showReplyForm ? <ReviewForm setShowReplyForm={setShowReplyForm} triggerRefetch={triggerRefetch} setTriggerRefetch={setTriggerRefetch}/> : null}
            {/* {reviews.map((review: Review) => (<div key={review.PostID}>{review.Title}</div>))} */}
            {reviews.map((review: Review) => (<ReviewMovieCard key={review.PostID} {...review} />))}
        </Container>
    );
}


export default Reviews