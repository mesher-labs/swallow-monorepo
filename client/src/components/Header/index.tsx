import { LeftHeader } from "./LeftHeader";
import { RightHeader } from "./RightHeader";
import styled from "styled-components";
import LocalStorageService from "../../common/services/local-storage.service";
import { isUndefined, isNull } from "lodash-es";
import { useWeb3 } from "../../App";

const S = {
  Header: styled.div`
    display: flex;
    justify-content: space-between;
  `,
};

export const Header = () => {
  const nickName = LocalStorageService.get("nickName");
  const { setServiceState } = useWeb3();
  if (isUndefined(nickName) || isNull(nickName)) setServiceState("unSigned");

  return (
    <S.Header>
      <LeftHeader nickName={nickName!} />
      <RightHeader />
    </S.Header>
  );
};
