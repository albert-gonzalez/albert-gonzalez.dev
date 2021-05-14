import React from "react";
import {
  Section,
  SectionFlex,
  SectionFlexReverse,
  SectionIcons,
  SectionText,
  Separator,
} from "./Section";
import github from "../../images/icons/githubDark.png";
import linkedIn from "../../images/icons/linkedIn.png";
import twitter from "../../images/icons/twitter.png";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

export const About = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Section id="about">
      <SectionFlex>
        <h2>{t("about")}</h2>
      </SectionFlex>
      <SectionFlexReverse>
        <SectionIcons>
          <a
            href="https://www.github.com/albert-gonzalez"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/albert-gonz%C3%A1lez/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedIn} alt="LinkedIn" />
          </a>
          <a
            href="https://www.twitter.com/vacilone"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="Twitter" />
          </a>
        </SectionIcons>
        <SectionText>
          <Trans>{t("aboutText")}</Trans>
        </SectionText>
      </SectionFlexReverse>
      <Separator />
    </Section>
  );
};
