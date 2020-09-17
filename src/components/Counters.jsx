import React from "react";

import Counter from "./Counter";

// Functional Component - state (React hooks) later :D:
// stateless -> using useState hook we can create our state here as well.
function Counters({ counters, onReset, onIncrement, onDelete }) {
  return (
    <div>
      <button className="btn btn-secondary m-2" onClick={onReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          onDelete={onDelete}
          onIncrement={onIncrement}
          key={counter.id}
          counter={counter}
        />
      ))}
    </div>
  );
}

export default Counters;
