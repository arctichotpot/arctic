"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { AppProgressBar } from "next-nprogress-bar";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <>
      <AppProgressBar
        height="4px"
        color="#006FEE"
        options={{ showSpinner: false }}
        shallowRouting
      ></AppProgressBar>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </>
  );
}
