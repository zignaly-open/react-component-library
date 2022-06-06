// Dependencies
// @ts-nocheck
import React, { useState, useMemo } from "react";
import { useTheme } from "styled-components";
import { useForm } from "react-hook-form";
import NumberFormat from "react-number-format";

// Components
import {
  Investor,
  InvestorName,
  InvestorData,
  InvestorSuccessFee,
  PendingTransaction,
  Field,
  Row,
  AmountInvested,
  TokenValue,
  Actions,
  Inline,
  Form,
  InputContainer,
} from "./styles";
import Avatar from "../../display/Avatar";
import ModalContainer from "../ModalContainer";
import Typography from "../../display/Typography";
import TextButton from "../../inputs/TextButton";
import Button from "../../inputs/Button";
import Table from "../../display/Table";
import InputAmount from "../../inputs/InputAmount";

// Assets
import RefreshIcon from "assets/icons/refresh-icon.svg";
import PlusIcon from "assets/icons/plus-icon.svg";
import ArrowRightIcon from "assets/icons/arrow-right-icon.svg";
import ArrowLeftIcon from "assets/icons/arrow-left-icon.svg";
import InvestSlider from "../../display/InvestSlider";

// Utils
import { BigNumber, utils } from "ethers";

// Props
import { EditInvestmentFormProps, EditInvestmentWithModalProps, viewsIds } from "./types";
import CoinIcon from "../../display/CoinIcon";

function EditInvestmentWithModal({
  investor,
  pendingTransactions = [],

  amountInvested = BigNumber.from("0"),
  profitPercentage = "20",
  coin,

  // Handlers
  onClickClose = () => {},
  onAmountSubmit = () => {},
  onClickWithdrawInvestment = () => {},
}: EditInvestmentWithModalProps) {
  // Hooks
  const theme: any = useTheme();
  const [currentState, setCurrentState] = useState(viewsIds.EDIT_INVESTMENT);
  const [isInputEnabled, setInputEnabled] = useState(false);

  // Form
  const { getValues, setValue, handleSubmit } = useForm<EditInvestmentFormProps>({
    defaultValues: {
      moreInvestmentValue: BigNumber.from("0"),
      profitPercentageValue: profitPercentage,
    },
  });

  const renderPendingTransactions = useMemo(
    () =>
      pendingTransactions.length > 0 ? (
        <PendingTransaction>
          <Inline>
            <RefreshIcon />
            <Typography variant={"body1"} color={"yellow"}>
              You have {pendingTransactions.length} pending transaction
            </Typography>
          </Inline>
          <div>
            <TextButton
              rightElement={
                <ArrowRightIcon width={"22px"} height={"22px"} color={theme["links"]} />
              }
              caption={"View"}
              onClick={() => setCurrentState(viewsIds.PENDING_TRANSACTIONS)}
            />
          </div>
        </PendingTransaction>
      ) : null,
    [pendingTransactions],
  );

  if (currentState === viewsIds.PENDING_TRANSACTIONS) {
    return (
      <ModalContainer
        width={784}
        onClickClose={onClickClose}
        title={"Edit Investment with"}
        onGoBack={() => setCurrentState(viewsIds.EDIT_INVESTMENT)}
      >
        <Table
          columns={[
            {
              Header: "Date",
              accessor: "date",
            },
            {
              Header: "Amount",
              accessor: "amount",
            },
            {
              Header: "Type",
              accessor: "type",
            },
            {
              Header: "Status",
              accessor: "status",
            },
          ]}
          data={pendingTransactions}
          hideOptionsButton={false}
          isUserTable={true}
        />

        <Actions>
          <Button
            leftElement={<ArrowLeftIcon color={"#fff"} width={"20px"} height={"20px"} />}
            onClick={() => setCurrentState(viewsIds.EDIT_INVESTMENT)}
            size={"large"}
            caption={"Back"}
          />
        </Actions>
      </ModalContainer>
    );
  }

  return (
    <ModalContainer title={"Edit Investment with"} width={784}>
      {/* Investor Details */}
      <Investor>
        <Avatar size={"x-large"} image={investor.photoUrl} />
        <InvestorData>
          <InvestorName variant={"h1"} color={"neutral000"}>
            {investor.name}
          </InvestorName>
          <InvestorSuccessFee variant={"body2"} color={"neutral300"}>
            {investor.successFee}% Success fee
          </InvestorSuccessFee>
        </InvestorData>
      </Investor>

      {/* Pending Transactions View */}
      {renderPendingTransactions}

      {/* Form */}
      <Form onSubmit={handleSubmit(onAmountSubmit)}>
        <Field>
          <Row>
            <Typography variant={"labelm"}>Amount Invested</Typography>
            <AmountInvested>
              <CoinIcon name={"Ethereum"} coin={coin.id} />
              <TokenValue>
                <Typography
                  variant={"bigNumber"}
                  className={"investmentAmount"}
                  color={"neutral100"}
                >
                  <NumberFormat
                    value={utils.formatUnits((amountInvested || "0").toString())}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </Typography>
                <Typography variant={"h3"} color={"neutral400"}>
                  {String(coin.id).toUpperCase()}
                </Typography>
              </TokenValue>
            </AmountInvested>
          </Row>
          <Row>
            <InvestSlider
              label={"What to do with profits:"}
              value={Number(getValues("withdrawPercentageValue"))}
              initialValue={Number(getValues("withdrawPercentageValue"))}
              onChange={({ withdraw }: { withdraw: string }) => {
                setValue("profitPercentageValue", withdraw.toString());
              }}
            />
          </Row>
        </Field>

        {isInputEnabled && (
          <InputContainer>
            <InputAmount
              label={"Amount to Invest:"}
              tokens={[
                {
                  id: coin.id,
                  balance: coin.balance,
                },
              ]}
              value={getValues("moreInvestmentValue")}
              onChange={({ target: { value } }: any) => {
                setValue("moreInvestmentValue", value);
              }}
            />
          </InputContainer>
        )}

        <Actions>
          {!isInputEnabled && (
            <TextButton
              onClick={() => setInputEnabled(true)}
              leftElement={<PlusIcon width={"22px"} height={"22px"} />}
              caption={"Invest more"}
            />
          )}
          <Button
            size={"large"}
            type={"submit"}
            caption={isInputEnabled ? "Add to Investment" : "Save and Close"}
          />
          <TextButton
            rightElement={<ArrowRightIcon width={"22px"} height={"22px"} color={theme["links"]} />}
            onClick={onClickWithdrawInvestment}
            caption={"Withdraw Investment"}
          />
        </Actions>
      </Form>
    </ModalContainer>
  );
}

export default EditInvestmentWithModal;
