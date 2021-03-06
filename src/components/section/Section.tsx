import styled from "styled-components";

export const Separator = styled.hr`
  margin: 40px 20px;
  border-top: 3px solid ${(props) => props.theme.colors.mediumLightGray};
`;

export const SubSection = styled.div`
  margin-bottom: 40px;
`;

export const Section = styled.div`
  margin: 0 auto ${(props) => props.theme.components.margin} auto;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: ${(props) => props.theme.breakpoints.desktop};
  }
`;

export const SectionFlex = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const SectionFlexReverse = styled(SectionFlex)`
  flex-direction: column-reverse;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const SectionIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 25%;
    flex-direction: column;
  }

  img {
    margin-bottom: 20px;

    :hover {
      transform: scale(1.1);
    }
  }
`;

export const SectionText = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 75%;
  }
`;

export const SectionHeader = styled.h2`
  position: sticky;
  top: 60px;
  padding: 10px 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.mediumLightGray};
  background-color: ${(props) => props.theme.colors.lightGray};
`;
