// src/components/Calculator.js
import React, { useState } from 'react';
import './Calculator.css'; // Importing the styling

const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [error, setError] = useState(false);

    const handleClick = (value) => {
        if (error) setError(false); // Reset error state on any new input
        setExpression(expression + value);
    };

    const handleClear = () => {
        setExpression('');
        setError(false);
    };

    const handleCalculate = () => {
        try {
            // Using Function constructor instead of eval for better security
            const result = Function('"use strict"; return (' + expression + ')')();
            setExpression(result.toString());
        } catch {
            setError(true);
            setExpression('Error');
        }
    };

    return (
        <div className="calculator-container">
            <h2>Calculator</h2>
            <div className={`display ${error ? 'error' : ''}`}>{expression || '0'}</div>
            <div className="buttons">
                {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', '/'].map((btn, index) => (
                    <button key={index} onClick={btn === '=' ? handleCalculate : () => handleClick(btn)}>
                        {btn}
                    </button>
                ))}
                <button onClick={handleClear} className="clear-btn">C</button>
            </div>
        </div>
    );
};

export default Calculator;
