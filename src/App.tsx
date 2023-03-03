import { Drawer } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Drawer></Drawer>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
};
