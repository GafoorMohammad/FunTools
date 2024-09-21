// src/components/RockPaperScissors.js
import React, { useState } from 'react';
import './RockPaperScissors.css'; // Import the CSS for styling

const RockPaperScissors = () => {
    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [result, setResult] = useState('');
    const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });

    const choices = ['rock', 'paper', 'scissors'];

    const handleClick = (choice) => {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        setUserChoice(choice);
        setComputerChoice(computerChoice);

        if (choice === computerChoice) {
            setResult('It\'s a tie!');
            setScore((prev) => ({ ...prev, ties: prev.ties + 1 }));
        } else if (
            (choice === 'rock' && computerChoice === 'scissors') ||
            (choice === 'paper' && computerChoice === 'rock') ||
            (choice === 'scissors' && computerChoice === 'paper')
        ) {
            setResult('You win!');
            setScore((prev) => ({ ...prev, wins: prev.wins + 1 }));
        } else {
            setResult('You lose!');
            setScore((prev) => ({ ...prev, losses: prev.losses + 1 }));
        }
    };

    return (
        <div className="rps-container">
            <h2>Rock Paper Scissors</h2>
            <div className="scoreboard">
                <p>Wins: {score.wins}</p>
                <p>Losses: {score.losses}</p>
                <p>Ties: {score.ties}</p>
            </div>
            <div className="button-container">
                {choices.map((choice) => (
                    <button
                        key={choice}
                        onClick={() => handleClick(choice)}
                        className={`choice-button ${userChoice === choice ? 'active' : ''}`}
                    >
                        {choice.charAt(0).toUpperCase() + choice.slice(1)}
                    </button>
                ))}
            </div>
            {userChoice && <p className="user-choice">Your choice: {userChoice}</p>}
            {computerChoice && <p className="computer-choice">Computer's choice: {computerChoice}</p>}
            {result && <p className={`result ${result.includes('win') ? 'win' : result.includes('tie') ? 'tie' : 'lose'}`}>{result}</p>}
        </div>
    );
};

export default RockPaperScissors;
