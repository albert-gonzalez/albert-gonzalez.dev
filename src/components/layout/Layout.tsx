import * as React from "react";
import { Bar } from "../bar/Bar";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../themes/light";
import { Footer } from "../footer/Footer";
import { Helmet } from "gatsby-plugin-react-i18next";
import { Global } from "../../themes/Global";

export const Layout = ({
  children,
}: {
  children: JSX.Element[];
}): JSX.Element => (
  <React.Fragment>
    <ThemeProvider theme={lightTheme}>
      <Helmet title="Albert González - Software Developer" />
      <Global />
      <Bar />
      {children}
      <Footer />
    </ThemeProvider>
  </React.Fragment>
);

export default Layout;
