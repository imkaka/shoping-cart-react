import React, { useState } from "react";
import "./App.css";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

function App() {
  // All hooks hooks should be at the top.
  const [counters, setCounters] = useState([
    { id: 1, value: 5 },
    { id: 2, value: 0 },
    { id: 3, value: 2 },
    { id: 4, value: 0 },
  ]);
  const [randomValue, setRandomValue] = useState(0);

  // we can call this hooks to create as many no of states as possible.

  // Hooks - provided by react
  // custom hooks -> we write ourselves.

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((counter) => counter.id !== counterId);
    setCounters(newCounters);
  };

  const handleIncrement = (counter) => {
    const newCounters = [...counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;

    setCounters(newCounters);
  };

  const handleReset = () => {
    const newCounters = counters.map((counter) => {
      let newCounter = { ...counter };
      newCounter.value = 0;
      return newCounter;
    });

    setCounters(newCounters);
  };

  const getTotalCount = () => {
    return counters.filter((counter) => counter.value > 0).length;
  };

  return (
    <div>
      <NavBar totalCount={getTotalCount()} />
      <Counters
        onReset={handleReset}
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        counters={counters}
      />
      <button
        onClick={() => setRandomValue(randomValue + 1)}
        className="btn btn-success"
      >
        {randomValue}
      </button>
    </div>
  );
}

export default App;
