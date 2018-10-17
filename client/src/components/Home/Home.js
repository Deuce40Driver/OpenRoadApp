import React, { Component } from "react";
//import { Link } from "react-router-dom";
import "./Home.css";
import Button from "../Button";
import buttons from "../../buttons.json";


class Home extends Component {

  state = {
    buttons: buttons
  };

  //buttonClick = () => {

  //};

  render() {
    return (
      <div>
        {this.state.buttons.map((button) => (
          <Button key = {button.number} buttonClick = {this.buttonClick} link = "" number = {button.number}></Button>
        ))}
      </div>
    )
  };

};

export default Home;