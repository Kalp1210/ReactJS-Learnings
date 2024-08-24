import React, { useState, useContext } from "react";
import UserContext from "./UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="text-center text-lg bg-red-900 text-white">
        Please Login
      </div>
    );

  return (
    <div className="text-center text-lg bg-red-900 text-white">
      Welcome {user.username} !!
    </div>
  );
};

export default Profile;
