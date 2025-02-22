import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [clickedBoxes, setClickedBoxes] = useState([false, false, false, false]);

  const onClick = (event) => {
      const newClickedBoxes = [...clickedBoxes];
      newClickedBoxes[event] = !newClickedBoxes[event];

      // Set the new state for clicked boxes
      setClickedBoxes(newClickedBoxes);

      // Update the count based on how many boxes are clicked
      const newCount = newClickedBoxes.filter(Boolean).length;  // Count how many `true` values there are
      setCount(newCount);
  };

const boxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid gray",
};

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    width: "200px",
    height: "200px",
    margin: "auto"
};

const clickedBox = (index) => ({
    backgroundColor: clickedBoxes[index] ? 'black' : '',
    color: clickedBoxes[index] ? 'white' : ''
});

  return (
      <div className="2x2box">
        <div style={{textAlign: "center"}}>
          <h1>CS5610 Mini Assignment 3</h1>
          <h5>React and JavaScript</h5>
          <p style={{fontSize: 30, fontWeight: "bold", fontFamily: "Gerogia"}}>Count: {count}</p>
        </div>

        <div style={{...gridStyle}}>
            <div className="CountBox" style={{...boxStyle, ...clickedBox(0)}} onClick={() => onClick(0)}></div>
            <div className="CountBox" style={{...boxStyle, ...clickedBox(1)}} onClick={() => onClick(1)}></div>
            <div className="CountBox" style={{...boxStyle, ...clickedBox(2)}} onClick={() => onClick(2)}></div>
            <div className="CountBox" style={{...boxStyle, ...clickedBox(3)}} onClick={() => onClick(3)}></div>
        </div>
      </div>
  );
}

export default App;
