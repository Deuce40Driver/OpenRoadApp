import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./Home.css";
import buttons from "../../buttons.json";


class Home extends Component {
  state = {
    buttons: buttons,
    clock: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      clock: new Date()
    });
  }

  buttonClick = (description) => {

  };


  render() {
    return (
      <div>

      {/* Header with logo and current time */}
        <header>
          <h1>OpenRoad</h1>
          <h3>Roadside Assistance</h3>
          <h4 className = "clock">It is {this.state.clock.toLocaleTimeString()}</h4>
        </header>

      {/* Buttons are rendered here */}
        {this.state.buttons.map((button) => (
          <Button key = {button.number} buttonClick = {this.buttonClick} link = "" number = {button.number}>

          </Button>
        ))}

      {/* Footer with weather and location data */}
        <footer>
          put location and weather data here
        </footer>

      </div>

    )
  };
};

export default Home;