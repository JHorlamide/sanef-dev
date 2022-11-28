import React from "react";
import SidebarContent from "./SidebarContent";
import {
  selectCurrentToken,
  selectCurrentUser
} from "redux/features/authSlice";
import { useAppSelector } from "hooks/reduxHook";
import { useLocation, Navigate } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector(selectCurrentToken);
  const user = useAppSelector(selectCurrentUser);
  const location = useLocation();

  return (
    <React.Fragment>
      {token && user?.isAdmin ? (
        <div className="grid grid-cols-12">
          <div
            className="relative col-span-3 flex flex-col space-y-8 bg-white 
            h-auto shadow-lg shadow-gray-400 z-10"
          >
            {/* Sidebar */}
            <SidebarContent />
          </div>

          <div className="col-span-9">{children}</div>
        </div>
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </React.Fragment>
  );
};

export default Layout;
