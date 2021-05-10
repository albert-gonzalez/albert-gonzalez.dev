import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;
  user-select: none;
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
  top: 43px;
  right: 0px;

  &.shown {
    display: block;
  }

  a {
    color: ${(props) => props.theme.colors.black};
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: ${(props) => props.theme.colors.lightGray};
    }
  }
`;

export const DropDownButton = styled.span`
  font-size: 16px;
  border: none;
  cursor: pointer;
`;
export const DropDownIcon = styled.img`
  width: 32px;
`;

export const DropDown = ({ button, content, className }) => {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const hideMenu = (e: MouseEvent) => {
      const element = e.target as Element;
      if (!element.closest(`.${className}`)) {
        setShown(false);
      }
    };

    document.addEventListener("click", hideMenu);

    return () => document.removeEventListener("click", hideMenu);
  }, []);
  const shownClass = shown ? "shown" : "";

  return (
    <DropDownContainer className={className}>
      <DropDownButton onClick={() => setShown(!shown)}>{button}</DropDownButton>
      <DropDownContent className={shownClass}>{content}</DropDownContent>
    </DropDownContainer>
  );
};
