// Dependencies
import React, {useCallback, useState} from "react";

// Styles
import { sizes, Image, Layout } from "./styles";

// Types
import { CoinSizes, CoinTypeProps } from "./types";

const CoinIcon = ({ size = CoinSizes.MEDIUM, name, coin, className = "", }: CoinTypeProps) => {
    const [src, setSrc] = useState(`https://res.cloudinary.com/zignaly/image/upload/c_scale,w_${
        sizes[size as CoinSizes]
    },h_${sizes[size as CoinSizes]},r_max/coins-binance/${coin}`);

    const srcFallBack = `https://res.cloudinary.com/zignaly/image/upload/c_scale,w_${
        sizes[size as CoinSizes]
    },h_${sizes[size as CoinSizes]},r_max/coins-binance/BTC`;

    const onError = useCallback(() => setSrc(srcFallBack),[]);
    return (
      <Layout className={[size, className] as any} data-testid="coin-icon-view">
          <Image
              src={src}
              alt={name}
              onError={onError}
          />
      </Layout>
    );
};

export { CoinSizes };
export default CoinIcon;
