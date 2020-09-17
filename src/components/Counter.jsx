import React from "react";

function Counter({ counter, onDelete, onIncrement }) {
  const getValue = () => {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";

    if (counter.value === 0) {
      classes += "warning";
    } else {
      classes += "secondary";
    }
    return classes;
  };

  return (
    <div>
      <span className={getBadgeClasses()}>{getValue()}</span>
      <button
        onClick={() => onIncrement(counter)}
        className="btn btn-primary btn-sm m-2"
      >
        Add
      </button>
      <button
        onClick={() => onDelete(counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );
}

export default Counter;
