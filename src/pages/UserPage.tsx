
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../state/userSlice'; // Import your user slice actions
import { Card, Button, Image, ListGroup } from 'react-bootstrap';
import { RootState } from '../state/store';
import './user.css'

function UserPage() {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();





    function handleAboutMeChange(event: any) {
        dispatch(setUser({ ...user, editedText: event.target.textContent }));
    }

    function handleEditClick() {
        dispatch(setUser({ ...user, isEditing: true, editedText: user.aboutme }));
    }

    function handleCancelClick() {
        dispatch(setUser({ ...user, isEditing: false, editedText: user.aboutme }));
    }

    function handleSaveClick() {
        dispatch(setUser({ ...user, isEditing: false, aboutme: user.editedText }));

    }
    function handleDelete(id: number) {

        dispatch({
            type: 'user/removeFromFavorites',
            payload: {
                id: (id.toString())
            },
        })
    }
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <p id='title'>Your Profile Page</p>

                <span id="username-box">{user.username}</span>
            </div>

            <div id="container">
                <Card>
                    {/* About Me Section */}
                    <Card>
                        <Card.Header>
                            About Me
                            {user.isEditing ? (
                                <>
                                    <Button onClick={handleSaveClick}>Save</Button>
                                    <Button onClick={handleCancelClick}>Cancel</Button>
                                </>
                            ) : (
                                <Button onClick={handleEditClick}>Edit</Button>
                            )}
                        </Card.Header>
                        <Card.Body>
                            <p
                                id="editableText"
                                contentEditable={user.isEditing}
                                onBlur={handleAboutMeChange}
                            >
                                {user.isEditing ? user.editedText : user.aboutme}
                            </p>
                        </Card.Body>
                    </Card>

                    {/* Email Section */}
                    <Card>
                        <Card.Header>Email</Card.Header>
                        <Card.Body>{user.email}</Card.Body>
                    </Card>

                    {/* Favorites Section */}
                    <Card>
                        <Card.Header>Favorites</Card.Header>
                        <ListGroup>


                            {user.favoriteItems && user.favoriteItems.length > 0 ? (
                                user.favoriteItems.map((item: any, index: any) => (

                                    <ListGroup.Item key={index}>
                                        <p>{item.title}</p>
                                        <img id="profile-circle" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="Favorite" />
                                        <p>{item.overview}</p>
                                        <Button onClick={() => handleDelete(item.id)} >delete</Button>
                                    </ListGroup.Item>
                                ))
                            ) : (
                                <ListGroup.Item>No favorite items available</ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card>
                </Card>
            </div>
        </>
    );
}

export default UserPage;


