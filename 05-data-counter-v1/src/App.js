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

  return (
    <div>
      <div className="step">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <p>Count: {count}</p>
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
    </div>
  );
}
