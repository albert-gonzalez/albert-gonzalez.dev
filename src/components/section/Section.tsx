import React from "react";
import styled from "styled-components";

export const Section = styled.div`
  margin: 0 auto ${(props) => props.theme.components.marginBottom} auto;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: ${(props) => props.theme.breakpoints.tablet};
  }

  h2 {
    font-size: 2.5em;
    margin-bottom: ${(props) => props.theme.components.marginBottom};
  }

  p {
    font-size: 1.2em;
    line-height: 1.5em;
    margin-bottom: ${(props) => props.theme.components.marginBottom};
    text-align: justify;
  }
`;
