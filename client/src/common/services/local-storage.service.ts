class LocalStorageService {
  constructor() {}
  get(key: string) {
    console.log('localStorage get', key);
    return localStorage.getItem(key);
  }
  set(key: string, value: string) {
    console.log('localStorage set', key, value);
    return localStorage.setItem(key, value);
  }
  remove(key: string) {
    console.log('localStorage remove', key);
    return localStorage.removeItem(key);
  }
  clear() {
    console.log('localStorage clear');
    return localStorage.clear();
  }
}

export default new LocalStorageService();
