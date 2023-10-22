import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import UserPage from "./UserPage";

console.error = jest.fn();
const mockStore = configureStore([]);
const initialState = {
    user: {
        aboutme: "Sample About Me",
        editedText: "Sample Changed Text",
        isEditing: false,
        username: "sample_user",
        email: "sample_email@example.com",
        favoriteItems: [
            {
                id: 1,
                title: "Sample Title 1",
                poster_path: "/sample_poster_1.jpg",
                overview: "Sample Overview 1",
            }, {
                id: 2,
                title: "Sample Title 2",
                poster_path: "/sample_poster_1.jpg",
                overview: "Sample Overview 2",
            }
        ],
        favorites: ["1", "2"],
        profilepicture: "/sample_profile_picture.jpg",
    },
};

const store = mockStore(initialState);

describe("<UserPage />", () => {
    test("should display user information", () => {
        render(
            <Provider store={store}>
                <UserPage />
            </Provider>
        );

        // Check if user information is displayed
        expect(screen.getByText("Your Profile Page")).toBeInTheDocument();
        expect(screen.getByText("Sample About Me")).toBeInTheDocument();
        expect(screen.getByText("Sample Title 1")).toBeInTheDocument();
        expect(screen.getByText("Sample Title 2")).toBeInTheDocument();
        expect(screen.getByText("Sample Overview 1")).toBeInTheDocument();
        expect(screen.getByText("Sample Overview 2")).toBeInTheDocument();
        expect(screen.getAllByText("delete").length).toBe(2);
        expect(screen.getByText("Edit")).toBeInTheDocument();



    });

    test("should display 'Edit' button when not in editing mode", () => {
        render(
            <Provider store={store}>
                <UserPage />
            </Provider>
        );

        expect(screen.getByText("Edit")).toBeInTheDocument();
        expect(screen.queryByText("Save")).not.toBeInTheDocument();
        expect(screen.queryByText("Cancel")).not.toBeInTheDocument();
    });
    test("should not display 'Edit' button when not in editing mode", () => {
        initialState.user.isEditing = true;
        render(
            <Provider store={store}>
                <UserPage />
            </Provider>
        );

        expect(screen.queryByText(/Edit/)).not.toBeInTheDocument();
        expect(screen.queryByText(/Save/)).toBeInTheDocument();
        expect(screen.queryByText(/Cancel/)).toBeInTheDocument();
    });

    test("favorite should be removed from list", () => {
        initialState.user.isEditing = false;
        initialState.user.favoriteItems.pop();
        render(
            <Provider store={store}>
                <UserPage />
            </Provider>
        );

        // Check if user information is displayed
        expect(screen.getByText("Your Profile Page")).toBeInTheDocument();
        expect(screen.getByText("Sample About Me")).toBeInTheDocument();
        expect(screen.getByText("Sample Title 1")).toBeInTheDocument();
        expect(screen.queryByText("Sample Title 2")).not.toBeInTheDocument();
        expect(screen.getByText("Sample Overview 1")).toBeInTheDocument();
        expect(screen.queryByText("Sample Overview 2")).not.toBeInTheDocument();
        expect(screen.getAllByText("delete").length).toBe(1);
        expect(screen.getByText("Edit")).toBeInTheDocument();



    });
});
