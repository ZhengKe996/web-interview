/**
 * @description 移动 0 到数组末尾
 * 如输入[1,0,3,0,11,0] ， 输出 [1,3,11,0,0,0]
 * 只移动 0 其他顺序不变
 * 必须在原数组进行操作
 */

/**
 * 移动 0 到数组的末尾(嵌套循环)
 * 时间复杂度 O(n^2）
 * @param arr number arr
 */
export function moveZeroCirculation(arr: number[]): void {
  const length = arr.length;
  if (length === 0) return;

  let zeroLength = 0;
  for (let i = 0; i < length - zeroLength; i++) {
    if (arr[i] === 0) {
      arr.push(0);
      arr.splice(i, 1); // 本身时间复杂度 O(n)
      i--; // 数组截取了一个元素, 1. 要递减, 否则连续 0 时会有错误
      zeroLength++; // 累加 0 的长度
    }
  }
}

/**
 * 移动 0 到数组的末尾(双指针)
 * @param arr number arr
 */
export function moveZeroDobule(arr: number[]): void {
  const length = arr.length;
  if (length === 0) return;

  let i;
  let j = -1; // 指向第一个 0

  for (i = 0; i < length; i++) {
    if (arr[i] === 0) {
      // 第一个 0
      if (j < 0) j = i;
    }

    if (arr[i] !== 0 && j >= 0) {
      // 交换
      const n = arr[i];
      arr[i] = arr[j];
      arr[j] = n;

      j++;
    }
  }
}
