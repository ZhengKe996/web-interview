/**
 * @description Array rotate
 *
 * 输入一个数组 [1, 2, 3, 4, 5, 6, 7]
 *
 * k = 3, 即旋转 3 步
 *
 * 输出 [5, 6, 7, 1, 2, 3, 4]
 */

/**
 * 旋转数组 K 步 使用pop和unshift
 * O(n^2)
 * @param arr arr
 * @param k k
 * @returns arr
 */
export function rotate1(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length == 0) return arr;
  const step = Math.abs(k % length);

  for (let i = 0; i < step; i++) {
    const n = arr.pop();
    if (n != null) {
      arr.unshift(n); // 数组是一个有序结构, unshift 操作非常慢
    }
  }
  return arr;
}

/**
 * 旋转数组 K 步 使用concat
 * @param arr arr
 * @param k k
 * @returns arr
 */
export function rotate2(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length == 0) return arr;
  const step = Math.abs(k % length);

  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, length - step);
  const part3 = part1.concat(part2);
  return part3;
}
