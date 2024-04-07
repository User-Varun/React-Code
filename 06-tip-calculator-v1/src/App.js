import { useState } from "react";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <BillPercentage percentage={percentage1} onSelect={setPercentage1}>
        how do you like the service
      </BillPercentage>
      <BillPercentage percentage={percentage2} onSelect={setPercentage2}>
        how did your friend like the service?
      </BillPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset
            setBill={setBill}
            setPercentage1={setPercentage1}
            setPercentage2={setPercentage2}
          />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
        placeholder="Bill Value"
      ></input>
    </div>
  );
}

function BillPercentage({ percentage, onSelect }) {
  return (
    <div>
      <span>how did you like the service?</span>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">dissatisfied(0%)</option>
        <option value="5">it was okay!(5%)</option>
        <option value="10">it was good(10%)</option>
        <option value="20">absolutely amazing(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div className="bill">
      <strong>
        You Pay ${bill + tip} (${bill} + ${tip} tip)
      </strong>
    </div>
  );
}

function Reset({ setBill, setPercentage1, setPercentage2 }) {
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <button className="btn-reset" onClick={handleReset}>
      Reset
    </button>
  );
}
