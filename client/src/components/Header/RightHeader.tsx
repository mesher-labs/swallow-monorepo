import styled from "styled-components";
import { COLORS } from "../../common/constants/colors";
import date from "date-and-time";

const S = {
  Title: styled.h1`
    color: ${COLORS.white};
    font-size: 36px;
    font-weight: 400;
  `,
  SubTitle: styled.h2`
    color: ${COLORS.gray};
    font-weight: 300;
    font-size: 18px;
  `,
};

export const RightHeader = () => {
  const now = new Date();
  return (
    <div>
      <S.SubTitle>{date.format(now, "dddd, MMM DD")}</S.SubTitle>
      <S.Title>{date.format(now, "H:mm")}</S.Title>
    </div>
  );
};
