import { render, screen, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import HomePage from './HomePage';
import { MemoryRouter } from "react-router-dom";

const mockStore = configureStore([]);



describe("<HomePage />", () => {
    const initialState = {
        user: {
            aboutme: 'him',
            editedText: 'them',
            isEditing: false,
            isLoaded: true,
            isFavoritesOpen: false,
            username: 'paulwall',
            email: 'ron@gmail.com',
            favoriteItems: ['12', '23'],
            favorites: ['45', '76'],
            profilepicture: 'src.png',
        },
        auth: {
            token: 'your-token-here',
        },
    };
    const store = mockStore(initialState);
    test("should display homepage", () => {


        render(
            <MemoryRouter>
                <Provider store={store}>
                    <HomePage />
                </Provider>
            </MemoryRouter>
        );
        expect(screen.getByText(/Real People/)).toBeInTheDocument();
        expect(screen.getByText(/Real Reviews/)).toBeInTheDocument();
        expect(screen.getByText(/WRITE A REVIEW/)).toBeInTheDocument();
        expect(screen.getByText(/READ REVIEWS/)).toBeInTheDocument();
        expect(screen.getByText(/Now Playing/)).toBeInTheDocument();
        expect(screen.getByText(/Seen any movies lately?/)).toBeInTheDocument();



    });

});
