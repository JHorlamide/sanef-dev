import React from "react";
import SidebarContent from "./SidebarContent";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
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
  );
};

export default Layout;
