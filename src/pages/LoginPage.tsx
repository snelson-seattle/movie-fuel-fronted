import { useRef, useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../state/auth/authSlice";
import { useLoginMutation } from "../state/auth/authApiSlice";

const LoginPage = () => {
  const userRef = useRef<HTMLInputElement | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { accessToken } = await login({ username, password }).unwrap();

      dispatch(setCredentials({ accessToken }));

      setUsername("");
      setPassword("");

      navigate("/");
    } catch (error: any) {
      if (!error.status) {
        setErrMsg("No Response From Server");
      } else if (error.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (error.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(error.data?.message);
      }

      // Set focus to error message
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="container-fluid auth-container mt-5">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUsername" className="sr-only">
          Username
        </label>
        <input
          type="text"
          id="inputUsername"
          ref={userRef}
          value={username}
          className="form-control mb-2"
          placeholder="Username"
          required
          autoFocus
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control mb-3"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-lg btn-danger btn-block mb-2" type="submit">
          Sign in
        </button>
        <p>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </section>
  );
};

export default LoginPage;
