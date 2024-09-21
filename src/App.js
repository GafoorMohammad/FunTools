import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import DiceRoller from './components/DiceRoller';
import Housie from './components/Housie';
import TicTacToe from './components/TicTacToe';
import RockPaperScissors from './components/RockPaperScissors';
import HeadsTails from './components/HeadsTails';
import NumberGuessing from './components/NumberGuessing';
import ColorPicker from './components/ColorPicker';
import Calculator from './components/Calculator';
import PermCombCalculator from './components/PermCombCalculator';
import UnitConverter from './components/UnitConverter'; 
import CountdownTimer from './components/CountdownTimer';

import './styles.css';

function Home() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const gamesAndTools = [
        { title: 'Dice Roller', description: 'Roll virtual dice and get random outcomes. Perfect for board games or decision-making!', path: '/dice' },
        { title: 'Housie Numbers', description: 'Generate random numbers for Housie (Bingo). Great for games with family and friends.', path: '/housie' },
        { title: 'Tic Tac Toe', description: 'Play the classic Tic Tac Toe game against a friend or AI. Can you get three in a row?', path: '/tic-tac-toe' },
        { title: 'Rock Paper Scissors', description: 'Challenge the computer to a game of Rock Paper Scissors. Best of three rounds wins!', path: '/rock-paper-scissors' },
        { title: 'Heads or Tails', description: 'Flip a virtual coin to see if you get heads or tails. Perfect for quick decisions!', path: '/heads-tails' },
        { title: 'Number Guessing Game', description: 'Guess the number selected by the computer within a range. Can you get it right?', path: '/number-guessing' },
        { title: 'Color Picker', description: 'Select colors and get their hex codes. Useful for designers and developers.', path: '/color-picker' },
        { title: 'Calculator', description: 'Perform basic arithmetic operations with our easy-to-use calculator.', path: '/calculator' },
        { title: 'Permutation & Combination', description: 'Calculate permutations and combinations for different sets. Great for statistics!', path: '/permcomb' },
        { title: 'Unit Converter', description: 'Convert units between different measurements, such as length, weight, and temperature.', path: '/unit-converter' },
        { title: 'Countdown Timer', description: 'Set a countdown timer for your tasks or events. Time yourself and stay on track!', path: '/countdown-timer' }
    ];

    return (
        <div className="home">
            <h1 className="welcome-title">🎮 Welcome to the Interactive Games & Tools Platform! 🎉</h1>
            <p className="explore-text">Dive into a world of fun and creativity! Explore a variety of engaging games and useful tools that will keep you entertained and inspired.</p>
            <blockquote className="quote">
                "Games are the most elevated form of investigation." – Albert Einstein
            </blockquote>
            
            <div className="games-list">
                {gamesAndTools.map((game, index) => (
                    <div className="game-item" key={index}>
                        <h2>{game.title}</h2>
                        <p>{game.description}</p>
                        <Link to={game.path} className="game-link">Play Now</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Footer() {
    return (
        <div className="footer">
            <p>&copy; 2024 Interactive Games & Tools Platform. All Rights Reserved.</p>
            <p>Contact: <a href="mailto:abdulgafoormd2003@gmail.com" style={{ color: 'white' }}>abdulgafoormd2003@gmail.com</a></p>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div className="container">
                <h1 className="title">Game On!</h1>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/dice">Dice Roller</Link></li>
                        <li><Link to="/housie">Housie Numbers</Link></li>
                        <li><Link to="/tic-tac-toe">Tic Tac Toe</Link></li>
                        <li><Link to="/rock-paper-scissors">Rock Paper Scissors</Link></li>
                        <li><Link to="/heads-tails">Heads or Tails</Link></li>
                        <li><Link to="/number-guessing">Number Guessing Game</Link></li>
                        <li><Link to="/color-picker">Color Picker</Link></li>
                        <li><Link to="/calculator">Calculator</Link></li>
                        <li><Link to="/permcomb">Permutation & Combination</Link></li>
                        <li><Link to="/unit-converter">Unit Converter</Link></li> 
                        <li><Link to="/countdown-timer">Countdown Timer</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dice" element={<DiceRoller />} />
                    <Route path="/housie" element={<Housie />} />
                    <Route path="/tic-tac-toe" element={<TicTacToe />} />
                    <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
                    <Route path="/heads-tails" element={<HeadsTails />} />
                    <Route path="/number-guessing" element={<NumberGuessing />} />
                    <Route path="/color-picker" element={<ColorPicker />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/permcomb" element={<PermCombCalculator />} />
                    <Route path="/unit-converter" element={<UnitConverter />} /> 
                    <Route path="/countdown-timer" element={<CountdownTimer />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
