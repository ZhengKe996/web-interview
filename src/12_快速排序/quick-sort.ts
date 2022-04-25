/**
 * @description 快速排序
 */

/**
 * 快速排序(splice)
 * @param arr number arr
 * @returns
 */
export function quickSortSplice(arr: number[]): number[] {
  const length = arr.length;
  if (length === 0) return arr;

  const midIndex = Math.floor(length / 2);
  const midValue = arr.splice(midIndex, 1)[0];

  const left: number[] = [];
  const right: number[] = [];

  // 这里不直接使用 length, 而是使用 arr.length 因为 arr 已经被 splice 修改了
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (n < midValue) {
      // 小于 midValue 则放在 left
      left.push(n);
    } else {
      // 大于 midValue 则放在right
      right.push(n);
    }
  }
  return quickSortSplice(left).concat([midValue], quickSortSplice(right));
}

/**
 * 快速排序(slice)
 * @param arr number arr
 * @returns
 */
export function quickSortSlice(arr: number[]): number[] {
  const length = arr.length;
  if (length === 0) return arr;

  const midIndex = Math.floor(length / 2);
  const midValue = arr.slice(midIndex, midIndex + 1)[0];

  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < length; i++) {
    if (i !== midIndex) {
      const n = arr[i];
      if (n < midValue) {
        // 小于 midValue 则放在 left
        left.push(n);
      } else {
        // 大于 midValue 则放在right
        right.push(n);
      }
    }
  }
  return quickSortSlice(left).concat([midValue], quickSortSlice(right));
}
