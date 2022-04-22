// Dependencies
import styled from "styled-components";
import { styledIf } from "utils/styled";

export const Icon = styled.img`
  width: 10px;
  height: 10px;
  position: relative;
  transition: transform 0.05s linear;
  transform: scale(0);
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #0c0d21;
  border: 1px solid #706f82;
  border-radius: 2.5px;
  position: relative;

  width: 18px;
  height: 18px;
  overflow: hidden;
`;

export const Label = styled.span`
  color: #ffffff;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.33px;
  margin: 0 12px;
`;

type LayoutProps = {
  isActive: boolean;
  disabled: boolean;
};

export const Layout = styled.div<LayoutProps>`
  display: flex;
  cursor: pointer;
  user-select: none;
  align-items: center;

  ${({ isActive }) => `
    ${styledIf(
      isActive,
      `
      ${Box} {
        border-color: #706f82;
        box-shadow: 0 0 0 1px #706f82;
        color: #7682f7;
      }
      ${Icon} {
        transform: scale(1);
        color: #7682f7;
      }
    `,
    )}
    
    &[disabled] {
      cursor: default;
      
      ${Icon} {
        filter: grayscale(100%);
      }
      
      ${Label} {
        color: #4f4f5e;
      }
  
      ${Box} {
        border-color: #2a2a36 !important;
        
        ${styledIf(
          isActive,
          `
          box-shadow: 0 0 0 1px #2a2a36;
        `,
        )}
      }
    }
  `}
`;
