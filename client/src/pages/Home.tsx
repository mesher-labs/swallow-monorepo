import {
  HomePresenter,
  Shortcuts,
  ShortcutTypes,
} from "../components/Home/HomePresenter";

export const Home = () => {
  return (
    <>
      <HomePresenter shortcutType={Shortcuts.SEND} />
      <HomePresenter shortcutType={Shortcuts.BUY} />
      <HomePresenter shortcutType={Shortcuts.AAVE_CURRENT_APY} />
      <HomePresenter shortcutType={Shortcuts.MULTI_SEND} />
      <HomePresenter shortcutType={Shortcuts.TOKEN_BALANCE} />
    </>
  );
};
