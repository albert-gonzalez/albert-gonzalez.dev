import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import aboutImage from "../../images/hero/about.jpg";
import gameImage from "../../images/hero/game.jpg";
import projectsImage from "../../images/hero/projects.jpg";
import experienceImage from "../../images/hero/experience.jpg";

interface HeroSectionColorProps {
  backgroundColor: string;
}

interface HeroSectionImageProps {
  backgroundImage: string;
}

const HeroContainer = styled.div`
  height: calc(100vh - 60px);
  overflow: hidden;
  margin-bottom: ${(props) => props.theme.components.margin};
`;

const HeroExpandedContainer = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.lightGray};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 -5%;

  @media (min-width: ${(props) => props.theme.breakpoints.largeDesktop}) {
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0 -2%;
  }
`;

const HeroSectionSkewed = styled.a`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  transform: skew(-3deg);
  width: 50%;
  height: 50%;
  overflow: hidden;
  text-decoration: none;

  &:hover {
    transform: skew(-3deg) scale(1.05);
    transition: 0.5s transform;
    z-index: 1;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.largeDesktop}) {
    height: 100%;
  } ;
`;

const HeroSectionColor = styled.div<HeroSectionColorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
`;

const HeroSectionImage = styled.div<HeroSectionImageProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  width: 120%;
  height: 100%;
  transform: skew(3deg);
  margin: 0 -10%;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 100%;
  } ;
`;

const HeroSectionText = styled.span`
  font-size: 1.5em;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  margin: 0 20%;
  text-shadow: 1px 1px 2px ${(props) => props.theme.colors.black};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 3em;
  }
`;

export const Hero = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <HeroContainer>
      <HeroExpandedContainer>
        <HeroSectionSkewed href="#about">
          <HeroSectionImage backgroundImage={aboutImage}>
            <HeroSectionColor backgroundColor="rgba(245, 223, 77, 0.5)">
              <HeroSectionText>{t("about")}</HeroSectionText>
            </HeroSectionColor>
          </HeroSectionImage>
        </HeroSectionSkewed>

        <HeroSectionSkewed>
          <HeroSectionImage backgroundImage={gameImage}>
            <HeroSectionColor backgroundColor="rgba(83, 162, 150, 0.5)">
              <HeroSectionText>{t("game")}</HeroSectionText>
            </HeroSectionColor>
          </HeroSectionImage>
        </HeroSectionSkewed>

        <HeroSectionSkewed href="#projects">
          <HeroSectionImage backgroundImage={projectsImage}>
            <HeroSectionColor backgroundColor="rgba(186, 38, 60, 0.5)">
              <HeroSectionText>{t("projects")}</HeroSectionText>
            </HeroSectionColor>
          </HeroSectionImage>
        </HeroSectionSkewed>

        <HeroSectionSkewed>
          <HeroSectionImage backgroundImage={experienceImage}>
            <HeroSectionColor backgroundColor="rgba(130, 158, 186, 0.5)">
              <HeroSectionText>{t("experience")}</HeroSectionText>
            </HeroSectionColor>
          </HeroSectionImage>
        </HeroSectionSkewed>
      </HeroExpandedContainer>
    </HeroContainer>
  );
};
