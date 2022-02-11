import { Link } from "gatsby-plugin-react-i18next";
import * as React from "react";
import styled from "styled-components";
import logo from "../../images/icons/favicon.png";
import githubLogo from "../../images/icons/github.png";
import { LanguageSelector } from "../languageSelector/LanguageSelector";

const StyledBar = styled.div`
  background-color: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.white};
  padding: 5px;
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-between;
  font-size: 1em;
  position: sticky;
  top: 0;
  z-index: 2;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  line-height: 1.3em;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Option = styled.div`
  padding: 0 5px;
`;

export const Bar = (): JSX.Element => (
  <StyledBar>
    <Left>
      <Option>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </Option>
      <Option>
        <Link to="/">
          Albert
          <br />
          González
        </Link>
      </Option>
    </Left>
    <Right>
      <Option>
        <a
          href="https://github.com/albert-gonzalez/albert-gonzalez.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubLogo} alt="Github" />
        </a>
      </Option>
      <Option>
        <LanguageSelector />
      </Option>
    </Right>
  </StyledBar>
);
