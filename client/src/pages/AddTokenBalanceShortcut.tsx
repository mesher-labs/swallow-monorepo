import { AddShortCutButton } from "../components/AddShortcut/Button";
import styled from "styled-components";
import { COLORS } from "../common/constants/colors";

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
  `,
  SubTitle: styled.h1`
    color: ${COLORS.white};
    font-size: 36px;
    font-weight: 700;
    margin-right: 60px;
    width: 75px;
  `,
};

export const AddAaveApyShortcut = () => {
  return (
    <>
      <S.Title>Add Aave Current APY Shortcuts</S.Title>
      <S.Caption>*supply, borrow</S.Caption>
      <AddShortCutButton onClickHandler={() => console.log("asdf")} />
    </>
  );
};
