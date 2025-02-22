import './App.css';
// modified import for context
import React, { createContext, useState, useContext } from 'react';

// context
const CountContext = createContext();

// provider
export function CountProvider({ children }) {
    const [count, setCount] = useState(0);
    const [clickedBoxes, setClickedBoxes] = useState([false, false, false, false]);

    const onClick = (event) => {
        const newClickedBoxes = [...clickedBoxes];
        newClickedBoxes[event] = !newClickedBoxes[event];

        setClickedBoxes(newClickedBoxes);

        const newCount = newClickedBoxes.filter(Boolean).length;
        setCount(newCount);
    };

    return (
        <CountContext.Provider value={{ count, clickedBoxes, onClick }}>
            {children}
        </CountContext.Provider>
    );
}

const useCount = () => useContext(CountContext);

function App() {
    return (
        <CountProvider>
            <TheBox />
        </CountProvider>
    );
}

// hook built into function for box
function TheBox() {
    const { count, clickedBoxes, onClick } = useCount();

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
            <div style={{ textAlign: "center" }}>
                <h1>CS5610 Mini Assignment 3</h1>
                <h5>React and JavaScript</h5>
                <p style={{ fontSize: 30, fontWeight: "bold", fontFamily: "Georgia" }}>Count: {count}</p>
            </div>

            <div style={gridStyle}>
                <div className="CountBox" style={{ ...boxStyle, ...clickedBox(0) }} onClick={() => onClick(0)}></div>
                <div className="CountBox" style={{ ...boxStyle, ...clickedBox(1) }} onClick={() => onClick(1)}></div>
                <div className="CountBox" style={{ ...boxStyle, ...clickedBox(2) }} onClick={() => onClick(2)}></div>
                <div className="CountBox" style={{ ...boxStyle, ...clickedBox(3) }} onClick={() => onClick(3)}></div>
            </div>
        </div>
    );
}

export default App;
