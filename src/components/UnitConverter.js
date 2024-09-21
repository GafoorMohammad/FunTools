// src/components/UnitConverter.js
import React, { useState } from 'react';
import './UnitConverter.css'; // Import the CSS for styling

const UnitConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [conversionType, setConversionType] = useState('length');
    const [fromUnit, setFromUnit] = useState('meters');
    const [toUnit, setToUnit] = useState('kilometers');

    const conversionOptions = {
        length: {
            units: ['meters', 'kilometers', 'feet', 'inches'],
            factors: {
                meters: { toKilometers: 0.001, toFeet: 3.28084, toInches: 39.3701 },
                kilometers: { toMeters: 1000, toFeet: 3280.84, toInches: 39370.1 },
                feet: { toMeters: 0.3048, toKilometers: 0.0003048, toInches: 12 },
                inches: { toMeters: 0.0254, toKilometers: 0.0000254, toFeet: 0.0833333 },
            },
        },
        weight: {
            units: ['grams', 'kilograms', 'pounds', 'ounces'],
            factors: {
                grams: { toKilograms: 0.001, toPounds: 0.00220462, toOunces: 0.035274 },
                kilograms: { toGrams: 1000, toPounds: 2.20462, toOunces: 35.274 },
                pounds: { toGrams: 453.592, toKilograms: 0.453592, toOunces: 16 },
                ounces: { toGrams: 28.3495, toKilograms: 0.0283495, toPounds: 0.0625 },
            },
        },
        volume: {
            units: ['liters', 'milliliters', 'gallons', 'cups'],
            factors: {
                liters: { toMilliliters: 1000, toGallons: 0.264172, toCups: 4.22675 },
                milliliters: { toLiters: 0.001, toGallons: 0.000264172, toCups: 0.00422675 },
                gallons: { toLiters: 3.78541, toMilliliters: 3785.41, toCups: 16 },
                cups: { toLiters: 0.236588, toMilliliters: 236.588, toGallons: 0.0625 },
            },
        },
        temperature: {
            units: ['celsius', 'fahrenheit', 'kelvin'],
            conversion: (value, from, to) => {
                if (from === 'celsius') {
                    if (to === 'fahrenheit') return (value * 9/5) + 32;
                    if (to === 'kelvin') return value + 273.15;
                } else if (from === 'fahrenheit') {
                    if (to === 'celsius') return (value - 32) * 5/9;
                    if (to === 'kelvin') return (value - 32) * 5/9 + 273.15;
                } else if (from === 'kelvin') {
                    if (to === 'celsius') return value - 273.15;
                    if (to === 'fahrenheit') return (value - 273.15) * 9/5 + 32;
                }
                return value; // If same unit
            },
        },
    };

    const convertUnits = () => {
        const value = parseFloat(inputValue);
        if (isNaN(value)) return;

        if (conversionType === 'temperature') {
            const result = conversionOptions[conversionType].conversion(value, fromUnit, toUnit);
            setOutputValue(result.toFixed(2));
        } else {
            const conversionFactor = conversionOptions[conversionType].factors[fromUnit][`to${capitalize(toUnit)}`];
            const result = value * conversionFactor;
            setOutputValue(result.toFixed(4));
        }
    };

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className="unit-converter-container">
            <h2>Unit Converter</h2>
            <div className="converter-input">
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter value"
                />
                <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                    {conversionOptions[conversionType].units.map((unit) => (
                        <option key={unit} value={unit}>{capitalize(unit)}</option>
                    ))}
                </select>
            </div>
            <div className="converter-output">
                <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                    {conversionOptions[conversionType].units.map((unit) => (
                        <option key={unit} value={unit}>{capitalize(unit)}</option>
                    ))}
                </select>
                <input type="text" value={outputValue} readOnly placeholder="Converted value" />
            </div>
            <button onClick={convertUnits}>Convert</button>
            <div className="conversion-type">
                <label>Select Conversion Type:</label>
                <select value={conversionType} onChange={(e) => {
                    setConversionType(e.target.value);
                    setFromUnit(conversionOptions[e.target.value].units[0]);
                    setToUnit(conversionOptions[e.target.value].units[1]);
                    setOutputValue('');
                }}>
                    <option value="length">Length</option>
                    <option value="weight">Weight</option>
                    <option value="volume">Volume</option>
                    <option value="temperature">Temperature</option>
                </select>
            </div>
        </div>
    );
};

export default UnitConverter;
