import { createTheme } from "@mui/material";
import {} from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: "##fbc02d",
      dark: "##fbc02d",
      light: "##fbc02d",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#00bcd4",
      dark: "#26c6da",
      light: "#4dd0e1",
      contrastText: "#ffffff",
    },
    background: {
      default: "#303134",
      paper: "#202124",
    },
  },
});
