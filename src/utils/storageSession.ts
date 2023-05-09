import { ifJsonString } from "./data";

/**
 * storageSession操作
 */
export const storageSession = {
  getItem,
  setItem,
  removeItem,
  clear
};

function getItem<T>(key: string): T {
  try {
    const value = sessionStorage.getItem(key);
    if (value === null || value === undefined || value === "") {
      return null;
    }
    if (ifJsonString(value)) return JSON.parse(value);
    else return value as T;
  } catch (err) {
    return null;
  }
}

function setItem<T>(key: string, value: T): void {
  sessionStorage.setItem(key, JSON.stringify(value));
}

function removeItem(key: string): void {
  sessionStorage.removeItem(key);
}

function clear(): void {
  sessionStorage.clear();
}
