import React from "react";

//might be bad practice, but I'm gonna hardcode the text when i call the buttons

const Button = ({ onClick, active, text }) => (
  <button
    onClick={onClick}
    style={{
      pointerEvents: active ? "none" : "auto",
      backgroundColor: active ? "gray" : "#2bbbad"
    }}
    className="waves-effect waves-light btn"
    href=""
  >
    {text}
  </button>
);

export default Button;
