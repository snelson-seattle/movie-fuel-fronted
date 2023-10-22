import React, { useState } from 'react'
import { Card, Button, Image, Alert} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { CommentType } from '../../types/Comment';
import ReplyCard from './ReplyCard';
import ReplyFormComment from './ReplyFormComment';


function Comment({PostID, Comment, ReplyID, Author, DateTime, Likes, ReplyToID, comments, setComments}: CommentType
    & {comments: CommentType[], setComments: React.Dispatch<React.SetStateAction<CommentType[]>>}) {

    const props: CommentType = { PostID, Author, Likes, Comment, DateTime, ReplyID, ReplyToID};
    const [showAlert, setShowAlert] = useState(false);
    const [showReplyForm, setShowReplyForm] = useState(false);
    const token = useSelector((state: RootState) => state.auth.token);
    const date = new Date(DateTime);
    const handleReplyClick = () => {
        if(token) {
            setShowReplyForm(!showReplyForm);
        } else {
            setShowAlert(true);
        }
    }
  return (
    <Card style={{width: "100%"}} className='text-dark mb-5'>
        {/* Card Header */}
        <Card.Header>
        </Card.Header>
        {/* This is the user section */}
        <Card.Body> 
            {/* Create section for user info */}
            <div className="d-flex align-items-center">
                <Image src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" 
                    alt='Profile picture' className='me-3 d-flex '
                    style={{width: 50, height: 50}} rounded
                />
                
                <div className='d-flex align-items-center justify-content-center'>
                    <p className='me-3' style={{fontSize:16, fontWeight:700}}>{Author}</p>
                    <p className='me-3' style={{fontSize:15.5}}>{ReplyID.slice(0,8)}</p>
                    <p style={{fontSize:15.5}}>{date.toUTCString()}</p>
                </div>
            </div>
        </Card.Body>

        {/* Comment */}
        <Card.Body className='mb-3 pt-0'>
            {ReplyToID ? <ReplyCard ReplyID={ReplyToID} comments={comments} setComments={setComments} /> : null}
            <Card.Text style={{fontSize :14}} className='text-start'>
            {Comment}
            </Card.Text>
        </Card.Body>

        {/* Footer */}
        <Card.Footer className='d-flex justify-content-start'>
            <Button variant='primary' className='me-3' onClick={handleReplyClick}>Reply</Button>
            {/* No Likes, need more time */}
            {/* <Button variant='secondary'>Likes {Likes}</Button> */}
        </Card.Footer>
        <Card.Footer><Alert variant='info' show={showAlert} onClose={() => setShowAlert(false)} dismissible> Can't reply to comment unless you log in!</Alert>
                {showReplyForm ? <ReplyFormComment {...props} comments={comments} setComments={setComments} showReplyForm={showReplyForm} setShowReplyForm={setShowReplyForm}/> : null}
        </Card.Footer>
    </Card>
  )
}

export default Comment