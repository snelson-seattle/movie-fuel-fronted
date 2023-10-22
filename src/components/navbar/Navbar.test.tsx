import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../state/store";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("Renders expected elements", () => {
    // Arrange
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    // Act
    const brandElement = screen.getByText("Movie Fuel");
    const signUpButton = screen.getByText("SIGN UP");
    const signInButton = screen.getByText("SIGN IN");

    // Assert
    expect(brandElement).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });
});
