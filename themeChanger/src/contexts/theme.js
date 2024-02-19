import { useContext, createContext } from "react";

//Create a Context with default value
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

//Create a provider for respacted Context so that the value of the context is access in children
export const ThemeProvider = ThemeContext.Provider;

//Create custom hook to pass in the context
export default function useTheme() {
  return useContext(ThemeContext);
}
