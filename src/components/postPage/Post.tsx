import React, { useState } from 'react'
import { Card, Button, Image, Alert} from 'react-bootstrap'
import { Review } from '../../types/Review'
import ReplyForm from './ReplyForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { CommentType } from '../../types/Comment';
// import 'bootstrap/dist/css/bootstrap.min.css';
// no movie?
function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
}

function Post({PostID, Author, Likes, Movie, Comment, Title, DateTime, replies, comments, setComments}: Review 
    & {replies: number, comments: CommentType[], setComments: React.Dispatch<React.SetStateAction<CommentType[]>>}) {
   
    const props: Review = { PostID, Author, Likes, Movie, Comment, Title, DateTime};
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector((state: RootState) => state.auth.token);
    const handleReplyClick = () => {
        if(token) {
            setShowReplyForm(!showReplyForm);
        } else {
            setShowAlert(true);
        }
    }
    
    const date = new Date(DateTime);
  return (
    <Card style={{width: "100%"}} className='text-dark mb-4 '>
        {/* Card Header */}
        <Card.Header>
            <Card.Title as="h1">{Title}</Card.Title>
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <div className='me-3'>Replies: {replies}</div>
                </div>
                <Button variant='primary' onClick={scrollToBottom}>Go to most recent!</Button>
                
            </div>
        </Card.Header>
        {/* This is the user section */}
        <Card.Body>
            {/* Create section for user info */}
            <div className="d-flex align-items-center">
                <Image src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" 
                    alt='Profile picture' className='me-3 d-flex '
                    style={{width: 60, height: 60}} rounded
                />
                
                <div className='d-flex align-items-center justify-content-center' style={{fontSize:24}}>
                    <p className='me-3' style={{fontSize:36, fontWeight:700}}>{Author}</p>
                    <p className='me-3' style={{fontSize:15.5}}>{PostID.slice(0,8)}</p>
                    <p style={{fontSize:15.5}}>{date.toUTCString()}</p>
                </div>
            </div>
        </Card.Body>

        {/* Comment */}
        <Card.Body className='mb-3 pt-0'>
            <Card.Text style={{fontSize : 30}} className='text-start'>
            {Comment}
            </Card.Text>
        </Card.Body>

            {/* Footer */}
            <Card.Footer className='d-flex justify-content-start'>
                <Button variant='primary' className='me-3' onClick={handleReplyClick}>Reply</Button>
                {/* No time for comments */}
                {/* <Button variant='secondary'>Likes {Likes}</Button> */}
            </Card.Footer>
            <Card.Footer>
                <Alert variant='info' show={showAlert} onClose={() => setShowAlert(false)} dismissible> Can't reply to post unless you log in!</Alert>
                {showReplyForm ? <ReplyForm {...props} comments={comments} setComments={setComments} showReplyForm={showAlert} setShowReplyForm={setShowReplyForm}/> : null}
            </Card.Footer>
        </Card>
    )
}

export default Post