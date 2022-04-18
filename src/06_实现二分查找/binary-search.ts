/**
 * @description 二分查找
 */

/**
 * 二分查找法(循环)
 * @param arr number arr
 * @param target target
 * @returns
 */
export function binarySearchCycle(arr: number[], target: number): number {
  const length = arr.length;
  if (length === 0) return -1;
  let startIndex = 0; // 开始位置
  let endIndex = length - 1;

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const midValue = arr[midIndex];

    if (target < midValue) {
      // 目标值较小, 则继续往左边查找
      endIndex = midIndex - 1;
    } else if (target > midValue) {
      // 目标值较大, 则继续往右边查找
      startIndex = midIndex + 1;
    } else {
      // 相等 返回
      return midIndex;
    }
  }
  return -1;
}

/**
 * 二分查找(递归)
 * @param arr arr
 * @param target target
 * @param startIndex start index
 * @param endIndex end index
 */
export function binarySearchRecursive(arr: number[], target: number, startIndex?: number, endIndex?: number): number {
  const length = arr.length;
  if (length === 0) return -1;

  // 开始和结束的范围
  if (startIndex == null) startIndex = 0;
  if (endIndex == null) endIndex = length - 1;

  // 如果 startIndex 与 endIndex 相遇
  if (startIndex > endIndex) return -1;

  // 中间位置
  const midIndex = Math.floor((startIndex + endIndex) / 2);
  const midValue = arr[midIndex];

  if (target < midValue) {
    // 目标值较小, 则继续往左边查找
    return binarySearchRecursive(arr, target, startIndex, midIndex - 1);
  } else if (target > midValue) {
    // 目标值较大, 则继续往右边查找
    return binarySearchRecursive(arr, target, midIndex + 1, endIndex);
  } else {
    // 相等 返回
    return midIndex;
  }
}
