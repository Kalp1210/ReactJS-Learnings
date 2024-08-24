// this is context file for project05 part B

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// provider or normal context dono ek hi isme export kar rahe hai
export const ThemeProvider = ThemeContext.Provider;

// you can create custom hooks isme hi

export default function useTheme() {
  return useContext(ThemeContext);
}
