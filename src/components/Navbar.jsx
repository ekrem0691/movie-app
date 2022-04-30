import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  // const currentUser = { displayName: "Ekrem SARIYER" };
  // const currentUser = false;
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut(navigate);
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-white">
            <h4>React Movie App</h4>
          </Link>
          <div className="d-flex text-white align-items-center">
            {currentUser ? (
              <>
                <h5 className=" pt-2 text-capitalize text-white">
                  {currentUser?.displayName}
                </h5>
                <button className="ms-2 btn btn-outline-light" onClick={handleLogout }>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
