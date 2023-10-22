import React, { useEffect } from 'react'
import { useGetCommentFromReplyIDMutation } from '../../state/replies/repliesApiSlice';
import { CommentType } from '../../types/Comment';
import { Card, Image } from 'react-bootstrap';


type response = {
    message: string,
    data: {
        data: CommentType[]
    }
}
function ReplyCard({ReplyID}: {ReplyID: string} & 
    {comments: CommentType[], setComments: React.Dispatch<React.SetStateAction<CommentType[]>>}) {
    // Find the comment that this is replying to
    const [fetchComment] = useGetCommentFromReplyIDMutation();
    const [comment, setComment] = React.useState<CommentType>();
    useEffect(() => {
        handleFetchComment();
    },[]);

    const handleFetchComment = async () => {
        const data = await fetchComment(ReplyID) as response;
        
        console.log(`this is inside replycard data ${JSON.stringify(data)}`);
        console.log(data.data.data);
        setComment(data.data.data[0]);
        console.log(`updated comment ${JSON.stringify(comment)}`);
        console.log(comment?.Author);
    }
    
    return(
        <>
        {comment ? (<Card style={{backgroundColor:"rgb(255,144,139)"}} className='mb-4'>
        <Card.Header>
            <div className="d-flex align-items-center">
                <Image src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" 
                    alt='Profile picture' className='me-3 d-flex '
                    style={{width: 50, height: 50}} rounded
                />
                
                <div className='d-flex align-items-center justify-content-center'>
                    <p className='me-3' style={{fontSize:16, fontWeight:700}}>{comment.Author}</p>
                    <p className='me-3' style={{fontSize:15.5}}>{comment.ReplyID.slice(0,8)}</p>
                    <p style={{fontSize:15.5}}>{"date"}</p>
                </div>
            </div>
        </Card.Header>
        <Card.Body>
            <Card.Text style={{fontSize : 13}} className='text-start'>
            {comment.Comment}
            </Card.Text>
        </Card.Body>
    </Card>) : (null) }
        
        </>
    );
}

export default ReplyCard