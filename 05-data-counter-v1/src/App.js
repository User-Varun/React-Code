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
  const [counter, setCounter] = useState(0);

  function handleStepMinus() {
    setStep(step - 1);
  }
  function handleStepPlus() {
    setStep(step + 1);
  }
  function handleCounterMinus() {
    setCounter(counter - 1);
  }
  function handleCounterPlus() {
    setCounter(counter + 1);
  }

  function getCurrentDay() {
    const now = new Date();
    const day = now.getDay();
    const dayName = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][day];
    return dayName;
  }

  return (
    <>
      <div className="steps">
        <button onClick={handleStepMinus}>-</button>
        <p>Step: {step}</p>
        <button onClick={handleStepPlus}>+</button>
      </div>
      <div className="counter">
        <button onClick={handleCounterMinus}>-</button>
        <p>Counter: {counter}</p>
        <button onClick={handleCounterPlus}>+</button>
      </div>
      <div className="message">
        <p>
          Today is {getCurrentDay()}{" "}
          {new Date().toLocaleString("default", { month: "short" })}{" "}
          {new Date().getDate()} 2027
        </p>
      </div>
    </>
  );
}
