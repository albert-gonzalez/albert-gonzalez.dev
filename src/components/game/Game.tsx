import { useI18next } from "gatsby-plugin-react-i18next";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { withPrefix } from "gatsby";

const GameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.mediumLightGray};
  padding-top: 10px;

  iframe {
    overflow: hidden;

    @media screen and (orientation: portrait) {
      width: 100vw;
    }

    @media screen and (orientation: landscape) {
      width: 70vw;
    }
  }
`;

export const Game = (): JSX.Element => {
  const iframe = useRef(null);
  useEffect(() => {
    const onWindowResize = () => resizeIframe(iframe.current);
    window.addEventListener("resize", onWindowResize);

    return () => window.removeEventListener("resize", onWindowResize);
  }, []);
  const { language } = useI18next();
  const resizeIframe = (element?: HTMLIFrameElement | null) => {
    if (!element) {
      return;
    }

    element.height =
      (element.contentWindow?.document.body.scrollHeight || 0) + 10 + "px";
  };

  return (
    <GameContainer>
      <iframe
        title="A Dev's Adventure"
        src={withPrefix(`/static/game/game.html?lng=${language}`)}
        allowFullScreen
        onLoad={(ev) => resizeIframe(ev.target as HTMLIFrameElement)}
        ref={iframe}
        seamless
      />
    </GameContainer>
  );
};
