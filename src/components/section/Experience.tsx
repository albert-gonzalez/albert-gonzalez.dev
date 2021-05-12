import React from "react";
import { Section, Separator } from "./Section";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { Card, CardText } from "../card/Card";
import { Badge, BadgeContainer } from "../badge/Badge";
import { TFunction } from "i18next";

const experienceData = [
  {
    title: "mtTitle",
    company: "Mailtrack",
    dates: "mtDates",
    description: "mtDescription",
    badges: [
      "PHP",
      "Node.js",
      "TypeScript",
      "CSS",
      "HTML",
      "AWS",
      "CI",
      "Agile",
      "DDD",
    ],
  },
  {
    title: "atrapaloLeadTitle",
    company: "Atrápalo",
    dates: "atrapaloLeadDates",
    description: "atrapaloLeadDescription",
    badges: ["Node.js", "JS", "CSS", "HTML", "Agile", "Management"],
  },
  {
    title: "atrapaloBackendTitle",
    company: "Atrápalo",
    dates: "atrapaloBackendDates",
    description: "atrapaloBackendDescription",
    badges: ["PHP", "Node.js", "JS", "Agile", "CI", "DDD"],
  },
  {
    title: "carverTitle",
    company: "Carver",
    dates: "carverDates",
    description: "carverDescription",
    badges: ["Java", "JS", "CSS", "HTML"],
  },
  {
    title: "lcfibTitle",
    company: "LCFIB",
    dates: "lcfibDates",
    description: "lcfibDescription",
    badges: ["PHP", "Java", "Oracle Forms", "Oracle Reports", "JS"],
  },
];

const renderExperience = (t: TFunction) => {
  return experienceData.map((exp) => (
    <Card key={exp.title}>
      <CardText>
        <h3>{t(exp.title)}</h3>
        <h5>{exp.company}</h5>
        <h5>{t(exp.dates)}</h5>
        <Trans>{t(exp.description)}</Trans>
        <Separator />
        <BadgeContainer>
          {exp.badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </BadgeContainer>
      </CardText>
    </Card>
  ));
};

export const Experience = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Section id="experience">
      <h2>{t("experience")}</h2>
      {renderExperience(t)}
    </Section>
  );
};
