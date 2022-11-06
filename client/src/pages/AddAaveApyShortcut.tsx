import styled from "styled-components";
import Icon from "@mdi/react";
import localStorageService from "../common/services/local-storage.service";

import { mdiPlus } from "@mdi/js";
import { useState } from "react";
import { AddShortCutButton } from "../components/AddShortcut/Button";
import { COLORS } from "../common/constants/colors";
import { TokenDropDownInput } from "../components/AddShortcut/TokenDropDownInput";
import { useGetAllShortcuts } from "../hooks/react-query/query/useGetAllShortcuts";
import { ShortcutRes } from "../common/types/short-cuts.types";
import { TokenService } from "../common/services/tokens.service";

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
  ]);

  const { data: allShortcuts, isLoading } = useGetAllShortcuts();

  if (isLoading || !allShortcuts) return <></>;

  const addAaveApyShortcut = allShortcuts.find(
    (shortCut: ShortcutRes) => shortCut.shortcutType === "AAVE_CURRENT_APY",
  );

  if (!addAaveApyShortcut) return <></>;

  const onClickIcon = () => {
    setShortCutsState([...shortCutsState, { tokenSymbol: "" }]);
  };

  const addShortCutButtonHandler = () => {
    addAaveApyShortcut.userParams = shortCutsState.map(
      (state: ShortCutState) => {
        const address = TokenService.findAddressBySymbol(state.tokenSymbol);
        return {
          name: state.tokenSymbol,
          value: address,
        };
      },
    );
    localStorageService.add("myShortCut", addAaveApyShortcut);
  };

  return (
    <div style={{ marginLeft: "50px", width: "100vw" }}>
      <S.Title>Add Aave Current APY Shortcuts</S.Title>
      <S.Caption>*supply, borrow</S.Caption>

      <div style={{ width: "1200px", marginTop: "30px" }}>
        <div style={{ display: "flex" }}>
          {shortCutsState.slice(0, 3).map((state, index) => (
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
          {shortCutsState.slice(3, 6).map((state, index) => (
            <div style={{ marginLeft: "10px", display: "flex" }}>
              <TokenDropDownInput
                placeholder={placeholder}
                tokenSymbol={state.tokenSymbol}
                onClickSymbol={(tokenSymbol: string) => {
                  const temp = [...shortCutsState];
                  temp[index + 3].tokenSymbol = tokenSymbol;
                  setShortCutsState(temp);
                }}
              />
              {index + 3 === shortCutsState.length - 1 && index !== 2 && (
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
      <AddShortCutButton onClickHandler={() => addShortCutButtonHandler()} />
    </div>
  );
};
