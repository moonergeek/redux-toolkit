import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../Redux/user";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex">
      <button
        onClick={() => {
          dispatch(login({ name: "Mahan", age: 21, email: "mahan@gmail.com" }));
        }}
        className="btn btn-success"
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
        className="btn btn-danger"
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
