import React from "react";
import { render, screen } from "@testing-library/react";
import GuestProfileView from "./GuestProfileView";

describe("<GuestProfileView />", () => {
    test("should not display an email", async () => {
        // Render the GuestProfileView component
        render(<GuestProfileView />);


        expect(screen.getByText('Email')).not.toBeInTheDocument();
    });
});
describe("<GuestProfileView />", () => {
    test("should  display About Me", async () => {
        // Render the GuestProfileView component
        render(<GuestProfileView />);


        expect(screen.getByText('About Me')).toBeInTheDocument();
    });
});
describe("<GuestProfileView />", () => {
    test("should display Favorites", async () => {
        // Render the GuestProfileView component
        render(<GuestProfileView />);


        expect(screen.getByText('Favorites')).toBeInTheDocument();
    });
});