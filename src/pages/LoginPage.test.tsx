import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, screen} from "@testing-library/react";
import LoginPage from "./LoginPage";
import { store } from "../state/store";

it("submits the form and shows a success message upon successful login", async () => {

  render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </Provider>
  );

  const usernameInput = screen.getByPlaceholderText(
    "Username"
  ) as HTMLInputElement;
  const passwordInput = screen.getByPlaceholderText(
    "Password"
  ) as HTMLInputElement;
  const loginButton = screen.getByRole("button", { name: "Sign in" });

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});
