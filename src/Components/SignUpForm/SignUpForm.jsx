import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUpForm.scss";

import image from "../../assets/images/shoto.png";

function SignUpForm() {
  const navigate = useNavigate();
  // State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/signup", {
        username,
        password,
      });

      localStorage.setItem("jwt_token", response.data.message);

      // Navigate to the signin page
      navigate("/signin/form");
    } catch (error) {
      console.error("Signup failed:", error.response?.data?.error);
    }
  };

  return (
    <div className="sign-up">
      <h1 className="sign-up__title">SignUp</h1>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="sign-up__input-container">
            <div className="sign-up__username-input">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>

            <div className="sign-up__password-input">
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

          <input className="sign-up-btn" type="submit" value="SignUp" />
        </form>
        <div>
          <img className="sign-up__anime-image" src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
