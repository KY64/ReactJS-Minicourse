import React from "react";

const Option = ({ content }) => (
  <div className="d-flex justify-content-center">
    <div
      id="option"
      className="orange px-3"
      style={{
        boxShadow: "0 0 1px rgba(0,0,0,.3)",
        fontSize: "14pt",
        cursor: "pointer",
        borderRadius: "10px 0 0 10px",
      }}
    >
      {content[0]}
    </div>
    <div
      id="option"
      className="orange px-3"
      style={{
        boxShadow: "0 0 1px rgba(0,0,0,.3)",
        fontSize: "14pt",
        cursor: "pointer",
        borderRadius: "0 10px 10px 0",
      }}
    >
      {content[1]}
    </div>
    <style jsx>{`
      #option:hover {
        background: #f8f8f8;
      }
    `}</style>
  </div>
);

export default Option;
