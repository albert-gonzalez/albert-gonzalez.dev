import styled from "styled-components";

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${(props) => props.theme.components.margin};
`;

export const Badge = styled.div`
  color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  margin: 0 5px 5px 0;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;

  &.front {
    background-color: ${(props) => props.theme.colors.primary};
  }

  &.back {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  &.methodology {
    background-color: ${(props) => props.theme.colors.mediumGray};
  }
`;
