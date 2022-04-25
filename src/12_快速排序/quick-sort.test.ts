/**
 * @description 快速排序 test
 */

import { quickSortSlice, quickSortSplice } from "./quick-sort";

describe("快速排序 splice", () => {
  it("正常情况", () => {
    const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    const res = quickSortSplice(arr);
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("空数组", () => {
    const arr = [];
    const res = quickSortSplice(arr);
    expect(res).toEqual([]);
  });

  it("连续数组", () => {
    const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const res = quickSortSplice(arr);
    expect(res).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  });

  it("有负数", () => {
    const arr = [9, 8, 7, 6, 5, 4, -3, 2, 1];
    const res = quickSortSplice(arr);
    expect(res).toEqual([-3, 1, 2, 4, 5, 6, 7, 8, 9]);
  });
});

describe("快速排序 slice", () => {
  it("正常情况", () => {
    const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    const res = quickSortSlice(arr);
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("空数组", () => {
    const arr = [];
    const res = quickSortSlice(arr);
    expect(res).toEqual([]);
  });

  it("连续数组", () => {
    const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const res = quickSortSlice(arr);
    expect(res).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  });
  it("有负数", () => {
    const arr = [9, 8, 7, 6, 5, 4, -3, 2, 1];
    const res = quickSortSlice(arr);
    expect(res).toEqual([-3, 1, 2, 4, 5, 6, 7, 8, 9]);
  });
});
