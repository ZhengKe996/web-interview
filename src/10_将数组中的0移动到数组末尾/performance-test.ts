/**
 *  @description 移动 0 到数组末尾 性能测试
 * moveZeroCirculation: 15.961s
 * moveZeroDobule: 5.177ms
 */
import { moveZeroCirculation, moveZeroDobule } from "./moveZero";
const arr1 = [];
const arr2 = [];
for (let i = 0; i < 80 * 10000; i++) {
  if (i % 10 === 0) {
    arr1.push(0);
    arr2.push(0);
  } else {
    arr1.push(1);
    arr2.push(1);
  }
}
console.time("moveZeroCirculation");
moveZeroCirculation(arr1);
console.timeEnd("moveZeroCirculation");

console.time("moveZeroDobule");
moveZeroDobule(arr2);
console.timeEnd("moveZeroDobule");
