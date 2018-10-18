import React, { Component } from "react";

class Clock extends Component {
  state = {
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

  render() {
    return (
      <div>
        <Clock><h4 className = "clock">It is {this.state.clock.toLocaleTimeString()}</h4></Clock>
      </div>
    )
  };
}

export default Clock;