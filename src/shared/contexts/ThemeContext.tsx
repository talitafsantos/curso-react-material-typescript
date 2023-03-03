import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "./../themes";
import { Box } from "@mui/system";

interface IThemeContextDate {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

interface IAppThemeProvider {
  children: React.ReactNode;
}

const ThemeContext = createContext({} as IThemeContextDate);
//Hook customizado
export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IAppThemeProvider> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");
  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}></ThemeProvider>
      <Box
        width="100vw"
        height="100vh"
        bgcolor={theme.palette.background.default}
      >
        {children}
      </Box>
    </ThemeContext.Provider>
  );
};

/*
interface IAppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children,
}) => {};
*/
