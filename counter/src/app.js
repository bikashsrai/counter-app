import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2> Hello counter app</h2>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)} className="button">
        ADD
      </button>
      <button onClick={() => setNumber(number - 1)} className="button">
        LESS
      </button>
      <button onClick={() => setNumber(0)} className="button">
        RESET
      </button>
    </div>
  );
};

export default App;
