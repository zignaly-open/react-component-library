// Dependencies
import React from "react";
import { ToasterProps } from "./types";
import * as styled from "./styles";
import Typography from "../Typography";
import SuccessIcon from "assets/icons/check-icon.svg";
import ErrorAlertIcon from "assets/icons/error-alert-icon.svg";

const Toaster = ({ variant = "error", size = "large", caption = "" }: ToasterProps) => {
  return (
    <styled.ToastContainer variant={variant} size={size}>
      {variant === "error" ? (
        <styled.IconContainer>
          <ErrorAlertIcon />
        </styled.IconContainer>
      ) : (
        <styled.IconContainer>
          <SuccessIcon />
        </styled.IconContainer>
      )}
      <styled.Caption>
        <Typography variant={size === "large" ? "body1" : "body2"} weight="regular">
          {caption}
        </Typography>
      </styled.Caption>
    </styled.ToastContainer>
  );
};

export default Toaster;
