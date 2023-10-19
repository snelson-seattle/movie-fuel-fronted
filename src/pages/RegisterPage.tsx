import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../state/auth/authSlice";
import { useRegisterMutation } from "../state/auth/authApiSlice";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Check for password match
    if (password !== passConfirm) {
      setErrMsg("Password Mismatch");
      return;
    }

    try {
      const { accessToken } = await register({
        email,
        username,
        password,
      }).unwrap();

      dispatch(setCredentials({ accessToken }));
    
      navigate("/");
    } catch (error: any) {
      if (!error.status) {
        setErrMsg("No Response From Server");
      } else if (error.status === 400) {
        setErrMsg("Missing Email, Username or Password");
      } else {
        setErrMsg(error.data?.message);
      }
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="container-fluid auth-container mt-5">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control mb-2"
          placeholder="Email address"
          required
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="inputUsername" className="sr-only">
          Username
        </label>
        <input
          type="text"
          id="inputUsername"
          className="form-control mb-2"
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control mb-2"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmPassword" className="sr-only">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="form-control mb-3"
          placeholder="Confirm Password"
          required
          onChange={(e) => setPassConfirm(e.target.value)}
        />

        <button className="btn btn-lg btn-danger btn-block mb-2" type="submit">
          Sign up
        </button>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </section>
  );
};

export default RegisterPage;
