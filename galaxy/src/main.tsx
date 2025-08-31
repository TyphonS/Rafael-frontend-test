import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Galaxies from "./Galaxies";
// import "./index.css";
import theme from "./types/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galaxies" element={<Galaxies />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);