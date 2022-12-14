import Icon from "@mdi/react";
import { mdiAppleKeyboardControl } from "@mdi/js";
import styled from "styled-components";
import { COLORS } from "../../common/constants/colors";
import { TokenDropDownList } from "./TokenDropDownList";
import { useState } from "react";
import { TOKENS } from "../../common/constants/tokens";

const S = {
  Form: styled.div`
    width: 253px;
    position: relative;
  `,
  FormInput: styled.div`
    color: white;
    font-size: 24px;
    font-weight: 400;
    background: transparent;
    border: none;
    width: 100%;
    padding-left: 10px;
    input::placeholder {
      font-size: 18px;
    }
  `,
  BottomLine: styled.div`
    background: #d9d9d9;
    border-radius: 5px;
    width: 100%;
    height: 2px;
    margin-top: 11.5px;
  `,
};

interface Props {
  placeholder: string;
  tokenSymbol: string;
  onClickSymbol: (tokenSymbol: string) => void;
}

export const TokenDropDownInput = ({
  placeholder,
  tokenSymbol,
  onClickSymbol,
}: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const rotate = isClicked ? 0 : 180;
  const onClickIcon = () => setIsClicked(!isClicked);

  const onClickHanlder = (tokenSymbol: string) => {
    setIsClicked(!isClicked);
    onClickSymbol(tokenSymbol);
  };

  return (
    <S.Form>
      <div style={{ display: "flex", alignItems: "center" }}>
        <S.FormInput>
          {tokenSymbol.length ? tokenSymbol : placeholder}
        </S.FormInput>
        <div onClick={onClickIcon}>
          <Icon
            path={mdiAppleKeyboardControl}
            rotate={rotate}
            size={1.5}
            style={{ color: "white" }}
          ></Icon>
        </div>
      </div>
      <S.BottomLine></S.BottomLine>
      {isClicked ? (
        <div style={{ position: "absolute", right: "0", zIndex: 999 }}>
          <TokenDropDownList
            tokenList={TOKENS}
            onClickHanlder={onClickHanlder}
          ></TokenDropDownList>
        </div>
      ) : null}
    </S.Form>
  );
};
