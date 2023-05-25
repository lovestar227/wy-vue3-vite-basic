export function useNumber() {
  /**
   * 生成指定范围内的随机数
   * @param min 最小数字
   * @param max 最大数字
   * @returns {number}
   */
  const random = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  return {
    random
  };
}
