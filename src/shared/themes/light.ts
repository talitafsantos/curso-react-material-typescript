import { createTheme } from "@mui/material";
import {} from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#ffd600",
      dark: "#ffd600",
      light: "#ffd600",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#00bcd4",
      dark: "#26c6da",
      light: "#4dd0e1",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f7f6f3",
      paper: "#ffffff",
    },
  },
});