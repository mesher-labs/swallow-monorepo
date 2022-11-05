import { DefaultShortcuts } from "../components/Home/DefaultShortCuts";

import { isUndefined } from "lodash-es";

type localStorageKeyType = "MY_SHORT_CUTS" | "MY_TAG";

enum localStorageKeys {
  MY_TAG = "MY_TAG",
  MY_SHORT_CUTS = "MY_SHORT_CUTS",
}

const getMyShortcuts = () => {
  /*
  const rawMyShortCuts: ShortCuts = window.localStorage.getItem(
    localStorageKeys.MY_SHORT_CUTS
  );
  if (isUndefined(myShortCuts)) {
    return [];
  }
  return myShortCuts;
   */
};

export const Home = () => {
  return <h1>react fucking great</h1>;
};
