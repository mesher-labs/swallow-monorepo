type LocalStorageKey = "nickName" | "account";

const NICKNAME_KEY = "swallow-nickname";
const ACCOUNT_KEY = "swallow-account";
class LocalStorageService {
  constructor() {}
  set(key: LocalStorageKey, value: string) {
    switch (key) {
      case "nickName":
        return this.setNickName(value);
      case "account":
        return this.setAccount(value);
    }
  }
  get(key: LocalStorageKey) {
    switch (key) {
      case "nickName":
        return this.getNickName();
      case "account":
        return this.getAccount();
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
