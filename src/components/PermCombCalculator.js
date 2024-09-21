// src/components/PermCombCalculator.js
import React, { useState } from 'react';
import './PermCombCalculator.css';

const factorial = (n) => {
    return n <= 1 ? 1 : n * factorial(n - 1);
};

const PermCombCalculator = () => {
    const [n, setN] = useState('');
    const [r, setR] = useState('');
    const [result, setResult] = useState({ permutations: null, combinations: null });

    const calculate = () => {
        const nValue = parseInt(n);
        const rValue = parseInt(r);
        
        if (nValue < 0 || rValue < 0 || rValue > nValue) {
            alert("Please enter valid values for n and r.");
            return;
        }

        const permutations = factorial(nValue) / factorial(nValue - rValue);
        const combinations = factorial(nValue) / (factorial(rValue) * factorial(nValue - rValue));
        
        setResult({ permutations, combinations });
    };

    return (
        <div className="perm-comb-container">
            <h2>Permutation & Combination Calculator</h2>
            <div className="input-group">
                <label htmlFor="n">Enter n (Total Items):</label>
                <input
                    type="number"
                    id="n"
                    value={n}
                    onChange={(e) => setN(e.target.value)}
                    min="0"
                />
            </div>
            <div className="input-group">
                <label htmlFor="r">Enter r (Items to Choose):</label>
                <input
                    type="number"
                    id="r"
                    value={r}
                    onChange={(e) => setR(e.target.value)}
                    min="0"
                />
            </div>
            <button onClick={calculate} className="calculate-button">Calculate</button>
            {result.permutations !== null && (
                <div className="result">
                    <p>Permutations (nPr): {result.permutations}</p>
                    <p>Combinations (nCr): {result.combinations}</p>
                </div>
            )}
        </div>
    );
};

export default PermCombCalculator;
