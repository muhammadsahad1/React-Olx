import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/olx-logo.png";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../../firebase/config";


import "./login.css";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          navigate("/");
          
        })
        
        .catch((error) => {
          const errorCode = error.code;
          const errMessage = errorCode.message;
          toast.error("Incorrect Information");

        });

    } catch (error) {
      console.log(error);
    }

  };


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
