import React, { useState } from 'react';
import './NumberGuessing.css'; // Import the CSS for styling

const NumberGuessing = () => {
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState(generateRandomNumber());
    const [attempts, setAttempts] = useState(0);

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    const handleGuess = () => {
        const num = parseInt(guess, 10);
        if (isNaN(num)) {
            setMessage('Please enter a valid number.');
            return;
        }

        setAttempts(attempts + 1);

        if (num === number) {
            setMessage(`Correct! You guessed the number in ${attempts + 1} attempts.`);
        } else if (num < number) {
            setMessage('Too low! Try again.');
        } else {
            setMessage('Too high! Try again.');
        }
    };

    const resetGame = () => {
        setNumber(generateRandomNumber());
        setGuess('');
        setMessage('');
        setAttempts(0);
    };

    return (
        <div className="number-guessing-container">
            <h2>Number Guessing Game</h2>
            <p>Guess a number between 1 and 100.</p>
            <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Enter your guess"
                className="guess-input"
            />
            <button onClick={handleGuess} className="submit-button">Submit Guess</button>
            <button onClick={resetGame} className="reset-button">Reset Game</button>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default NumberGuessing;
