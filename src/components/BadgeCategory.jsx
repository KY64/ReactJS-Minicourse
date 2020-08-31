import React from "react";

const BadgeCategory = ({ text, clickable, id, changeState }) => {
  const isClickable = clickable ? "pointer" : "default";

  const toggle_element = (id) => {
    document
      .getElementById(`badge-element${id}`)
      .classList.toggle("text-white");
    document.getElementById(`badge-element${id}`).classList.toggle("bg-prime");
  };

  return (
    <span
      id={`badge-element${id}`}
      className="d-inline-block p-1 px-3 rounded orange m-1"
      style={{
        border: "0.1px solid rgba(0,0,0,.1)",
        fontSize: "10pt",
        fontWeight: 300,
        cursor: `${isClickable}`,
      }}
      onClick={() => {
        clickable ? toggle_element(id) : void 0;
      }}
    >
      {text}
      <style jsx>{`
        span:hover {
          background: ${clickable ? "#f8f8f8" : "#fff"};
        }
      `}</style>
    </span>
  );
};

export default BadgeCategory;
