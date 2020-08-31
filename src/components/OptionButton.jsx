import React from "react";

const Option = ({ content, state, changeState }) => (
  <div className="d-flex justify-content-center">
    <div
      id="option"
      className={state ? "orange px-3" : "orange px-3 bg-prime text-white"}
      style={{
        boxShadow: "0 0 1px rgba(0,0,0,.3)",
        fontSize: "14pt",
        cursor: "pointer",
        borderRadius: "10px 0 0 10px",
      }}
      onClick={() => changeState()}
    >
      {content[0]}
    </div>
    <div
      id="option"
      className={!state ? "orange px-3" : "orange px-3 bg-prime text-white"}
      style={{
        boxShadow: "0 0 1px rgba(0,0,0,.3)",
        fontSize: "14pt",
        cursor: "pointer",
        borderRadius: "0 10px 10px 0",
      }}
      onClick={() => changeState()}
    >
      {content[1]}
    </div>
    <style jsx>{`
      #option:hover {
        background: #f0f0f0;
      }
    `}</style>
  </div>
);

export default Option;
