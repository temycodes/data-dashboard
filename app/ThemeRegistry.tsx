"use client";

import * as React from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, ThemeProvider, createTheme, IconButton } from "@mui/material";
import lightTheme from "../theme/lightTheme";
import darkTheme from "../theme/darkTheme";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");

  const theme = React.useMemo(() => createTheme(mode === "light" ? lightTheme : darkTheme), [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <IconButton
          onClick={toggleTheme}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 9999,
          }}
        >
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>

        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
