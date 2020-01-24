import React from "react";

//might be bad practice, but I'm gonna hardcode the text when i call the buttons

const Button = ({ onClick, active, text }) => (
  <a
    onClick={onClick}
    style={{
      pointerEvents: active ? "none" : "auto",
      backgroundColor: active ? "gray" : "auto"
    }}
    className="waves-effect waves-light btn"
    href="!#"
  >
    {text}
  </a>
);

export default Button;
