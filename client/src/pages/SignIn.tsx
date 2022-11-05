import styled from "styled-components";
import { COLORS } from "../common/constants/colors";
const S = {
  Title: styled.h1`
    font-weight: 700;
    font-size: 80px;
    color: ${COLORS.white};
    width: fit-content;
    margin: 0 auto;
  `,
  SubTitle: styled.h2`
    font-weight: 400;
    font-size: 32px;
    color: ${COLORS.white};
    width: fit-content;
    margin: 0 auto;
    margin-top: 23px;
  `,
  Form: styled.div`
    width: 515px;
    margin: 0 auto;
    margin-top: 86px;
  `,
  FormTitle: styled.h3`
    font-weight: 700;
    font-size: 24px;
    color: ${COLORS.white};
  `,
  FormInput: styled.input`
    border: 1px solid ${COLORS.white};
    border-radius: 34.5px;
    background: transparent;
    margin-top: 30px;
    /* padding-top: 22px;
    padding-left: 30px; */
    color: ${COLORS.darkGray};
    width: 100%;
    height: 69px;
  `,
  FormButton: styled.button`
    width: 317px;
    height: 69px;
    display: block;
    background: ${COLORS.purple};
    color: ${COLORS.white};
    border-radius: 34.5px;
    margin: 0 auto;
    margin-top: 44px;
    font-size: 28px;
    font-weight: 700;
  `,
};
export const SignIn = () => (
  <>
    <S.Title>Swallow</S.Title>
    <S.SubTitle>Swallowing all DeFi</S.SubTitle>
    <S.Form>
      <S.FormTitle>Make your own tag of address</S.FormTitle>
      <S.FormInput />
      <S.FormButton>sign in</S.FormButton>
    </S.Form>
  </>
);
