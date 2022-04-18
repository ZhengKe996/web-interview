/**
 * @description 找出数组中和为 n 的两个元素 test
 */
import { findTowNumberCycle, findTowNumberDoublePointer } from "./two-numbers-sum";

describe("两数之和 嵌套循环", () => {
  it("正常情况", () => {
    const arr = [1, 2, 4, 7, 11, 15];
    const res = findTowNumberCycle(arr, 15);
    expect(res).toEqual([4, 11]);
  });

  it("空数组", () => {
    const res = findTowNumberCycle([], 15);
    expect(res).toEqual([]);
  });

  it("找不到结果", () => {
    const arr = [1, 2, 4, 7, 11, 15];
    const n = 100;
    const res = findTowNumberCycle(arr, n);
    expect(res).toEqual([]);
  });
});

describe("两数之和 双指针", () => {
  it("正常情况", () => {
    const arr = [1, 2, 4, 7, 11, 15];
    const res = findTowNumberDoublePointer(arr, 15);
    expect(res).toEqual([4, 11]);
  });

  it("空数组", () => {
    const res = findTowNumberDoublePointer([], 15);
    expect(res).toEqual([]);
  });

  it("找不到结果", () => {
    const arr = [1, 2, 4, 7, 11, 15];
    const n = 100;
    const res = findTowNumberDoublePointer(arr, n);
    expect(res).toEqual([]);
  });
});
