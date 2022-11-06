import { LeftHeader } from "./LeftHeader";
import { RightHeader } from "./RightHeader";
import styled from "styled-components";

const S = {
  Header: styled.div`
    display: flex;
    justify-content: space-between;
  `,
};

export const Header = () => {
  return (
    <S.Header>
      <LeftHeader nickName="juwon" />
      <RightHeader />
    </S.Header>
  );
};
