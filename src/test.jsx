/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [uppercase, setUppercase] = useState(false);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(false);
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);
    const [show, setShow] = useState(false);

    const handleChange = (event) => {
        setLength(event.target.value);
    };

    const handleToggle = (event) => {
        const { name, checked } = event.target;
        switch (name) {
            case 'uppercase':
                setUppercase(checked);
                break;
            case 'lowercase':
                setLowercase(checked);
                break;
            case 'numbers':
                setNumbers(checked);
                break;
            case 'symbols':
                setSymbols(checked);
                break;
            default:
                break;
        }
    };

    const showHidePassword = () => {
        setShow((prevState) => !prevState);
    };

    const generatePassword = (e) => {
        e.preventDefault();
        const charset = {
            uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lowercase: 'abcdefghijklmnopqrstuvwxyz',
            numbers: '0123456789',
            symbols: '!@#$%^&*()[]',
        };

        let selectedChars = '';
        if (uppercase) selectedChars += charset.uppercase;
        if (lowercase) selectedChars += charset.lowercase;
        if (numbers) selectedChars += charset.numbers;
        if (symbols) selectedChars += charset.symbols;

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * selectedChars.length);
            generatedPassword += selectedChars[randomIndex];
        }

        setPassword(generatedPassword);
        calculatePasswordStrength(generatedPassword);
    };

    const copyPassword = async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(password);
        } catch (error) {
            alert('Cannot copy');
        }
    };

    const calculatePasswordStrength = (generatedPassword) => {
        let strength = 0;
        if (generatedPassword.length >= 8 && generatedPassword.length < 12) {
            strength = 1;
        } else if (generatedPassword.length >= 12 && generatedPassword.length < 16) {
            strength = 2;
        } else if (generatedPassword.length >= 16 && generatedPassword.length < 20) {
            strength = 3;
        } else if (generatedPassword.length >= 20) {
            strength = 4;
        }

        if (uppercase) strength++;
        if (lowercase) strength++;
        if (numbers) strength++;
        if (symbols) strength++;

        setStrength(strength);
    };

    const getPasswordStrengthText = () => {
        if (strength <= 0) {
            return 'Poor';
        } else if (strength <= 1) {
            return 'Weak';
        } else if (strength <= 2) {
            return 'Medium';
        } else if (strength <= 3) {
            return 'Ok';
        } else if (strength <= 4) {
            return 'Strong';
        } else if (strength <= 5) {
            return 'Very Strong';
        } else {
            return 'Extremely Strong';
        }
    };

    const renderPasswordStrength = () => {
        const strengthText = getPasswordStrengthText();
        const color =
            strength <= 2 ? 'red' : strength <= 4 ? 'orange' : 'green';

        return (
            <div>
                <span style={{ fontWeight: 'bold' }}>Strength: </span>
                <span style={{ color }}>{strengthText}</span>
            </div>
        );
    };

    return (
        <div>
            <h2>Password Generator</h2>
            <form onSubmit={generatePassword}>
                <div>
                    <label>Password Length:</label>
                    <input
                        type="number"
                        value={length}
                        min={8}
                        max={30}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password Options:</label>
                    <div>
                        <input
                            type="checkbox"
                            name="uppercase"
                            checked={uppercase}
                            onChange={handleToggle}
                        />
                        <label>Uppercase Letters</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="lowercase"
                            checked={lowercase}
                            onChange={handleToggle}
                        />
                        <label>Lowercase Letters</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="numbers"
                            checked={numbers}
                            onChange={handleToggle}
                        />
                        <label>Numbers</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="symbols"
                            checked={symbols}
                            onChange={handleToggle}
                        />
                        <label>Symbols</label>
                    </div>
                </div>
                <button type="submit">Generate Password</button>
            </form>
            {password && (
                <div>
                    <div>
                        <label>Password:</label>
                        <input
                            type={show ? 'text' : 'password'}
                            value={password}
                            readOnly
                        />
                    </div>
                    <button onClick={copyPassword}>Copy Password</button>
                    {renderPasswordStrength()}
                </div>
            )}
        </div>
    );
};

export default PasswordGenerator;
