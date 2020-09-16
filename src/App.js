import React, { Component } from "react";
import "./App.css";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 5 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      let newCounter = { ...counter };
      newCounter.value = 0;
      return newCounter;
    });

    this.setState({ counters });
  };

  getTotalCount = () => {
    return this.state.counters.filter((counter) => counter.value > 0).length;
  };

  render() {
    return (
      <div>
        <NavBar totalCount={this.getTotalCount()} />
        <Counters
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          counters={this.state.counters}
        />
      </div>
    );
  }
}

export default App;
