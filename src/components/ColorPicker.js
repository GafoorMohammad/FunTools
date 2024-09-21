// src/components/ColorPicker.js
import React, { useState } from 'react';
import './ColorPicker.css'; // Importing the CSS for styling

const ColorPicker = () => {
    const [color, setColor] = useState('#ffffff');
    const [changeBackground, setChangeBackground] = useState(false);

    const handleChange = (e) => {
        setColor(e.target.value);
    };

    const toggleBackground = () => {
        setChangeBackground(!changeBackground);
    };

    const resetColor = () => {
        setColor('#ffffff');
        setChangeBackground(false);
    };

    return (
        <div className={`color-picker-container ${changeBackground ? 'bg-color' : ''}`} style={{ backgroundColor: changeBackground ? color : '' }}>
            <h2>Color Picker</h2>
            <input
                type="color"
                value={color}
                onChange={handleChange}
                className="color-input"
            />
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <div className="buttons">
                <button onClick={toggleBackground} className="toggle-btn">
                    {changeBackground ? 'Change Layout Only' : 'Change Background'}
                </button>
                <button onClick={resetColor} className="reset-btn">Reset</button>
            </div>
        </div>
    );
};

export default ColorPicker;
