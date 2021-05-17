import * as React from "react";
import { Bar } from "../bar/Bar";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../themes/light";
import { Footer } from "../footer/Footer";
import { Helmet, useTranslation } from "gatsby-plugin-react-i18next";
import { Global } from "../../themes/Global";
import Seo from "./Seo";
import siteImage from "../../images/hero/page.jpg";

export const Layout = ({
  children,
}: {
  children: JSX.Element[];
}): JSX.Element => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <ThemeProvider theme={lightTheme}>
        <Seo
          title="Albert González - Software Developer"
          description={t("siteDescription")}
          image={siteImage}
        />
        <Helmet title="Albert González - Software Developer" />
        <Global />
        <Bar />
        {children}
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
