import React, { useEffect } from 'react'
import Post from '../components/postPage/Post'
import SideBarMovie from '../components/postPage/SideBarMovie'
import Comment from '../components/postPage/Comment'
import { Col, Container, Row } from 'react-bootstrap'
import { useGetReviewAgainMutation, useGetReviewQuery } from '../state/reviews/reviewsApiSlice'
import { Review } from '../types/Review'
import { useGetCommentsFromPostMutation } from '../state/replies/repliesApiSlice'
import { CommentType } from '../types/Comment'
import { useParams } from 'react-router-dom'
// const testPost: Review = {
//     PostID: "1",
//     Author: "alex",
//     Comment: "This is what I think about the movie",
//     Title: "Its alright",
//     DateTime: "2023-10-12T03:25:46.169Z",
//     Likes: 10,
//     Movie: 123,
// }

type responsePost = {
  message: string,
  data: {
      data: {
          Items: Review[]
      }
  },
  Count: number,
}

type responseComments = {
  message: string,
  data: {
    data: CommentType[]
  }
}
// function PostPage({...props}: Review) {

function PostPage() {
  const { PostID } = useParams();
//  const {data, error, isLoading} = useGetReviewQuery(props.PostID);
 const [refetchReview] = useGetReviewAgainMutation()
 const [review, setReview] = React.useState<Review>(); // this was props in the begining
 const [fetchComments] = useGetCommentsFromPostMutation();
 const [comments, setComments] = React.useState<CommentType[]>([]);
 const [movieID, setMovieID] = React.useState<number>(0);

 useEffect(() => {
  handleFetch()
  handleFetchComments()
 },[]);

 const handleFetch = async () => {
  // Might need to change this for react params for resource
  const data = await refetchReview(PostID) as responsePost;
  // console.log(data.data.data.Items[0]);
  // console.log(JSON.stringify(data))
  console.log("this is the data from review!", data)
  console.log("this is the movide id", data.data.data.Items[0].Movie)
  setMovieID(data.data.data.Items[0].Movie);
  setReview(data.data.data.Items[0]);
 }
 const handleFetchComments = async () => {
  const data = await fetchComments(PostID) as responseComments;
  
  console.log(data);
  console.log("this is the comments",JSON.stringify(data.data.data))
  let regularComments = Array.from(data.data.data).sort((a, b) => new Date(a.DateTime).getTime() - new Date(b.DateTime).getTime());
  // Put comments from oldest to newest
  setComments(regularComments);
 }
//  console.log(data);
  return (
    <Container>
      <Row>
        <Col md={8}>
          {review ? (
          <>
          <Post {...review!} replies={comments.length} comments={comments} setComments={setComments}></Post>
          {comments.map((comment: CommentType) => (<Comment {...comment} comments={comments} setComments={setComments}/>))}
          </>
          ) : (<div>Loading...</div>)}
        </Col>
        <Col md={4}>
          {movieID ? <SideBarMovie movieID={movieID} /> : null }

        </Col>
      </Row>
    </Container>
  )

}



export default PostPage