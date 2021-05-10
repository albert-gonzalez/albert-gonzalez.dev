import * as React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import logo from "../../images/icons/favicon.png";

const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.white};
  padding: 20px;
  font-size: 1.3em;
  text-align: center;
  line-height: 1.5em;
`;

export const Footer = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <span>{t("footer")}</span>
      <br />
      <img src={logo} alt="Logo" />
    </FooterContainer>
  );
};
