/**
 * @description 对称数
 */

/**
 * 查询 1 - max 的所有对称数 数组反转
 * @param max max
 * @returns
 */
export function findPalindromeNumberArr(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    // 转换为字符串 -> 转化为数组 -> 反转 -> 比较
    const s = i.toString();
    if (s === s.split("").reverse().join("")) {
      res.push(i);
    }
  }

  return res;
}

/**
 * 查询 1 - max 的所有对称数 字符串反转
 * @param max max
 * @returns
 */
export function findPalindromeNumberStr(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    const s = i.toString();
    const length = s.length;

    // 字符串头尾比较
    let flag = true;
    let startIndex = 0; // 字符串开始
    let endIndex = length - 1; // 字符串结束
    while (startIndex < endIndex) {
      if (s[startIndex] !== s[endIndex]) {
        flag = false;
        break;
      } else {
        // 继续比较
        startIndex++;
        endIndex--;
      }
    }

    if (flag) res.push(i);
  }
  return res;
}

/**
 * 查询 1 - max 的所有对称数 翻转数字
 * @param max max
 * @returns
 */
export function findPalindromeNumberNum(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    let n = i;
    let rev = 0; // 存储翻转数

    // 生成翻转数
    while (n > 0) {
      rev = rev * 10 + (n % 10);
      n = Math.floor(n / 10);
    }

    if (i === rev) res.push(i);
  }
  return res;
}

console.info(findPalindromeNumberNum(200));
