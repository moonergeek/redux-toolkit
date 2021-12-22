import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <div className="mt-3 fw-bold">
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <p>Email : {user.email}</p>
    </div>
  );
};

export default Profile;
