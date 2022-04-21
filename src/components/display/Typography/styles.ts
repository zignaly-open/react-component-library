// Dependencies
import styled from "styled-components";
import { styledIf } from "utils/styled";

const getWeight = (weight: string) => {
  if (weight === "demibold") {
    return 600;
  } else if (weight === "medium") {
    return 500;
  } else if (weight === "regular") {
    return 400;
  }
  return 400;
};

export const Layout = styled.h1<{ color: string; underline: boolean; weight: string }>`
  font-family: "Avenir next","Red Hat Text", sans-serif;
  margin: 0;
  letter-spacing: 0.55px;

  &.h1 {
    font-weight: 500;
    font-size: 22px;
    line-height: 36px;
  }

  &.h2 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
  }

  &.h3 {
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
  }

  &.h4 {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
  }

  &.h5 {
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
  }
  
  &.bigNumber {
    font-weight: 500;
    font-size: 26px;
    line-height: 40px;
  }

  &.body1 {
    font-size: 15px;
    line-height: 24px;
  }

  &.body2 {
    font-size: 13px;
    line-height: 20px;
  }

  ${(props) => `
    color: inherit;

    ${styledIf(
      props.color,
      `
      color: ${props.theme[props.color]};    
    `,
    )}
    ${styledIf(
      props.underline,
      `
      text-decoration-line: underline;
    `,
    )}
    ${styledIf(
      props.weight,
      `
      font-weight: ${getWeight(props.weight)};
    `,
    )}
  `}
`;
