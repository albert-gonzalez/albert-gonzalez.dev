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
      { text: "PHP", type: "back" },
      { text: "Node.js", type: "back" },
      { text: "MySQL", type: "back" },
      { text: "Redis", type: "back" },
      { text: "AWS", type: "back" },
      { text: "TypeScript", type: "front" },
      { text: "CSS", type: "front" },
      { text: "HTML", type: "front" },
      { text: "Agile", type: "methodology" },
      { text: "CI", type: "methodology" },
      { text: "DDD", type: "methodology" },
    ],
  },
  {
    title: "atrapaloLeadTitle",
    company: "Atrápalo",
    dates: "atrapaloLeadDates",
    description: "atrapaloLeadDescription",
    badges: [
      { text: "Node.js", type: "back" },
      { text: "JS", type: "front" },
      { text: "CSS", type: "front" },
      { text: "HTML", type: "front" },
      { text: "Agile", type: "methodology" },
      { text: "Management", type: "methodology" },
    ],
  },
  {
    title: "atrapaloBackendTitle",
    company: "Atrápalo",
    dates: "atrapaloBackendDates",
    description: "atrapaloBackendDescription",
    badges: [
      { text: "PHP", type: "back" },
      { text: "Node.js", type: "back" },
      { text: "MySQL", type: "back" },
      { text: "Redis", type: "back" },
      { text: "RabbitMQ", type: "back" },
      { text: "JS", type: "front" },
      { text: "Agile", type: "methodology" },
      { text: "CI", type: "methodology" },
      { text: "DDD", type: "methodology" },
    ],
  },
  {
    title: "carverTitle",
    company: "Carver Advanced Systems",
    dates: "carverDates",
    description: "carverDescription",
    badges: [
      { text: "Java", type: "back" },
      { text: "Oracle SQL", type: "back" },
      { text: "JS", type: "front" },
      { text: "CSS", type: "front" },
      { text: "HTML", type: "front" },
    ],
  },
  {
    title: "lcfibTitle",
    company: "LCFIB",
    dates: "lcfibDates",
    description: "lcfibDescription",
    badges: [
      { text: "PHP", type: "back" },
      { text: "Java", type: "back" },
      { text: "Oracle Forms", type: "back" },
      { text: "Oracle Reports", type: "back" },
      { text: "JS", type: "front" },
    ],
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
            <Badge key={badge.text} className={badge.type}>
              {badge.text}
            </Badge>
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
