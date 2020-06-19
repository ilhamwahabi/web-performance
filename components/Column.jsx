import React from "react";

function Column({ data }) {
  return (
    <div
      style={{
        marginTop: 50,
        width: "60%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {data.map(({ img, label }) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img width="150" src={img} alt="" />
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}

export default Column;
