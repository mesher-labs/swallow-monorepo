import { AddShortCutButton } from "../components/AddShortcut/Button";
import styled from "styled-components";
import { COLORS } from "../common/constants/colors";
import { TokenDropDownInput } from "../components/AddShortcut/TokenDropDownInput";
import { mdiPlus } from "@mdi/js";
import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import localStorageService from "../common/services/local-storage.service";

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

export const AddTokenBalanceShortcut = () => {
  const [shortCutsState, setShortCutsState] = useState<ShortCutState[]>([
    {
      tokenSymbol: "",
    },
  ]);
  const [nickName, setNickName] = useState<string>("");
  const [account, setAccount] = useState<string>("");

  useEffect(() => {
    setNickName(localStorageService.get("nickName") || "");
    setAccount(localStorageService.get("account") || "");
  }, []);

  const onClickIcon = () => {
    setShortCutsState([...shortCutsState, { tokenSymbol: "" }]);
  };
  return (
    <div style={{marginLeft: '50px', width: '100vw'}}>
      <S.Title>Add Token Balance Shortcuts</S.Title>
      <S.Caption>
        *target Address: {nickName}({account})
      </S.Caption>

      <div style={{ width: "1200px", marginTop: "30px" }}>
        <div style={{ display: "flex" }}>
          {shortCutsState.slice(0, 2).map((state, index) => (
            <div style={{ marginLeft: "10px", display: "flex" }}>
              <TokenDropDownInput
                placeholder={placeholder}
                tokenSymbol={state.tokenSymbol}
                onClickSymbol={(tokenSymbol: string) => {
                  const temp = [...shortCutsState];
                  temp[index].tokenSymbol = tokenSymbol;
                  setShortCutsState(temp);
                }}
              />
              {index === shortCutsState.length - 1 && (
                <div onClick={onClickIcon}>
                  <Icon
                    path={mdiPlus}
                    color="white"
                    size={2}
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                  ></Icon>
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ display: "flex" }}>
          {shortCutsState.slice(2, 4).map((state, index) => (
            <div style={{ marginLeft: "10px", display: "flex" }}>
              <TokenDropDownInput
                placeholder={placeholder}
                tokenSymbol={state.tokenSymbol}
                onClickSymbol={(tokenSymbol: string) => {
                  const temp = [...shortCutsState];
                  temp[index + 2].tokenSymbol = tokenSymbol;
                  setShortCutsState(temp);
                }}
              />
              {index + 2 === shortCutsState.length - 1 && index !== 1 && (
                <div onClick={onClickIcon}>
                  <Icon
                    path={mdiPlus}
                    color="white"
                    size={2}
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                  ></Icon>
                </div>
              )}
            </div>
          ))}
        </div>
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
    </div>
  );
};
