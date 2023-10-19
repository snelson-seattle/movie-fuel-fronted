import React from 'react'
import { Card, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
interface postUser {
    postID: string,
    author: string,
    likedBy: string[] | string,
    likedCount: 3,
    movie: string,
    comment: string,
    dateTime: string
}

let username = 'roger69';
function Post() {

    return (

        <Card style={{ width: "70rem", color: "black" }}>
            {/* Card Header */}
            <Card.Header>
                <Card.Title as="h1">Title of the Post</Card.Title>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <div className='me-3'>Replies: 10</div>
                        <div>Particpiants: 3</div>
                    </div>
                    <Button variant='primary'>Go to most recent!</Button>
                </div>
            </Card.Header>
            {/* This is the user section */}
            <Card.Body>
                {/* Create section for user info */}
                <div className="d-flex align-items-center">
                    <Image src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        alt='Profile picture' className='me-3 d-flex '
                        style={{ width: 60, height: 60 }} rounded
                    />

                    <div className='d-flex align-items-center justify-content-center' style={{ fontSize: 24 }}>
                        <p className='me-3' style={{ fontSize: 36 }}><Link to={`/guest-profile/${username}`} style={{ color: "black" }}>{username}</Link></p>
                        <p className='me-3'>User ID</p>
                        <p>Date</p>
                    </div>
                </div>
            </Card.Body>

            {/* Comment */}
            <Card.Body className='mb-3 pt-0'>
                <Card.Text style={{ fontSize: 30 }} className='text-start'>
                    This is what I think about the movie. It's ok. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officia explicabo error voluptas quo nihil unde distinctio obcaecati facere beatae, velit facilis aperiam molestiae saepe doloremque quia! Deserunt, provident suscipit.
                </Card.Text>
            </Card.Body>

            {/* Footer */}
            <Card.Footer className='d-flex justify-content-start'>
                <Button variant='primary' className='me-3'>Reply</Button>
                <Button variant='secondary'>Like</Button>
            </Card.Footer>
        </Card>
    )
}

export default Post