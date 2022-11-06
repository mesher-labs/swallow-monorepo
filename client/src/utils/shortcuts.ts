import { isNull } from "lodash-es";
import { ShortcutTypes } from "../components/Home/HomePresenter";

export type localStorageKeyType = "MY_SHORT_CUTS" | "MY_TAG";

export const localStorageKeys = {
  MY_TAG: "MY_TAG",
  MY_SHORT_CUTS: "MY_SHORT_CUTS",
} as const;

export interface Shortcut {
  dummy: string;
}

class ShortCutUtils {
  public static myShortCuts(): Shortcut[] {
    const rawMyShortCuts = window.localStorage.getItem(localStorageKeys.MY_SHORT_CUTS);

    if (isNull(rawMyShortCuts)) {
      return [];
    }

    if(!rawMyShortCuts) return [];

    const myShortCuts = JSON.parse(rawMyShortCuts);

    return myShortCuts;
  }

  public static isExistShortcutType(shortcutType: ShortcutTypes): boolean {
    const rawMyShortCuts = window.localStorage.getItem(localStorageKeys.MY_SHORT_CUTS);
    return false;
  }

  public static addShortcuts() {}

  public static removeShortcuts() {}
}

export default ShortCutUtils;
