import { LeftHeader } from "./LeftHeader";
import { RightHeader } from "./RightHeader";
import styled from "styled-components";
import { useWeb3 } from "../../App";
import { useEffect } from "react";

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
