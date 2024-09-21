// src/components/CountdownTimer.js
import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; // Import the CSS for styling

const CountdownTimer = () => {
    const [time, setTime] = useState(60); // Set default time in seconds
    const [isActive, setIsActive] = useState(false);
    const [inputTime, setInputTime] = useState('');

    useEffect(() => {
        let timer;
        if (isActive && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setIsActive(false);
            alert('Time is up!');
        }
        return () => clearInterval(timer);
    }, [isActive, time]);

    const startTimer = () => {
        if (inputTime > 0) {
            setTime(inputTime);
            setIsActive(true);
            setInputTime('');
        }
    };

    const resetTimer = () => {
        setIsActive(false);
        setTime(60);
        setInputTime('');
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="countdown-timer-container">
            <h2>Countdown Timer</h2>
            <div className="timer-display">{formatTime(time)}</div>
            <input
                type="number"
                value={inputTime}
                onChange={(e) => setInputTime(e.target.value)}
                placeholder="Enter time in seconds"
                min="1"
            />
            <div className="timer-controls">
                <button onClick={startTimer} disabled={isActive || !inputTime}>Start</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default CountdownTimer;
