import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    console.log("Im in constructor");
  }

  getValue = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";

    if (this.props.counter.value === 0) {
      classes += "warning";
    } else {
      classes += "secondary";
    }
    return classes;
  };

  componentDidMount() {
    console.log("I'm in mount");
    if (this.props.counter.value === 3) {
      console.log("this is not 3", this.props.counter);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Im in update.", prevProps, this.props);
  }

  componentWillUnmount() {
    console.log("I am in unmount");
  }

  render() {
    console.log("Im in render");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.getValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          Add
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
