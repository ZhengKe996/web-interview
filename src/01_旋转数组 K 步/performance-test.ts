/**
 * @description 性能测试
 * 
 * rotate1: 14.453s
 * rotate2: 18.041ms
 */

import { rotate1, rotate2 } from "./array-rotate";

const arr1 = [];
const arr2 = [];
for (let i = 0; i < 100 * 10000; i++) {
  arr1.push(i);
  arr2.push(i);
}
const k = 23333;
console.time("rotate1");
rotate1(arr1, k);
console.timeEnd("rotate1");

console.time("rotate2");
rotate2(arr2, k);
console.timeEnd("rotate2");
