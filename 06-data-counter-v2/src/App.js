import "./App.css";
import React from "react";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <UI />
    </div>
  );
}

function UI() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date(" Jun 21 2027");
  date.setDate(date.getDate() + count);

  function handleClick() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div className="step">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        {/* <button onClick={() => setStep((c) => c - 1)}>-</button> */}
        <p>{step}</p>
        {/* <button onClick={() => setStep((c) => c + 1)}>+</button> */}
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="inputNum"
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p className="message">
        <span>
          {count === 0
            ? "today is "
            : count < 0
            ? `${Math.abs(count)} days from today is `
            : `${count} days ago was`}
        </span>
        <span className="margin-left">{date.toDateString()}</span>
      </p>

      {step !== 1 || count !== 0 ? (
        <div className="resetBtn">
          <button onClick={handleClick}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
