import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {//
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
            <button onClick={() => handleButtonClick("C")}>C</button>
            <button onClick={() => handleButtonClick("(")}>(</button>
            <button onClick={() => handleButtonClick(")")}>)</button>
            <button onClick={() => handleButtonClick("+")}>+</button>
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("9")}>9</button>
            <button onClick={() => handleButtonClick("-")}>-</button>
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("*")}>*</button>
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={() => handleButtonClick("/")}>/</button>
            <button onClick={() => handleButtonClick("0")}>0</button>
            <button onClick={() => handleButtonClick("%")}>%</button>
            <button onClick={() => handleButtonClick(".")}>.</button>
            <button onClick={() => handleButtonClick("=")}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

