/* eslint-disable no-undef */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUpProvider } from "../auth/firebase";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    signIn(email, password, navigate);
    console.log(email, password);
  };

  const handleProviderLogin = (e) => {
  
    signUpProvider(navigate);

  }


  return (
    <div className="d-flex justify-content-center">
      <div className="form-image">
        <img src={"http://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Login</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              placeholder='"Enter your email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              value={password}
              placeholder='"Enter your password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
            // onSubmit={handleSubmit}
          />
        </form>
        <button className="btn btn-primary form-control" onClick={handleProviderLogin} >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
