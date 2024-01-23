
import React, { useEffect, useState } from "react";
import "./Login.css";
import validation from "./Validation";
import { useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from "../../Firebase";
function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setError] = useState({});
  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values?.email !== "" &&
      values?.password !== ""
    )
      console.log(errors);
  }, [errors]);
  function handleChange(e) {
    setValues({ ...values, [e.target.id]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(validation(values));

    signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/main")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            if (errorCode === "auth/user-not-found") {
              <p>Invalid email id</p>
            }
            else if (errorCode === "auth/wrong-password") {
              console.log("Password is incorrect");
            } 
             else {
              console.error(errorCode, errorMessage);
            }
        });
  };
  return (
    <div className="loginPage">

        <div className="loginNavbar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
        </div>
      <div className="loginDiv">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            value={values?.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          {errors.email && (
            <p
              style={{ color: "red", fontSize: "14px", paddingBottom: "20px" }}
            >
              {errors?.email}
            </p>
          )}

          <input
            type="password"
            id="password"
            value={values.password}
            placeholder="Enter your password"
            onChange={handleChange}
          />
          {errors?.password && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors?.password}</p>
          )}

          <button type="submit">Login</button>
        </form>
        <p> </p>
      </div>
    </div>
  );
}

export default Login;



