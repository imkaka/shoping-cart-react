import React from "react";

import Counter from "./Counter";

// Functional Component - state (React hooks) later
function Counters(props) {
  return (
    <div>
      <button className="btn btn-secondary m-2" onClick={props.onReset}>
        Reset
      </button>
      {props.counters.map((counter) => (
        <Counter
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
          key={counter.id}
          counter={counter}
        />
      ))}
    </div>
  );
}

export default Counters;
