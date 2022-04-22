// Dependencies
import React from "react";
import NumberFormat from "react-number-format";

// Styled Components
import * as styled from "./styles";

// Types
import { PriceLabelProps } from "./types";

const PriceLabel = ({
  value = 0,
  coin = "USDT",
  fiat = false,
  symbol = "$",
  bottomElement = null,
}: PriceLabelProps) => (
  <styled.Layout>
    <styled.Value variant={"h3"}>
      {typeof value === "number" || typeof value === "bigint" ? (
        <NumberFormat prefix={symbol} value={value} displayType={"text"} thousandSeparator={true} />
      ) : (
        symbol + value
      )}
      {!fiat && (
        <styled.Coin variant={"h4"} fiat={fiat}>
          {coin}
        </styled.Coin>
      )}
    </styled.Value>
    {bottomElement && bottomElement}
  </styled.Layout>
);

export default PriceLabel;
