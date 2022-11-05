import styled from "styled-components"
import { COLORS } from "../../common/constants/colors"

const S = {
  Title: styled.h1`
    color: ${COLORS.white};
    font-size: 48px;
    font-weight: 400;
  `,
  SubTitle: styled.h2`
    color: ${COLORS.gray};
    font-weight: 300;
    font-size: 24px;
  `,
}

export const RightHeader = () => (
  <div>
    <S.SubTitle>Friday, Nov 05</S.SubTitle>
    <S.Title>2:36</S.Title>
  </div>
)