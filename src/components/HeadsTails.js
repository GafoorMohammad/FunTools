import React, { useState } from 'react';
import './HeadsTails.css'; // Import the CSS for styling

const HeadsTails = () => {
    const [flips, setFlips] = useState(1);
    const [results, setResults] = useState([]);
    const [winner, setWinner] = useState('');
    const [flipping, setFlipping] = useState(false);

    const flipCoin = () => {
        setFlipping(true);
        setResults([]);
        setWinner('');

        setTimeout(() => {
            const outcomes = [];
            for (let i = 0; i < flips; i++) {
                outcomes.push(Math.random() < 0.5 ? 'H' : 'T');
            }
            setResults(outcomes);
            const headsCount = outcomes.filter(result => result === 'H').length;
            const tailsCount = outcomes.length - headsCount;
            setWinner(headsCount > tailsCount ? 'Heads wins!' : tailsCount > headsCount ? 'Tails wins!' : 'It\'s a tie!');
            setFlipping(false);
        }, 1000); // Simulate coin flipping for 1 second
    };

    const reset = () => {
        setFlips(1);
        setResults([]);
        setWinner('');
    };

    return (
        <div className="heads-tails-container">
            <h2>Heads or Tails</h2>
            <div className="coin-settings">
                <label htmlFor="flips">Number of Flips:</label>
                <input
                    type="number"
                    id="flips"
                    min="1"
                    max="10"
                    value={flips}
                    onChange={(e) => setFlips(Number(e.target.value))}
                />
            </div>
            <button onClick={flipCoin} disabled={flipping}>
                {flipping ? 'Flipping...' : 'Flip Coins'}
            </button>
            <div className="results-container">
                {results.map((result, index) => (
                    <div key={index} className={`coin ${flipping ? 'flipping' : ''}`}>
                        {result}
                    </div>
                ))}
            </div>
            {winner && <p className="winner">{winner}</p>}
            <button onClick={reset} className="reset-button">Reset</button>
        </div>
    );
};

export default HeadsTails;
