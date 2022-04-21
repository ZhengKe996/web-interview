/**
 * @description 斐波那契数列 性能测试
 * fibonacciRecursion: 1.417s
 * fibonacciCirculation: 0.142ms
 */

import { fibonacciCirculation, fibonacciRecursion } from "./fibonacci";

console.time("fibonacciRecursion");
console.log(fibonacciRecursion(40));
console.timeEnd("fibonacciRecursion");

console.time("fibonacciCirculation");
console.log(fibonacciCirculation(40));
console.timeEnd("fibonacciCirculation");
