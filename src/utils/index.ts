export { DataFunc } from "./data";
export { storageLocal } from "./storageLocal";
export { storageSession } from "./storageSession";

/* DOM */

//dom判断是否存在class
export function hasClass(dom: HTMLDivElement, _class: string) {
  if (dom.className.indexOf(_class) > -1) {
    return true;
  }
  return false;
}
//dom追加class
export function addClass(dom: HTMLDivElement, _class: string) {
  dom.classList.add(_class);
}
//dom移除class
export function removeClass(dom: HTMLDivElement, _class: string) {
  dom.classList.remove(_class);
}
