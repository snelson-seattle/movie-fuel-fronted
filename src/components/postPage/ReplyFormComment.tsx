import React, { FormEvent, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { CommentType } from '../../types/Comment'
import {useCreateReplyMutation} from '../../state/replies/repliesApiSlice'

function ReplyFormComment({PostID, Comment, ReplyID, comments, setComments, showReplyForm, setShowReplyForm}:CommentType
    & {comments: CommentType[], setComments: React.Dispatch<React.SetStateAction<CommentType[]>>
    , showReplyForm: Boolean, setShowReplyForm: React.Dispatch<React.SetStateAction<boolean>>}) {
    
    const [replyText, setReplyText] = useState("");
    const [createReply] = useCreateReplyMutation();
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReplyText(e.target.value);
    }

    type response = {
        message: string,
        data: CommentType
    }
    
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        const newComment = await createReply({PostID, Comment: replyText, ReplyToID: ReplyID}).unwrap() as response;
        console.log("This is the new comment");
        console.log(newComment);
        console.log(e)
        console.log("reseting text");
        setReplyText("");
        setShowReplyForm(false);
        const newResponseComment= newComment.data;
        const newComments = [...comments, newResponseComment].sort((a, b) => new Date(a.DateTime).getTime() - new Date(b.DateTime).getTime());
        setComments(newComments);
    }
  
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Reply</Form.Label>
        <Form.Control as="textarea" rows={3} value={replyText} onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  )
}

export default ReplyFormComment