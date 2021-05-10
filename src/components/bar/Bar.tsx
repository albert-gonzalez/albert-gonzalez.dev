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
        <img src={logo} alt="Logo" />
      </Option>
      <Option>
        <span>
          Albert
          <br />
          González
        </span>
      </Option>
    </Left>
    <Right>
      <Option>
        <a
          href="https://www.github.com/albert-gonzalez"
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
