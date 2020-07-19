import React, { Component } from "react";
import "./Form.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increaseCount = () => {
    let count = this.state.count + 1;
    this.setState({
      count: count,
    });
  };
  decreaseCount = () => {
    let count = this.state.count - 1;
    this.setState({
      count: count,
    });
  };
  render() {
    return (
      <div className="counter">
        <button onClick={this.increaseCount}>+</button>
        <p className="count">{this.state.count}</p>
        <button onClick={this.decreaseCount}>-</button>
      </div>
    );
  }
}
export default Counter;
