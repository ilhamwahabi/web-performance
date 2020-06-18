import React from "react";

function Image({ src }) {
  console.log(src);

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

export default Image;
