/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../auth/firebase";

const Register = () => {
  const [firstname, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const displayName = `${firstname} ${lastName}`;
    createUser(email, password, displayName, navigate,);
    console.log(firstname, lastName, email, password);
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="form-image">
        <img src={"http://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              placeholder='"Enter your first name'
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder='"Enter your last name'
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
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
              type="password"
              className="form-control"
              id="password"
              placeholder='"Enter your password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Register"
            // onClick={()=>{
            //   console.log(firstname, lastName, email, Password);
            // }
            // } -------------onClick ile requried ve doğrulama yapılamaz. o yüzden onSubmit kullanmalıyız.
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
