/**
 * @description 找出数组中和为 n 的两个元素
 *
 * 有个递增数组[1,2,4,7,11,15] 和 一个 n = 15
 *
 * 数组中有两个数和是n, 即 4 + 11 = 15
 */

/**
 * 寻找 和为 n 的两个数 (嵌套循环)
 * @param arr
 * @param n
 * @returns
 */
export function findTowNumberCycle(arr: number[], n: number): number[] {
  const res: number[] = [];

  const length = arr.length;
  if (length === 0) return res;

  for (let i = 0; i < length - 1; i++) {
    const n1 = arr[i];
    let flag = false;

    for (let j = i + 1; j < length; j++) {
      const n2 = arr[j];
      if (n1 + n2 === n) {
        res.push(n1);
        res.push(n2);
        flag = true;
        break;
      }
    }

    if (flag) break;
  }
  return res;
}

/**
 * 寻找 和为 n 的两个数 (双指针)
 * @param arr 
 * @param n 
 * @returns 
 */
export function findTowNumberDoublePointer(arr: number[], n: number): number[] {
  const res: number[] = [];
  const length = arr.length;
  if (length === 0) return res;

  let i = 0; // 头
  let j = length - 1; // 尾

  while (i < j) {
    const n1 = arr[i];
    const n2 = arr[j];
    const sum = n1 + n2;

    if (sum > n) {
      // sum 大于 n 则 j 要向前移动
      j--;
    } else if (sum < n) {
      // sum 小于 n 则 i 要向前移动
      i++;
    } else {
      // 祥腾
      res.push(n1);
      res.push(n2);
      break;
    }
  }
  return res;
}


