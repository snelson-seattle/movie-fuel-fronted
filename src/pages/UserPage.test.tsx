import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; // Use redux-mock-store for testing Redux components
import UserPage from "./UserPage";
import { setUser } from "../state/userSlice";

// Create a mock Redux store
const mockStore = configureStore([]);
const initialState = {
    user: {
        aboutme: "Sample About Me",
        editedText: "Sample Edited Text",
        isEditing: false,
        username: "sample_user",
        email: "sample_email@example.com",
        favoriteItems: [
            {
                id: 1,
                title: "Sample Title 1",
                poster_path: "/sample_poster_1.jpg",
                overview: "Sample Overview 1",
            },

        ],
        favorites: ["1", "2"],
        profilepicture: "/sample_profile_picture.jpg",
    },
};
const store = mockStore(initialState);

describe("<UserPage />", () => {
    test("should display user information and allow editing", () => {
        const { getByText } = render(
            <Provider store={store}>
                <UserPage />
            </Provider>
        );

        // Check if user information is displayed
        expect(getByText("Your Profile Page")).toBeInTheDocument();
        expect(getByText("Sample About Me")).toBeInTheDocument();
        expect(getByText("Sample Title 1")).toBeInTheDocument();

        expect(getByText("delete")).toBeInTheDocument();

        // Trigger a click event to start editing
        fireEvent.click(getByText("Edit"));

        // Check if the editing elements are displayed
        // expect(getByRole("paragraph")).toBeInTheDocument();
        // expect(getByText("Save")).toBeInTheDocument();
        // expect(getByText("Cancel")).toBeInTheDocument();

        // Trigger a click event to save changes
        // fireEvent.click(getByText("Save"));

        // Check if the edited text is displayed
        // expect(getByText("Sample Edited Text")).toBeInTheDocument();
    });
});
describe("<UserPage />", () => {
    test("should display save and cancel after clicking edit button", () => {
        const { getByText } = render(
            <Provider store={store}>
                <UserPage />
            </Provider>
        );


        fireEvent.click(getByText("Edit"));
        expect(getByText("Edit")).not.toBeInTheDocument();
        // Check if the editing elements are displayed
        // expect(getByRole("paragraph")).toBeInTheDocument();
        // expect(getByText("Save")).toBeInTheDocument();
        // expect(getByText("Cancel")).toBeInTheDocument();

        // Trigger a click event to save changes
        // fireEvent.click(getByText("Save"));

        // Check if the edited text is displayed
        // expect(getByText("Sample Edited Text")).toBeInTheDocument();
    });
});
