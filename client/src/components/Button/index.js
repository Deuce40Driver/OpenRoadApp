import React from "react";
import "./Button.css";

const Button = (props) => (
  <div 
    onClick = {() => props.buttonClick(props.number)} 
    key = {props.number} 
    className = "button"
    description = {props.description}
    link = {props.link}
  >
    {props.number}
  </div>
);

export default Button;