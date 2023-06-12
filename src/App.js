import { useState } from "react";
import "./style.css";

function App() {
const [minValue, setMinValue] = useState(0);
const [maxValue, setMaxValue] = useState(10);
const [randomNum, setRandomNum] = useState(5)

const handleRandomNum = () => {
      setRandomNum(Math.floor(Math.random() * (maxValue-minValue + 1  )+ minValue )) 
}

  return (
    <div className="hero">
  
      <div className="container">
        <div className="randomNum">
          <p>
            Random Number <span>{randomNum}</span>
          </p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input type="number" value={minValue}
            onChange={(e)=>setMinValue(+e.target.value)} />
          </div>
          <div>
            <p>Max:</p>
            <input type="number" value={maxValue}
            onChange={(e)=>setMaxValue(+e.target.value)} />
          </div>
        </div>
        <button onClick={handleRandomNum}>Get Random Number</button>
      </div>
    </div>
  );
}

export default App;
