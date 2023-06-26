import { createContext, useState } from "react";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const toogle = () => {
    setDark(!dark);
  };
  return (
    <ThemeContext.Provider value={{ dark, toogle }}>
      {children}
    </ThemeContext.Provider>
  );
};
