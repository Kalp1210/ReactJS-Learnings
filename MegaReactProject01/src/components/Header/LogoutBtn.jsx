import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/config";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout();
  };
  return <div></div>;
};

export default LogoutBtn;