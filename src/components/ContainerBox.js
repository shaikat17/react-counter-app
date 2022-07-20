import React, { Component } from "react";
import classes from "./ContainerBox.module.css";

export class ContainerBox extends Component {
  state = {
    counter: 0,
  };

  inCrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
}

resetCounterValue = () => {
    this.setState({
      counter: 0,
    });
}


  render() {
    return (
      <div className={classes["cnt-box"]}>
        <h1>Counter</h1>
        <button
          onClick={this.inCrementCounter}
          className={classes["counter-button"]}
        >
          +
        </button>
        <span className={classes.counter}> {this.state.counter} </span>
        <button
          onClick={this.decrementCounter}
          className={classes["counter-button"]}
        >
          -
        </button>
        <button
        onClick={this.resetCounterValue}
          className={classes["reset-button"]}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default ContainerBox;
