import React, { useState } from 'react';
import './Housie.css'; // Import the CSS for styling

const Housie = () => {
    const initialNumbers = Array.from({ length: 100 }, (_, i) => i + 1);
    const [numbers, setNumbers] = useState(initialNumbers);
    const [chosenNumber, setChosenNumber] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const chooseRandomNumber = () => {
        if (numbers.length === 0) {
            setGameOver(true);
            return;
        }
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const numberToRemove = numbers[randomIndex];
        setChosenNumber(numberToRemove);
        setNumbers(numbers.filter((num) => num !== numberToRemove));
    };

    const resetGame = () => {
        if (window.confirm("Are you sure you want to reset the game?")) {
            setNumbers(initialNumbers);
            setChosenNumber(null);
            setGameOver(false);
        }
    };

    return (
        <div className="housie-container">
            <h2>Housie Game</h2>
            {chosenNumber && <h3>Chosen Number: {chosenNumber}</h3>}
            {gameOver ? (
                <h3 className="game-over">Game Over! All numbers have been chosen.</h3>
            ) : (
                <>
                    <div className="grid">
                        {numbers.map((number) => (
                            <div key={number} className="grid-item">
                                {number}
                            </div>
                        ))}
                    </div>
                    <button onClick={chooseRandomNumber} className="choose-button">
                        Choose Random Number
                    </button>
                </>
            )}
            <button onClick={resetGame} className="reset-button">
                Reset Game
            </button>
        </div>
    );
};

export default Housie;
