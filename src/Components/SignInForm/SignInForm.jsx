import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignInForm.scss";

import animatedImage from "../../assets/images/pokemon.gif";

function SignInForm() {
  const navigate = useNavigate();

  // State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("try axios");
      const response = await axios.post("http://localhost:3000/api/signin", {
        username,
        password,
      });

      localStorage.setItem("jwt_token", response.data.token);
      localStorage.setItem("user", response.data.user);

      // Navigate to the homepage
      navigate("/");
    } catch (error) {
      console.error("Sign in failed:", error.response?.data?.error);
    }
  };

  return (
    <div className="sign-in">
      <h1 className="sign-in__title">SignIn</h1>
      <img
        src={animatedImage}
        alt="Animated Image"
        className="sign-in__animated-image"
        height="200"
        width="200"
      />
      <form onSubmit={handleSubmit}>
        <div className="sign-in__input-container">
          <div className="sign-in__username-input">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>

          <div className="sign-in__password-input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
        </div>

        <input className="btn" type="submit" value="SignIn" />

        <h3>Don't have an account?</h3>

        <Link to="/signup/form">
          <input className="btn" type="submit" value="Signup" />
        </Link>
      </form>
    </div>
  );
}

export default SignInForm;
