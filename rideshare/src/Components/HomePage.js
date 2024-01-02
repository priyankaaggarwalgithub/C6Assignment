import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Footer from "./Footer";
import "../App.css";
function HomePage(props) {
  const history = useHistory();
  const location = useLocation();
  console.log("location at homePage::::", location.state);
  const [errorMessages, setErrorMessages] = useState({});
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const errors = {
    uname: "INVALID USERNAME/PASSWORD",
    pass: "INVALID USERNAME/PASSWORD",
    registerUser: "PLEASE REGISTER YOURSELF!"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    const userData = fetch("http://localhost:8000/api/register")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(JSON.stringify(data));
        if (data && data.length > 0) {
          let newArr = data.map((item) => {
            if (userData) {
              if (item.password !== password) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
              } else if (item.name !== userName) {
                setErrorMessages({ name: "uname", message: errors.uname });
              } else {
                setIsSubmitted(true);
              }
            } else {
              // Username not found
              setErrorMessages({ name: "uname", message: errors.uname });
            }
          });

        } else {
          setErrorMessages({ name: "uname", message: errors.registerUser });
        }
      })
      .catch((error) => {
        alert("There was a problem with the request.");
      });
  };
  useEffect(() => {
    if (isSubmitted) {
      history.push("/UserHome", {
        state: { userName: userName, password: password },
      });
    }
  }, [isSubmitted]);

  const renderErrorMessage = (name) => {
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  };
  return (
    <nav>
      <div className="container_login">
        <nav className="nav_checkbox">
          <a href="#" className="logo">
            RIDESHARE
          </a>
          <input type="checkbox" id="tab-nav" className="tab-nav" />
          <label for="tab-nav" className="label">
            <div class="bgr"></div>
            <div class="bgr"></div>
            <div class="bgr"></div>
          </label>
          <ul className="content_nav">
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">SERVICE</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content_section">
        <div className="form-container">
          <div className="input-container">
            <label class="lbl">Username </label>
            <input
              type="text"
              name="uname"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <h2>{renderErrorMessage("uname")}</h2>
          </div>
          <div className="input-container">
            <label class="lbl">Password </label>
            <input
              type="password"
              name="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <h2>{renderErrorMessage("pass")}</h2>
          </div>
          <div className="button-container">
            <button
              id="login"
              class="btn"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              <h2>Login</h2>
            </button>
            <button
              id="register"
              class="btn"
              type="submit"
              onClick={() =>
                history.push({
                  pathname: "/Register",
                })
              }
            >
              <h2>Register</h2>
            </button>
          </div>
          <div className="errMsg">
            {!isSubmitted ? <div>{errorMessages.message}</div> : ""}
          </div>
        </div>
      </div>
      <div className="contentfooter">
        <Footer />
      </div>
    </nav>
  );
}

export default HomePage;
