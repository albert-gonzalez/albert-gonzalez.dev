import styled from "styled-components";

interface CardImageProps {
  backgroundImage: string;
}

export const Card = styled.div`
  margin: 25px;
  margin-top: 0;
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 1px 1px 5px ${(props) => props.theme.colors.mediumGray};
  overflow: hidden;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const CardImage = styled.div<CardImageProps>`
  justify-content: space-evenly;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.backgroundImage});
  width: 100%;
  height: 250px;
  margin-bottom: ${(props) => props.theme.components.margin};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 30%;
    height: auto;
    margin-bottom: 0;
  }
`;

export const CardSubtitle = styled.div``;

export const CardText = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;
