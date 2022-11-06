type LocalStorageKey = "nickName" | "account" | "myShortcut";

const NICKNAME_KEY = "swallow-nickname";
const ACCOUNT_KEY = "swallow-account";
const MY_SHORTCUT_KEY = "swallow-my-shortcut";

class LocalStorageService {
  constructor() {}
  set(key: LocalStorageKey, value: string) {
    switch (key) {
      case "nickName":
        return this.setNickName(value);
      case "account":
        return this.setAccount(value);
      case "myShortcut":
        return this.setMyShortcut(value);
    }
  }
  get(key: LocalStorageKey) {
    switch (key) {
      case "nickName":
        return this.getNickName();
      case "account":
        return this.getAccount();
      case "myShortcut":
        return this.getMyShortcut();
    }
  }
  private setNickName(nickName: string) {
    return localStorage.setItem(NICKNAME_KEY, nickName);
  }
  private getNickName() {
    return localStorage.getItem(NICKNAME_KEY);
  }
  private setAccount(account: string) {
    return localStorage.setItem(ACCOUNT_KEY, account);
  }
  private getAccount() {
    return localStorage.getItem(ACCOUNT_KEY);
  }
  private setMyShortcut(myShortcut: string) {
    return localStorage.setItem(MY_SHORTCUT_KEY, myShortcut);
  }
  private getMyShortcut() {
    return localStorage.getItem(MY_SHORTCUT_KEY);
  }
  remove(key: string) {
    console.log("localStorage remove", key);
    return localStorage.removeItem(key);
  }
  clear() {
    console.log("localStorage clear");
    return localStorage.clear();
  }
}

export default new LocalStorageService();
