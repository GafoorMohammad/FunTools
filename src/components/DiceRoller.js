import React, { useState } from 'react';
import './DiceRoller.css'; // Import the CSS for styling

const DiceRoller = () => {
    const [diceValues, setDiceValues] = useState([]);
    const [sum, setSum] = useState(null);
    const [rolling, setRolling] = useState(false);
    const [numDice, setNumDice] = useState(2); // Default number of dice

    const rollDice = () => {
        setRolling(true);
        setTimeout(() => {
            const values = Array.from({ length: numDice }, () => Math.floor(Math.random() * 6) + 1);
            const total = values.reduce((acc, curr) => acc + curr, 0);
            setDiceValues(values);
            setSum(total);
            setRolling(false);
        }, 1000); // Simulate dice rolling for 1 second
    };

    return (
        <div className="dice-roller-container">
            <h2>Dice Roller</h2>
            <div className="dice-settings">
                <label htmlFor="numDice">Number of Dice:</label>
                <input
                    type="number"
                    id="numDice"
                    min="1"
                    max="10"
                    value={numDice}
                    onChange={(e) => setNumDice(Number(e.target.value))}
                />
            </div>
            <div className="dice-container">
                {diceValues.map((value, index) => (
                    <div key={index} className={`dice ${rolling ? 'rolling' : ''}`}>
                        {value}
                    </div>
                ))}
            </div>
            <button onClick={rollDice} disabled={rolling}>
                {rolling ? 'Rolling...' : 'Roll Dice'}
            </button>
            {sum !== null && <p className="result">Sum: {sum}</p>}
        </div>
    );
};

export default DiceRoller;
