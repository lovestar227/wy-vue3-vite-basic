/**
 * 有关设备、浏览器等Hook
 */
export function useSystemHook() {
  /**
   * 判断是否为PC端
   * @returns {boolean}
   */
  function isPC(): boolean {
    let isPC = true;
    const userAgentInfo = navigator.userAgent;
    //移动端操作系统标识
    const Agents = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod"
    ];
    //判断是否为移动端操作系统
    for (let i = 0; i < Agents.length; i++) {
      if (userAgentInfo.indexOf(Agents[i]) > 0) {
        isPC = false;
        break;
      }
    }
    return isPC;
  }
  return {
    isPC
  };
}
