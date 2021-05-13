import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../src/themes/light";

const AllTheProviders = ({ children }: { children?: any }): any => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options?: RenderOptions
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
