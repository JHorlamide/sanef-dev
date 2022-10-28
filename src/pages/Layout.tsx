import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-full">{children}</div>;
};

export default Layout;
