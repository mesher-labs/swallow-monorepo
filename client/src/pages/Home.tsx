import styled from "styled-components";

import { isUndefined } from "lodash-es";
import { HomePresenter } from "../components/Home/HomePresenter";
import {
  Shortcuts,
  ShortcutTypes,
  ShortcutRes,
} from "../common/types/short-cuts.types";
import { useGetAllShortcuts } from "../hooks/react-query/query/useGetAllShortcuts";

export const Home = () => {
  const { data: allShortcuts, isLoading } = useGetAllShortcuts();

  const findShortcutBy = (shortcutType: ShortcutTypes) => {
    if (isUndefined(allShortcuts)) throw new Error("Shortcut response err");
    const targetArr = allShortcuts.find(
      (shortcut: ShortcutRes) => shortcut.shortcutType === shortcutType,
    );
    if (isUndefined(targetArr)) throw new Error("Shortcut type err");
    return targetArr;
  };

  return (
    <>
      {!isLoading && (
        <Container>
          <Row>
            <HomePresenter
              shortcutData={findShortcutBy(Shortcuts.SEND)}
              shortcutType={Shortcuts.SEND}
            />
            <HomePresenter
              shortcutData={findShortcutBy(Shortcuts.BUY)}
              shortcutType={Shortcuts.BUY}
            />
            <HomePresenter
              shortcutData={findShortcutBy(Shortcuts.AAVE_CURRENT_APY)}
              shortcutType={Shortcuts.AAVE_CURRENT_APY}
            />
          </Row>
          <Row>
            <HomePresenter
              shortcutData={findShortcutBy(Shortcuts.MULTI_SEND)}
              shortcutType={Shortcuts.MULTI_SEND}
            />
            <HomePresenter
              shortcutData={findShortcutBy(Shortcuts.TOKEN_BALANCE)}
              shortcutType={Shortcuts.TOKEN_BALANCE}
            />
          </Row>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: block;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;
