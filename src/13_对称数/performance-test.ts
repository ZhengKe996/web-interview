/**
 * @description 对称数 性能测试
 * findPalindromeNumberArr: 1.793s
 * findPalindromeNumberStr: 246.476ms
 * findPalindromeNumberNum: 128.785ms
 */

import {
  findPalindromeNumberArr,
  findPalindromeNumberNum,
  findPalindromeNumberStr,
} from "./palindrome-number";

console.time("findPalindromeNumberArr");
findPalindromeNumberArr(1000 * 10000);
console.timeEnd("findPalindromeNumberArr");

console.time("findPalindromeNumberStr");
findPalindromeNumberStr(1000 * 10000);
console.timeEnd("findPalindromeNumberStr");

console.time("findPalindromeNumberNum");
findPalindromeNumberNum(1000 * 10000);
console.timeEnd("findPalindromeNumberNum");
