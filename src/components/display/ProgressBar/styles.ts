// Dependencies
import styled from "styled-components";
import Typography from "../Typography";

export const Layout = styled.div`
  position: relative;
`;

export const Bar = styled.div`
  background: linear-gradient(90deg, #567734 0%, #948d23 34.43%, #8e3b24 68.81%, #8c1954 99.89%);
  box-shadow: inset 0px 1px 1px -1px rgba(73, 9, 123, 0.25);
  border-radius: 100px;
  height: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const DotContainer = styled.div<{ value: number }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  left: ${(props) => props.value}%;
  top: -4px;
`;

export const Dot = styled.div<{ value: number }>`
  background: #ffffff;
  border: 2px solid ${(props) => props.theme.neutral300};
  box-shadow: 0px 0px 0px 2px #191927;
  border-radius: 100px;
  /* position: absolute; */
  /* left: ${(props) => props.value}%; */
  width: 12px;
  height: 12px;
`;

const Label = styled(Typography)`
  margin-top: 8px;

  &.body1 {
    font-size: 13px;
  }
`;

export const StartLabel = styled(Label)`
  position: absolute;
  left: 0;
  top: 8px;
  transform: translate(-50%, 0%);
`;

export const EndLabel = styled(Label)`
  position: absolute;
  right: 0;
  top: 8px;
  transform: translate(50%, 0%);
`;

export const ValueLabel = styled(Label)<{ value: number }>`
  padding: 0 12px;
  margin-left: -12px;
  background: inherit;
  z-index: 12px;
`;

export const ValueLabelContainer = styled.div`
  padding: 0 12px;
  margin-left: -12px;
  background: inherit;
`;
