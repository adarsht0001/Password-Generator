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

  return { handleToggle, uppercase, lowercase, numbers, symbols };
}

export default useGeneratePassword;
