import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiHome, mdiEarthPlus } from "@mdi/js";
import { COLORS } from "../../common/constants/colors";

const S = {
  LNB: styled.div`
    width: 88px;
    height: 519px;
    padding-top: 36px;
    background: rgba(47, 60, 97, 0.27);
    border-radius: 20px;
  `,
  Line: styled.div`
    width: 57px;
    height: 1px;
    background: ${COLORS.blueGray};
    border-radius: 0.5px;
    margin: 0 auto;
    margin-top: 23.5px;
    margin-bottom: 23.5px;
  `,
};

const commonStyle = {
  display: "block",
  margin: "0 auto",
  width: "30px",
  height: "25.5px",
  cursor: "pointer",
};

export const LNB = () => (
  <>
    <S.LNB>
      <Icon
        path={mdiHome}
        style={{ ...commonStyle, color: COLORS.white }}
      ></Icon>
      <S.Line />
      <Icon
        path={mdiEarthPlus}
        style={{ ...commonStyle, color: COLORS.blueGray }}
      ></Icon>
    </S.LNB>
  </>
);
