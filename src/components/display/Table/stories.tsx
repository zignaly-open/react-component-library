// Dependencies
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// Component
import Table from "./";
import PriceLabel from "./components/PriceLabel";
import CoinLabel from "./components/CoinLabel";
import PercentageIndicator from "./components/PercentageIndicator";
import ConnectionStateLabel, { ConnectionStateLabelId } from "./components/ConnectionStateLabel";
import Button from "components/inputs/Button";
import DateLabel from "./components/DateLabel";

// Styles
import { Actions, CheckIconStyled, CloseIconStyled } from "./styles";
import { dark } from "../../../theme";

// Assets
import CloseIcon from "assets/icons/close-icon.svg";

export default {
  title: "Display/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;
/**
 * All the columns that include PriceLabel need to pass to their column isAlignThRight: true,
 * so that they are well aligned, it was requested that the design be like this
 */
export const MyCoins = Template.bind({});
MyCoins.args = {
  columns: [
    {
      Header: "Coin",
      accessor: "coin",
    },
    {
      Header: "Total Balance",
      accessor: "totalBalance",
      // @ts-ignore
      isAlignThRight: true,
    },
    {
      Header: "Available Balance",
      accessor: "availableBalance",
      // @ts-ignore
      isAlignThRight: true,
    },
    {
      Header: "Locked Balance",
      accessor: "lockedBalance",
      // @ts-ignore
      isAlignThRight: true,
    },
    {
      Header: "Value BTC",
      accessor: "valueInBtc",
      // @ts-ignore
      isAlignThRight: true,
    },
    {
      Header: "Value in USD",
      accessor: "valueInUsd",
      // @ts-ignore
      isAlignThRight: true,
    },
  ],
  data: [
    {
      coin: <CoinLabel coin={"ETH"} name={"Ethereum"} />,
      totalBalance: <PriceLabel coin={"ETH"} value={"3.200"} />,
      availableBalance: <PriceLabel coin={"ETHAS"} value={"2.13521254"} />,
      lockedBalance: <PriceLabel coin={"ETHA"} value={"30.18389589"} />,
      valueInBtc: <PriceLabel coin={"BTC"} value={"0.78232496"} />,
      valueInUsd: <PriceLabel coin={"USD"} value={"3.200"} fiat />,
      action: (
        <Actions>
          <Button caption={"Deposit"} variant={"secondary"} onClick={() => {}} />
          <Button caption={"Withdraw"} variant={"secondary"} onClick={() => {}} />
        </Actions>
      ),
    },
    {
      coin: <CoinLabel coin={"BTC"} name={"Bitcoin"} />,
      totalBalance: <PriceLabel coin={"BTC"} value={"32.20435"} />,
      availableBalance: <PriceLabel coin={"BTC"} value={"2.1352"} />,
      lockedBalance: <PriceLabel coin={"BTC"} value={"30.18389"} />,
      valueInBtc: <PriceLabel coin={"BTC"} value={"0.782324"} />,
      valueInUsd: <PriceLabel coin={"USD"} value={"34,000"} fiat />,
      action: (
        <Actions>
          <Button caption={"Deposit"} variant={"secondary"} onClick={() => {}} />
          <Button caption={"Withdraw"} variant={"secondary"} onClick={() => {}} />
        </Actions>
      ),
    },
    {
      coin: <CoinLabel coin={"BNB"} name={"Bianance Coin"} />,
      totalBalance: <PriceLabel coin={"BNB"} value={"350"} />,
      availableBalance: <PriceLabel coin={"BNB"} value={"2.1352"} />,
      lockedBalance: <PriceLabel coin={"BNB"} value={"350"} />,
      valueInBtc: <PriceLabel coin={"BTC"} value={"0.782324"} />,
      valueInUsd: <PriceLabel symbol={"€"} coin={"EUR"} value={"400"} fiat />,
      action: (
        <Actions>
          <Button caption={"Deposit"} variant={"secondary"} size={"small"} onClick={() => {}} />
          <Button caption={"Withdraw"} variant={"secondary"} size={"small"} onClick={() => {}} />
        </Actions>
      ),
    },
  ],
};

export const Investors = Template.bind({});
Investors.args = {
  columns: [
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "User ID",
      accessor: "userId",
    },
    {
      Header: "Investment",
      accessor: "investment",
      // @ts-ignore
      isAlignThRight: true,
    },
    {
      Header: "P & L",
      accessor: "pyd",
      // @ts-ignore
      isAlignThRight: true,
    },
    {
      Header: "P & L Total",
      accessor: "pydTotal",
      // @ts-ignore
      isAlignThRight: true,
    },
    {
      Header: "Total Fees Paid",
      accessor: "totalFeesPaid",
      // @ts-ignore
      isAlignThRight: true,
    },
    {
      Header: "Success Fee",
      accessor: "successFee",
    },
    {
      Header: "Fees in ZIG",
      accessor: "feesInZig",
    },
    {
      Header: "Status",
      accessor: "status",
    },
  ],
  data: [
    {
      email: "tec**@zig**.com",
      userId: "5f886d29da8e9666b1684c9a",
      investment: <PriceLabel coin={"USDT"} value={"1250"} />,
      pyd: (
        <PriceLabel
          coin={"USDT"}
          value={"37.5"}
          bottomElement={<PercentageIndicator value={3} theme={dark} />}
        />
      ),
      pydTotal: <PriceLabel coin={"USDT"} value={"145"} />,
      totalFeesPaid: <PriceLabel coin={"USDT"} value={"218"} />,
      successFee: "10%",
      feesInZig: <CheckIconStyled width="24" height="24" color={dark["neutral300"]}/>,
      status: <ConnectionStateLabel stateId={ConnectionStateLabelId.CONNECTED} />,
    },
    {
      email: "tec**@zig**.com",
      userId: "5f886d29da8e9666b1684c9a",
      investment: <PriceLabel coin={"USDT"} value={"1250"} />,
      pyd: (
        <PriceLabel
          coin={"USDT"}
          value={"30.5"}
          bottomElement={<PercentageIndicator value={-1} theme={dark} />}
        />
      ),
      pydTotal: <PriceLabel coin={"USDT"} value={"145"} />,
      totalFeesPaid: <PriceLabel coin={"USDT"} value={"218"} />,
      successFee: "10%",
      feesInZig: <CloseIconStyled width="24" height="24" color={dark["neutral300"]}/>,
      status: <ConnectionStateLabel stateId={ConnectionStateLabelId.CONNECTED} />,
    },
  ],
};

export const ExchangeOrders = Template.bind({});
ExchangeOrders.args = {
  columns: [
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Order ID",
      accessor: "orderId",
    },
    {
      Header: "Pair",
      accessor: "pair",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Entry Price",
      accessor: "entryPrice",
    },
    {
      Header: "Side",
      accessor: "side",
    },
    {
      Header: "Type",
      accessor: "type",
    },
  ],
  data: [
    {
      date: <DateLabel date={new Date(1651567879191)} />,
      orderId: "138495028471",
      pair: "XML/USDT",
      amount: 25,
      status: "Open",
      entryPrice: "110.20",
      side: "Buy",
      type: "Limit",
      action: (
        <Button
          caption={"Close"}
          variant={"secondary"}
          size={"small"}
          leftElement={<CloseIcon color={"#E1E9F0"} />}
          onClick={() => {}}
        />
      ),
    },
    {
      date: <DateLabel date={new Date(1751567879291)} />,
      orderId: "248495028471",
      pair: "XML/USDT",
      amount: 25,
      status: "Open",
      entryPrice: "21077.20",
      side: "Buy",
      type: "Limit",
      action: (
        <Button
          caption={"Close"}
          variant={"secondary"}
          size={"small"}
          leftElement={<CloseIcon color={"#E1E9F0"} />}
          onClick={() => {}}
        />
      ),
    },
    {
      date: <DateLabel date={new Date(1851567879091)} />,
      orderId: "358495028471",
      pair: "XML/USDT",
      amount: 25,
      status: "Open",
      entryPrice: "3109.60",
      side: "Buy",
      type: "Limit",
      action: (
        <Button
          caption={"Close"}
          variant={"secondary"}
          size={"small"}
          leftElement={<CloseIcon color={"#E1E9F0"} />}
          onClick={() => {}}
        />
      ),
    },
  ],
};
