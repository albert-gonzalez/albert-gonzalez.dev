import React from "react";
import { Section, Separator } from "./Section";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import nsb from "../../images/icons/nsb.png";
import easyTimer from "../../images/icons/easytimer.png";
import devAdventure from "../../images/icons/devAdventure.png";
import { Card, CardImage, CardText } from "../card/Card";

export const Projects = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Section id="projects">
      <div>
        <h2>{t("projects")}</h2>
      </div>
      <Card>
        <CardImage backgroundImage={nsb}></CardImage>
        <CardText>
          <h3>NoSoloBits</h3>

          <Trans>{t("nsbText")}</Trans>
          <p>
            Site:{" "}
            <a href="https://www.nosolobits.com">https://www.nosolobits.com</a>
          </p>
        </CardText>
      </Card>
      <Card>
        <CardImage backgroundImage={easyTimer}></CardImage>
        <CardText>
          <h3>EasyTimer.js</h3>

          <Trans>{t("easyTimerText")}</Trans>
          <p
            dangerouslySetInnerHTML={{
              __html: t("codeOn", {
                url: "https://github.com/albert-gonzalez/easytimer.js",
              }),
            }}
          />
        </CardText>
      </Card>
      <Card>
        <CardImage backgroundImage={devAdventure}></CardImage>
        <CardText>
          <h3>A Dev&apos;s adventure</h3>

          <Trans>{t("devAdventureText")}</Trans>
          <p
            dangerouslySetInnerHTML={{
              __html: t("codeOn", {
                url: "https://github.com/albert-gonzalez/a-dev-adventure-game",
              }),
            }}
          />
        </CardText>
      </Card>
      <Trans i18nKey="moreProjects">
        <p>
          You can see more of my projects on
          <a href="https://github.com/albert-gonzalez">my Github profile</a>
        </p>
      </Trans>
      <Separator />
    </Section>
  );
};
