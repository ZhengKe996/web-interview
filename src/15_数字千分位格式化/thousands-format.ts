/**
 * @description 千分位格式化
 */

/**
 * 千分位格式化(使用数组)
 * @param n number
 */
export function formatArr(n: number): string {
  n = Math.floor(n);
  const s = n.toString();
  const arr = s.split("").reverse();

  return arr.reduce((prev, val, index) => {
    if (index % 3 === 0) {
      if (prev) {
        return val + "," + prev;
      } else {
        return val;
      }
    } else {
      return val + prev;
    }
  }, "");
}

/**
 * 千分位格式化(使用字符串)
 * @param n number
 */
export function formatStr(n: number): string {
  n = Math.floor(n);

  let res = "";
  const s = n.toString();
  const length = s.length;

  for (let i = length - 1; i >= 0; i--) {
    const j = length - i;
    if (j % 3 === 0) {
      if (i === 0) {
        res = s[i] + res;
      } else {
        res = "," + s[i] + res;
      }
    } else {
      res = s[i] + res;
    }
  }
  return res;
}
