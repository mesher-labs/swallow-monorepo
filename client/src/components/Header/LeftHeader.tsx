import styled from "styled-components";
import { COLORS } from "../../common/constants/colors";

const S = {
  Title: styled.h1`
    color: ${COLORS.white};
    font-weight: 700;
    font-size: 36px;
  `,
  SubTitle: styled.h2`
    color: ${COLORS.gray};
    font-weight: 500;
    font-size: 36px;
  `,
};

interface Props {
  title?: string;
  nickName: string;
}

export const LeftHeader = ({ title = "Welcome Swallow", nickName }: Props) => (
  <div>
    <S.Title>{title}</S.Title>
    <S.SubTitle>{nickName}</S.SubTitle>
  </div>
);
