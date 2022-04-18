/**
 * @description 二分查找 test
 */

import { binarySearchCycle, binarySearchRecursive } from "./binary-search";

describe("二分查找(循环)", () => {
  it("正常情况", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 7;
    expect(binarySearchCycle(arr, target)).toBe(6);
  });
  it("空数组", () => {
    const target = 7;
    expect(binarySearchCycle([], target)).toBe(-1);
  });
  it("找不到 target", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 400;
    expect(binarySearchCycle(arr, target)).toBe(-1);
  });
});

describe("二分查找(递归)", () => {
  it("正常情况", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 7;
    expect(binarySearchRecursive(arr, target)).toBe(6);
  });
  it("空数组", () => {
    const target = 7;
    expect(binarySearchRecursive([], target)).toBe(-1);
  });
  it("找不到 target", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 400;
    expect(binarySearchRecursive(arr, target)).toBe(-1);
  });
});
