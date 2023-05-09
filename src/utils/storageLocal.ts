import { ifJsonString } from "./data";

/**
 * localStorage操作
 */
export const storageLocal = {
  getItem,
  setItem,
  removeItem,
  clear
};

function getItem<T>(key: string): T {
  try {
    const value = localStorage.getItem(key);
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
  localStorage.setItem(key, JSON.stringify(value));
}

function removeItem(key: string): void {
  localStorage.removeItem(key);
}

function clear(): void {
  localStorage.clear();
}
