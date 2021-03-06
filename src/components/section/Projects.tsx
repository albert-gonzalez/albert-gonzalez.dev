import React from "react";
import { Section, SectionHeader, Separator } from "./Section";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import nsb from "../../images/icons/nsb.jpg";
import easyTimer from "../../images/icons/easytimer.jpg";
import devAdventure from "../../images/icons/devAdventure.jpg";
import { Card, CardImage, CardText } from "../card/Card";
import { TFunction } from "i18next";

interface Project {
  title: string;
  image: string;
  description: string;
  codeUrl?: string;
  siteUrl?: string;
  playItUrl?: string;
}
const projectsData: Project[] = [
  {
    title: "NoSoloBits",
    image: nsb,
    description: "nsbText",
    codeUrl: undefined,
    siteUrl: "https://www.nosolobits.com",
  },
  {
    title: "EasyTimer.js",
    image: easyTimer,
    description: "easyTimerText",
    codeUrl: "https://github.com/albert-gonzalez/easytimer.js",
    siteUrl: "https://albert-gonzalez.github.io/easytimer.js",
  },
  {
    title: "A Dev's adventure",
    image: devAdventure,
    description: "devAdventureText",
    codeUrl: "https://github.com/albert-gonzalez/a-dev-adventure-game",
    playItUrl: "/a-dev-adventure",
  },
];

export const renderProjects = (
  t: TFunction,
  projectsData: Project[]
): React.ReactElement => {
  return (
    <React.Fragment>
      {projectsData.map((project) => (
        <Card key={project.title}>
          <CardImage backgroundImage={project.image}></CardImage>
          <CardText>
            <h3>{project.title}</h3>

            <Trans>{t(project.description)}</Trans>
            {project.siteUrl ? (
              <p
                dangerouslySetInnerHTML={{
                  __html: t("visitSite", {
                    url: project.siteUrl,
                  }),
                }}
              />
            ) : (
              ""
            )}

            {project.codeUrl ? (
              <p
                dangerouslySetInnerHTML={{
                  __html: t("codeOn", {
                    url: project.codeUrl,
                  }),
                }}
              />
            ) : (
              ""
            )}

            {project.playItUrl ? (
              <p>
                <Link to={project.playItUrl}>{t("playItNow")}</Link>
              </p>
            ) : (
              ""
            )}
          </CardText>
        </Card>
      ))}
    </React.Fragment>
  );
};

export const Projects = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Section id="projects">
      <SectionHeader>{t("projects")}</SectionHeader>
      {renderProjects(t, projectsData)}
      <Trans i18nKey="moreProjects">
        <p>
          You can see more of my projects on
          <a
            href="https://github.com/albert-gonzalez"
            target="_blank"
            rel="noreferrer"
          >
            my Github profile
          </a>
        </p>
      </Trans>
      <Separator />
    </Section>
  );
};
