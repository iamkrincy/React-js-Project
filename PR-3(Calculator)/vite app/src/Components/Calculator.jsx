import React, { useState } from "react";
import Button from "./Button";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        const evalResult = eval(input); 
        setResult(evalResult.toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "C", "(", ")", "+",
    "7", "8", "9", "-",
    "4", "5", "6", "*",
    "1", "2", "3", "/",
    "0", "%", ".", "=",
  ];

  return (
    <div>
      <h1>CALCULATOR</h1>
      <div className="counter">
        <div className="display">
          <div className="entered">{input || "0"}</div>
          <div className="calculated">{result}</div>
        </div>
        <div className="calc">
          <div className="buttons">
            {buttons.map((btn, idx) => (
              <Button key={idx} value={btn} onClick={handleButtonClick} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
