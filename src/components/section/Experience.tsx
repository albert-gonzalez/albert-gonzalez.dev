import React from "react";
import { Section, Separator } from "./Section";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import nsb from "../../images/icons/nsb.png";
import easyTimer from "../../images/icons/easytimer.png";
import devAdventure from "../../images/icons/devAdventure.png";
import { Card, CardImage, CardText } from "../card/Card";
import { Badge, BadgeContainer } from "../badge/Badge";

export const Experience = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Section id="experience">
      <h2>{t("experience")}</h2>
      <Card>
        <CardText>
          <h3>Software Engineer</h3>
          <h5>Mailtrack</h5>
          <h5>{t("mtDates")}</h5>

          <Trans>{t("mtText")}</Trans>

          <h5>Keywords</h5>
          <BadgeContainer>
            <Badge>PHP</Badge>
            <Badge>Node.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>CSS</Badge>
            <Badge>HTML</Badge>
            <Badge>AWS</Badge>
            <Badge>Agile</Badge>
          </BadgeContainer>
        </CardText>
      </Card>
      <Separator />
    </Section>
  );
};
