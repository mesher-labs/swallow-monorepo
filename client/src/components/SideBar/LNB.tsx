import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiHome, mdiEarthPlus } from "@mdi/js";
import { COLORS } from "../../common/constants/colors";
import { useWeb3 } from "../../App";

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

type SideBarType = "HOME" | "BROWSE";
export const LNB = () => {
  const { serviceState, setServiceState } = useWeb3();
  const onClickLNB = (sideBarType: SideBarType) => {
    if (sideBarType === "HOME") setServiceState("HOME");
    if (sideBarType === "BROWSE") setServiceState("BROWSE");
  };

  const getOpacity = (sideBarType: SideBarType) => {
    if (sideBarType === serviceState) {
      return 1;
    }
    return 0.4;
  };
  return (
    <>
      <S.LNB>
        <div onClick={() => onClickLNB("HOME")}>
          <Icon
            path={mdiHome}
            style={{
              ...commonStyle,
              color: COLORS.white,
              opacity: getOpacity("HOME"),
            }}
          ></Icon>
        </div>
        <S.Line />
        <div onClick={() => onClickLNB("BROWSE")}>
          <Icon
            path={mdiEarthPlus}
            style={{
              ...commonStyle,
              color: COLORS.blueGray,
              opacity: getOpacity("BROWSE"),
            }}
          ></Icon>
        </div>
      </S.LNB>
    </>
  );
};
