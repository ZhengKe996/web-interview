/**
 * @description 移动 0 到数组末尾 test
 */

import { moveZeroCirculation, moveZeroDobule } from "./moveZero";

describe("移动0到数组末尾 嵌套循环", () => {
  it("正常情况", () => {
    const arr = [1, 0, 3, 0, 11, 0];
    moveZeroCirculation(arr);
    expect(arr).toEqual([1, 3, 11, 0, 0, 0]);
  });
  it("没有 0", () => {});
  const arr = [1, 3, 11];
  moveZeroCirculation(arr);
  expect(arr).toEqual([1, 3, 11]);
  it("全是 0", () => {
    const arr = [0, 0, 0, 0, 0, 0];
    moveZeroCirculation(arr);
    expect(arr).toEqual([0, 0, 0, 0, 0, 0]);
  });
});

describe("移动0到数组末尾 双指针", () => {
  it("正常情况", () => {
    const arr = [1, 0, 3, 0, 11, 0];
    moveZeroDobule(arr);
    expect(arr).toEqual([1, 3, 11, 0, 0, 0]);
  });
  it("没有 0", () => {});
  const arr = [1, 3, 11];
  moveZeroDobule(arr);
  expect(arr).toEqual([1, 3, 11]);
  it("全是 0", () => {
    const arr = [0, 0, 0, 0, 0, 0];
    moveZeroDobule(arr);
    expect(arr).toEqual([0, 0, 0, 0, 0, 0]);
  });
});
