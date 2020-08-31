import React from "react";

const BadgeCategory = ({ text, clickable }) => {
  const isClickable = clickable ? "pointer" : "default";
  return (
    <span
      className="d-inline-block p-1 px-3 rounded orange m-1"
      style={{
        border: "0.1px solid rgba(0,0,0,.1)",
        fontSize: "10pt",
        fontWeight: 300,
        cursor: `${isClickable}`
      }}
    >
      {text}
      <style jsx>{`
        span:hover {
          background: ${ clickable ? "#f8f8f8" : "#fff"};
        }
      `}</style>
    </span>
  );
};

export default BadgeCategory;
