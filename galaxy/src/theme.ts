import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#6c5ce7" },
    secondary: { main: "#a29bfe" },
    background: { default: "#0c0c0c", paper: "#1a1a1a" },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontWeight: 700 },
  },
});

export default theme;
