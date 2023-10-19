import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getImagesByID from '../utils/movieUtil';
import { setUser } from '../state/userSlice'; // Import your user slice actions
import { Card, Button, Image, Accordion, ListGroup } from 'react-bootstrap';
import { RootState } from '../state/store';
import './user.css'
function UserPage() {
    const user = useSelector((state: RootState) => state.user);

    const dispatch = useDispatch();

    const apiUrl = 'http://localhost:4000/user/profile';

    const loadFavoriteItems = async (favs: string[]) => {

        const imageUrls = await Promise.all(favs.map(async (item: string) => getImagesByID(item)));
        console.log(imageUrls);
        dispatch(setUser({ favoriteItems: imageUrls }));
    };

    useEffect(() => {
        const usernameToRetrieve = 'danny007';

        fetch(`${apiUrl}/${usernameToRetrieve}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                dispatch(setUser(data));

                loadFavoriteItems(data.Favorites);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [dispatch]);
    function handleAboutMeChange(event: any) {
        dispatch(setUser({ ...user, editedText: event.target.textContent }));
    }

    function handleEditClick() {
        dispatch(setUser({ ...user, isEditing: true, editedText: user.AboutMe }));
    }

    function handleCancelClick() {
        dispatch(setUser({ ...user, isEditing: false, editedText: user.AboutMe }));
    }

    function handleSaveClick() {
        dispatch(setUser({ ...user, isEditing: false, AboutMe: user.editedText }));
    }

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <p id='title'>Your Profile Page</p>
                <div id="profile-picture">
                    <Image id="profile-circle" src={user.ProfilePicture} alt="profile for user" roundedCircle />
                </div>
                <span id="username-box"></span>
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
                                {user.isEditing ? user.editedText : user.AboutMe}
                            </p>
                        </Card.Body>
                    </Card>

                    {/* Email Section */}
                    <Card>
                        <Card.Header>Email</Card.Header>
                        <Card.Body>{user.Email}</Card.Body>
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


