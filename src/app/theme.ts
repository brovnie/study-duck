"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto-mono), monospace",
  },
  palette: {
    primary: {
      main: "#fcd34d", //amber-300
      light: "#fef3c7",
      dark: "#facc15",
      contrastText: "#100D08",
    },
    secondary: {
      main: "#fafafa",
      light: "#fafafa",
      dark: "#f5f5f5",
      contrastText: "#100D08",
    },
  },
});

export default theme;
