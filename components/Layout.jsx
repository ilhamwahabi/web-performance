import React from "react";

function Layout({ children }) {
  return (
    <div
      style={{
        maxWidth: 1200,
        width: "60%",
      }}
    >
      {children}
    </div>
  );
}

export default Layout;
