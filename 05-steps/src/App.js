import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "vaurn" });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) {
      // setStep( s + 1); this does not work when we call it 2 times. (why...? is later.)
      // setStep((s) => s + 1);
      setStep((s) => s + 1);
      // to be safe always update values using a callback functions
    }

    // Bad practice
    // test.name = "fred";
    // Best Practice
    // setTest({ name: "fred" });
  }

  function handleClose() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            {/* thats pretty clever! 😉 [step - 1] logic. */}
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>

            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
