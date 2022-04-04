import React from "react";
import "./styles.css";

class calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  addTwo = () => {
    this.setState({
      count: this.state.count + 2
    });
  };

  squareTwo = () => {
    this.setState({
      count: this.state.count ** 2
    });
  };

  doubleTwo = () => {
    this.setState({
      count: this.state.count * 2
    });
  };

  divideTwo = () => {
    this.setState({
      count: this.state.count / 2
    });
  };

  substractTwo = () => {
    this.setState({
      count: this.state.count - 2
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <div>
          <button onClick={this.addTwo}>Add2!</button>
          <button onClick={this.squareTwo}>Square!</button>
          <button onClick={this.doubleTwo}>Double!</button>
          <button onClick={this.divideTwo}>Divideby2!</button>
          <button onClick={this.substractTwo}>Substract2!</button>
        </div>
      </div>
    );
  }
}

export default calculator;
