import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";
import { store } from "../state/store";

it("Renders the registration form", async () => {
  // Arrange
  render(
    <Provider store={store}>
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    </Provider>
  );

  // Act
  const emailInput = screen.getByPlaceholderText(
    "Email address"
  ) as HTMLInputElement;
  const usernameInput = screen.getByPlaceholderText(
    "Username"
  ) as HTMLInputElement;
  const passwordInput = screen.getByPlaceholderText(
    "Password"
  ) as HTMLInputElement;
  const confirmInput = screen.getByPlaceholderText(
    "Confirm Password"
  ) as HTMLInputElement;
  const signUpButton = screen.getByRole("button", { name: "Sign up" });


  // Assert
  expect(emailInput).toBeInTheDocument();
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(confirmInput).toBeInTheDocument();
  expect(signUpButton).toBeInTheDocument();
});
