import React from "react";
import Login from "./../Components/Login";
import Profile from "./../Components/Profile";

const App = () => {
  return (
    <div className="container d-flex flex-column align-items-center mt-2">
      <Profile />
      <Login />
    </div>
  );
};

export default App;
