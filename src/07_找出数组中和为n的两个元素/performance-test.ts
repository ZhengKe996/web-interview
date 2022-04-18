/**
 * @description 找出数组中和为 n 的两个元素 性能测试
 * findTowNumberCycle: 345.822ms
 * findTowNumberDoublePointer: 275.205ms
 */

import { findTowNumberCycle, findTowNumberDoublePointer } from "./two-numbers-sum";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.time("findTowNumberCycle");
for (let i = 0; i < 1000 * 10000; i++) {
  findTowNumberCycle(arr, 15);
}
console.timeEnd("findTowNumberCycle");

console.time("findTowNumberDoublePointer");
for (let i = 0; i < 1000 * 10000; i++) {
  findTowNumberDoublePointer(arr, 15);
}
console.timeEnd("findTowNumberDoublePointer");
