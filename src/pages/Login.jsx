import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { Button } from "react-bootstrap";

const Login = () => {
  const [alertText, setAlertText] = useState("");
  const [alertColor, setAlertColor] = useState("");

  const userFromLocal = JSON.parse(localStorage.getItem("User"));

  const user = {
    username: "roya",
    pass: "r",
  };

  const location = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();

    if (!username.current || !passWord.current) {
      setAlertText("Please, fill input.");
      setAlertColor("warning");
      return;
    }

    if (
      user.username === username.current.value &&
      user.pass === passWord.current.value
    ) {
      location("/admin");
      localStorage.setItem('Admin', JSON.stringify(user))
      setAlertText("Login is successful.");
      setAlertColor("success");
      window.location.reload();
    } else if (
      username.current.value === userFromLocal?.username &&
      passWord.current.value === userFromLocal?.password
    ) {
      location('/home');
      window.location.reload();
    } else {
      if (!userFromLocal?.username || !userFromLocal?.password) {
        setAlertText("Please, fill input.");
        setAlertColor("warning");
      } else {
        setAlertText("Username or password is wrong.");
        setAlertColor("danger");
      }
    }
  };

  const username = useRef();
  const passWord = useRef();

  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h1 className="fw-bold text-center my-5">LOGIN</h1>
          <Alert variant={alertColor}>{alertText}</Alert>
          <div className="col-6">
            <form onSubmit={submitForm}>
              <div className="d-flex justify-content-center flex-column">
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control" ref={username} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    ref={passWord}
                  />
                </div>
                <Button variant="success" type="submit" className="btn">
                  Submit
                </Button>
                <NavLink variant="success" type="submit" className="btn" to='/register'>
                  Don't have an account?
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
