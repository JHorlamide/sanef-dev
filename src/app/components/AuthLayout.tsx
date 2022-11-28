import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser
} from "redux/features/authSlice";
import { useAppSelector } from "hooks/reduxHook";

const AuthLayoutAuth = () => {
  const token = useAppSelector(selectCurrentToken);
  const user = useAppSelector(selectCurrentUser);
  const location = useLocation();

  return (
    <React.Fragment>
      {token && user?.isAdmin ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </React.Fragment>
  );
};

export default AuthLayoutAuth;
