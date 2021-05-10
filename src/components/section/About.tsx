import React from "react";
import styled from "styled-components";
import { Section } from "./Section";
import github from "../../images/icons/githubDark.png";
import linkedIn from "../../images/icons/linkedIn.png";
import twitter from "../../images/icons/twitter.png";
import { useTranslation } from "gatsby-plugin-react-i18next";

const AboutContainer = styled(Section)``;

const AboutFlex = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 0 20px 0 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const AboutIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 25%;
    flex-direction: column;
    margin-right: 20px;
  }
`;

const AboutText = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 75%;
  }
`;

export const About = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <AboutContainer id="about">
      <AboutFlex>
        <h2>{t("about")}</h2>
      </AboutFlex>
      <AboutFlex>
        <AboutIcons>
          <a href="https://www.github.com/albert-gonzalez">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/albert-gonz%C3%A1lez/">
            <img src={linkedIn} alt="LinkedIn" />
          </a>
          <a href="https://www.twitter.com/vacilone">
            <img src={twitter} alt="Twitter" />
          </a>
        </AboutIcons>
        <AboutText>
          <p>
            Born in Barcelona. Since I tried my first computer when I was a
            child I knew that I wanted to work with computers when I grow up.
            With this objective in my mind, I had always been in touch with
            technology and eventually I started a degree in the university to
            accomplished it.
          </p>
          <p>
            I finished Computer Engineering in 2010, and since then I have
            worked as a software developer. I started as a Java Developer, but
            since the beginning I had liked doing web development, so I learned
            PHP, HTML, CSS and JS. Also I am interested in game development and
            from time to time I make a simple game to learn new things.
          </p>
        </AboutText>
      </AboutFlex>
    </AboutContainer>
  );
};
