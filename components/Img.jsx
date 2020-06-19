import React from "react";

function Img({ src }) {
  return (
    <div
      style={{
        maxWidth: 1200,
        width: "80%",
        height: "100%",
        backgroundImage: `url(${src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
}

export default Img;
