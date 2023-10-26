import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../state/store';
import { setOtherUser } from '../../state/guestSlice'; // Import your user slice actions
import './guest.css'



import { Card, Button, Image, Accordion, ListGroup, } from 'react-bootstrap'
import axios from 'axios';

function GuestProfileView() {
    const guest = useSelector((state: RootState) => state.guest);

    const dispatch = useDispatch();

    const { Otherusername } = useParams();

    const apiUrl = 'https://7dezero58a.execute-api.us-west-2.amazonaws.com/DEV/user/profile';
    const loadFavoriteItems = async (favs: string[]) => {
        const imageUrls = await Promise.all(
            favs.map(async (item) => {
                // Use axios.get to perform the GET request
                const response = await axios.get(`https://7dezero58a.execute-api.us-west-2.amazonaws.com/DEV/MovieFuel/search/byID?idnumber=${item}`, {
                    withCredentials: false,
                });
                return response.data; // Extract data from the Axios response
            })
        );
        console.log(imageUrls);
        dispatch(setOtherUser({ favoriteItems: imageUrls }));
    };
    useEffect(() => {
        // Define the username you want to retrieve


        // Make a GET request to the API endpoint with the username as a parameter
        fetch(`${apiUrl}/${Otherusername}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                dispatch(setOtherUser(data)); // Update the state with the fetched user data
                loadFavoriteItems(data.favorites);
            })
            .catch(error => {
                console.error('Error:', error); // Handle and display the error to the user
            });
    }, []);

    return (
        <>

            <div className="d-flex flex-column justify-content-center align-items-center">
                <p id='title'>{guest.username}'s Profile Page</p>
                <div id="profile-picture">

                    <Image
                        id="profile-circle"
                        src={guest.profilepicture}
                        alt="profile for user"
                        roundedCircle
                    />
                </div>
                <span id='username-box'></span>
            </div>

            <div id="container">
                <Card>
                    {/* About Me Section */}
                    <Card>

                        <Card.Header>{guest.username}'s About Me </Card.Header>
                        <Card.Body>
                            {/* About Me content */}
                            <p>
                                {guest.aboutme}
                            </p>

                        </Card.Body>
                    </Card>



                    {/* Favorites Section */}

                    <Card>

                        <Card.Header >
                            {guest.username}'s Favorites
                        </Card.Header>

                        {/* List of favorites */}
                        <ListGroup>
                            {guest.favoriteItems && guest.favoriteItems.length > 0 ? (
                                guest.favoriteItems.map((item: any, index: any) => (

                                    <ListGroup.Item key={index}>
                                        <p>{item.title}</p>
                                        <img id='image-circle' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="Favorite" />
                                        <p>{item.overview}</p>
                                    </ListGroup.Item>
                                ))
                            ) : (
                                <ListGroup.Item>No favorite items available</ListGroup.Item>
                            )}
                        </ListGroup>


                    </Card>


                </Card>
            </div >
        </>
    )
}

export default GuestProfileView


