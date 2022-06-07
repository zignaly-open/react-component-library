import React from "react";

export type ModalContainerProps = {
  children: React.ReactElement[] | React.ReactElement;
  title?: any;
  width?: "fullscreen" | "large" | "small" | number;
  customHeaderAction?: null | React.ReactElement;
  onClickClose?: () => void;
  onGoBack?: any;
};
