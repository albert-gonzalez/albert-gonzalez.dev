import React from "react";
import enFlag from "../../images/icons/en.svg";
import caFlag from "../../images/icons/ca.svg";
import esFlag from "../../images/icons/es.svg";
import { DropDown, DropDownIcon } from "../dropDown/DropDown";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

const flags: Record<string, string> = {
  en: enFlag,
  ca: caFlag,
  es: esFlag,
};

const renderContent = (originalPath: string) => (
  <React.Fragment>
    <Link to={originalPath} language="en">
      <DropDownIcon src={enFlag} />
    </Link>
    <Link to={originalPath} language="ca">
      <DropDownIcon src={caFlag} />
    </Link>
    <Link to={originalPath} language="es">
      <DropDownIcon src={esFlag} />
    </Link>
  </React.Fragment>
);
export const LanguageSelector = (): JSX.Element => {
  const { originalPath, language } = useI18next();

  return (
    <DropDown
      className="language-selector"
      button={<DropDownIcon src={flags[language]} />}
      content={renderContent(originalPath)}
    ></DropDown>
  );
};
