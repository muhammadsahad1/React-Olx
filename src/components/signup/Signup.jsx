import { useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/olx-logo.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { firebaseContext } from "../../store/context";
import { auth, db } from "../../firebase/config";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const { app } = useContext(firebaseContext)
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    
    try {

      if (userName.trim() == "") {
        toast.error("Not valid username");
      } else if (phone.length !== 10) {
        toast.error("Phone number should be 10 numbers");
      } else {
  
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredentials.user;
        await updateProfile(user, {
          displayName: userName,
        });
        // updated

        const userCollection = collection(db, "Users");
        await addDoc(userCollection, {
          userName: userName,
          uid: user.uid,
          phone: phone,
        });
        // created new user
        navigate("/login");
      }
    } catch (error) {
      toast.error(" Password should be at least 6 characters ");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSignup}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Create</button>
        </form>
        <a href="/login">Login</a>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;
