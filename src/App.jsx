import React, { useEffect, useContext } from "react";
import Homepage from "./pages/Homepage";
import Signuppage from "./pages/Signuppage";
import Create from "./components/create/Create";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import { AuthContext } from "./store/context";
import { getAuth } from "firebase/auth";

import "./App.css";

function App() {

  const auth = getAuth();
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signup" element={<Signuppage />} />
        <Route exact path="/login" element={<Loginpage />} />
        <Route exact path="/create" element={<Create />} />   
      </Routes>
    </div>
  );
}

export default App;
