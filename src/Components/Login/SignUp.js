import React, { useEffect, useState } from "react";
import "./Login.css";
import validation from "./Validation";
import { useNavigate } from "react-router-dom";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from "../../Firebase";

function SignUp() {
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
  const toSignIn =()=>{
    navigate("/signin");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(validation(values));

    await createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/signin")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            if (errorCode === "auth/email-already-in-use") {
              setError({ email: "The email address is already in use." });
            } else {
              console.error(errorCode, errorMessage);
            }
        });
  };
  // useEffect(() => {

  // }, []);
 
  return (
    <div className="loginPage">

        <div className="loginNavbar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
        </div>
      <div className="loginDiv">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            id="text"
           
            placeholder="Enter your username"
            onChange={handleChange}
          />
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
            <p className="signuperror" style={{ color: "red", fontSize: "14px" }}>{errors?.password}</p>
          )}

          <button type="submit">Sign Up</button>
          <p className="alreadySignup">Already had an Account? </p>
        <button onClick={toSignIn} type="submit">Sign In</button>
        </form>
        
      </div>
    </div>
  );
}

export default SignUp;
