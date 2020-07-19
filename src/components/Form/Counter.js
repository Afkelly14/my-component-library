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
        <button className='clicker' onClick={this.increaseCount}>+</button>
        <p>{this.state.count}</p>
        <button className='clicker' onClick={this.decreaseCount}>-</button>
      </div>
    );
  }
}
export default Counter;
