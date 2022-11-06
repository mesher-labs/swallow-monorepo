import { AddShortCutButton } from "../components/AddShortcut/Button";
import styled from "styled-components";
import { COLORS } from "../common/constants/colors";
import { TokenDropDownInput } from "../components/AddShortcut/TokenDropDownInput";
import { mdiPlus } from "@mdi/js";
import { useState } from "react";
import Icon from "@mdi/react";

const S = {
  Title: styled.h1`
    color: ${COLORS.white};
    font-size: 36px;
    font-weight: 700;
    margin-right: 60px;
  `,
  Caption: styled.p`
    color: ${COLORS.white};
    font-weight: 400;
    font-size: 18px;
    margin-top: 7px;
  `,
  SubTitle: styled.h1`
    color: ${COLORS.white};
    font-size: 36px;
    font-weight: 700;
    margin-right: 60px;
    width: 75px;
  `,
};

const placeholder = "target token";

interface ShortCutState {
  tokenSymbol: string;
}

export const AddAaveApyShortcut = () => {
  const [shortCutsState, setShortCutsState] = useState<ShortCutState[]>([
    {
      tokenSymbol: "",
    },
    {
      tokenSymbol: "",
    },
  ]);
  return (
    <>
      <S.Title>Add Aave Current APY Shortcuts</S.Title>
      <S.Caption>*supply, borrow</S.Caption>

      <div style={{ display: "flex", width: "900px", marginTop: "30px" }}>
        {shortCutsState.slice(0, 3).map((state, index) => (
          <div style={{ marginLeft: "10px", display: "flex" }}>
            <TokenDropDownInput
              placeholder={placeholder}
              tokenSymbol={state.tokenSymbol}
              onClickSymbol={() => console.log("asdf")}
            />
            {index === shortCutsState.length -1 && <Icon
              path={mdiPlus}
              color="white"
              size={2}
              style={{ marginLeft: "10px", cursor: "pointer" }}
            ></Icon>}
          </div>
        ))}
        {/* <div style={{ marginLeft: "10px" }}>
          <TokenDropDownInput
            placeholder={placeholder}
            tokenSymbol="USDT"
            onClickSymbol={() => console.log("asdf")}
          />
        </div>
        <div style={{ marginLeft: "10px" }}>
          <TokenDropDownInput
            placeholder={placeholder}
            tokenSymbol="USDT"
            onClickSymbol={() => console.log("asdf")}
          />
        </div> */}
      </div>
      <AddShortCutButton onClickHandler={() => console.log("asdf")} />
    </>
  );
};
