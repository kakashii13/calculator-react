import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");

  const handleClick = (value) => {
    if (currentOperation == "") {
      setNumOne((val) => val + value);
    } else {
      setNumTwo((val) => val + value);
    }
  };

  const handleOperation = (value) => {
    setCurrentOperation(value);
  };

  const getResult = () => {
    switch (currentOperation) {
      case "+":
        setResult(Number(numOne) + Number(numTwo));
    }
  };

  return (
    <main className="App">
      <div className="Show-result">
        <div className="Previus-value">
          {result ? "" : currentOperation ? numOne + currentOperation : ""}
        </div>
        <div className="Current-value">
          {result ? result : currentOperation ? numTwo : numOne}
        </div>
      </div>
      <div className="Calculator">
        <button className="Button" onClick={() => handleClick(7)}>
          7
        </button>
        <button className="Button" onClick={() => handleClick(8)}>
          8
        </button>
        <button className="Button" onClick={() => handleClick(9)}>
          9
        </button>
        <button className="Button Button-del">DEL</button>
        <button className="Button" onClick={() => handleClick(4)}>
          4
        </button>
        <button className="Button" onClick={() => handleClick(5)}>
          5
        </button>
        <button className="Button" onClick={() => handleClick(6)}>
          6
        </button>
        <button className="Button" onClick={() => handleOperation("+")}>
          +
        </button>
        <button className="Button" onClick={() => handleClick(1)}>
          1
        </button>
        <button className="Button" onClick={() => handleClick(2)}>
          2
        </button>
        <button className="Button" onClick={() => handleClick(3)}>
          3
        </button>
        <button className="Button" onClick={() => handleOperation("-")}>
          -
        </button>
        <button className="Button" onClick={() => handleClick(".")}>
          .
        </button>
        <button className="Button" onClick={() => handleClick(0)}>
          0
        </button>
        <button className="Button" onClick={() => handleOperation("/")}>
          /
        </button>
        <button className="Button" onClick={() => handleOperation("x")}>
          x
        </button>
        <button className="Button Button-reset">RESET</button>
        <button className="Button Button-equal" onClick={getResult}>
          =
        </button>
      </div>
    </main>
  );
}

export default App;
