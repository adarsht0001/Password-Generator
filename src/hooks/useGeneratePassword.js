/* eslint-disable no-unused-vars */
import { useState } from "react";

function useGeneratePassword() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);

  const handleToggle = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "uppercase":
        setUppercase(checked);
        break;
      case "lowercase":
        setLowercase(checked);
        break;
      case "numbers":
        setNumbers(checked);
        break;
      case "symbols":
        setSymbols(checked);
        break;
      default:
        break;
    }
  };
  const createPassword = (length) => {
    const charset = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()[]",
    };

    let selectedChars = "";
    if (uppercase) selectedChars += charset.uppercase;
    if (lowercase) selectedChars += charset.lowercase;
    if (numbers) selectedChars += charset.numbers;
    if (symbols) selectedChars += charset.symbols;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * selectedChars.length);
      generatedPassword += selectedChars[randomIndex];
    }
    return generatedPassword;
  };

  return {
    handleToggle,
    uppercase,
    lowercase,
    numbers,
    symbols,
    createPassword,
  };
}

export default useGeneratePassword;
