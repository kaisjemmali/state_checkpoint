import React, { Component } from "react";

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      intervall: null,
    };
  }

  componentDidMount() {
    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      ),
    });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        You are our guest since {this.state.timer} seconds
      </div>
    );
  }
}
