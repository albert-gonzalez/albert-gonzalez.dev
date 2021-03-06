import React from "react";
import { graphql } from "gatsby";
import { Helmet, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { Game } from "../components/game/Game";
import { Section } from "../components/section/Section";
import Layout from "../components/layout/Layout";
import Seo from "../components/layout/Seo";
import gameImage from "../images/hero/gameTitle.jpg";

const GamePage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo
        title="Albert González - A Dev's Adventure"
        description={t("devAdventureIntro")}
        image={gameImage}
      />
      <Game />
      <Section>
        <h2>{t("devAdventureTitle")}</h2>
        <Trans>
          <p>{t("devAdventureIntro")}</p>
          <h3>{t("devAdventureControls")}</h3>
          <ul>
            <li>{t("devAdventureMovement")}</li>
            <li>{t("devAdventureMenu")}</li>
            <li>{t("devAdventureSystem")}</li>
          </ul>
          <h3>{t("devAdventureCredits")}</h3>
          <p>{t("devAdventureCreditsDescription")}</p>
          <ul>
            <li>
              <a href="https://phaser.io/">Phaser Game Framework</a>
            </li>
            <li>
              <a href="https://www.mapeditor.org/">Tiled Map Editor</a>
            </li>
            <li>
              <a href="https://pipoya.itch.io/pipoya-rpg-tileset-32x32">
                RPG Tileset 32x32 - Pipoya
              </a>
            </li>
            <li>
              <a href="https://limezu.itch.io/moderninteriors">
                Modern Interiors Tileset - LimeZu
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/jrpg-town-music">
                JRPG Town Music - Scott Elliott
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/rpg-town-theme-1">
                JRPG Town Theme - LarsG
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/prologue-theme">
                Prologue Music - Cleyton Kauffman
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/boss-battle-theme">
                Boss Battle Theme- Cleyton Kauffman
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/win-music-2">
                Win Music - Remaxim
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/game-over">
                Game Over Music - Kistol
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/the-epic-adventure-album">
                The Epic Adventure Album - Northivanastan
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/menu-selection-click">
                Menu selection click - NenadSimic
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/steam-release-sounds">
                Steam release sounds - Bart
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/water-flowing-sound">
                Water flowing sound - Erxer1
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/single-key-press-sounds">
                Single key press sounds - Eklee
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/battle-sound-effects">
                Battle Sound Effects - Ogrebane
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/monster-sound-pack-volume-1">
                Monster sound pack volume 1 - Ogrebane
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/replenish-life-force-sound">
                Replenish life force sound - Iwan Gabovitch
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/book-pages">
                Book Pages - Spookymodem
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/chunky-explosion">
                Chunky Explosion - Joth
              </a>
            </li>
            <li>
              <a href="https://opengameart.org/content/magic-spell-sfx">
                Magic Spell SFX - JaggedStone
              </a>
            </li>
            <li>
              <a href="https://commons.wikimedia.org/wiki/File:Unofficial_JavaScript_logo_2.svg">
                Javascript Logo - Wikimedia
              </a>
            </li>
            <li>
              <a href="https://nodejs.org/ca/about/resources/">
                Node.js Logo - Node.js
              </a>
            </li>
            <li>
              <a href="https://commons.wikimedia.org/wiki/File:HTML5_logo_and_wordmark.svg">
                HTML Logo - Wikimedia
              </a>
            </li>
            <li>
              <a href="https://commons.wikimedia.org/wiki/File:CSS3_logo_and_wordmark.svg">
                CSS Logo - Wikimedia
              </a>
            </li>
            <li>
              <a href="https://commons.wikimedia.org/wiki/File:Webysther_20160423_-_Elephpant.svg">
                PHP Elephant - Wikimedia
              </a>
            </li>
            <li>
              <a href="https://www.docker.com/company/newsroom/media-resources">
                Docker Logo - Docker
              </a>
            </li>
            <li>
              <a href="https://icon-icons.com/icon/catalonia-flag/106770">
                Catalonia Flag - Icon Icons
              </a>
            </li>
            <li>
              <a href="https://www.flaticon.com/free-icon/united-kingdom_197374">
                UK Flag - Flaticon
              </a>
            </li>
            <li>
              <a href="https://icon-icons.com/icon/flag-spain/106784">
                Spain Flag - Icon Icons
              </a>
            </li>
            <li>
              <a href="https://slayersclub.bethesda.net/en/media#wallpapers">
                Doom Artwork - Bethesda
              </a>
            </li>
          </ul>
        </Trans>
      </Section>
    </Layout>
  );
};

export default GamePage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
