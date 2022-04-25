/**
 * @description 快速排序 性能测试
 * quickSortSplice: 94.7ms
 * quickSortSlice: 91.344ms
 */

import { quickSortSlice, quickSortSplice } from "./quick-sort";

const arr = [];
for (let i = 0; i < 10 * 10000; i++) {
  arr.push(Math.floor(Math.random() * 1000));
}
console.time("quickSortSlice");
quickSortSlice(arr);
console.timeEnd("quickSortSlice");

console.time("quickSortSplice");
quickSortSplice(arr);
console.timeEnd("quickSortSplice");
