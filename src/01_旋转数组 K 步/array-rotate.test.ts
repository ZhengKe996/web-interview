/**
 * @description Array rotate test
 */
import { rotate1, rotate2 } from "./array-rotate";

describe("数组旋转 使用pop和unshift", () => {
  it("正常情况", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;

    const res = rotate1(arr, k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("数组为空", () => {
    const arr = [];
    const k = 3;

    const res = rotate1(arr, k);
    expect(res).toEqual([]);
  });

  it("K是负值", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = -3;

    const res = rotate1(arr, k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("K 是 0", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 0;

    const res = rotate1(arr, k);
    expect(res).toEqual(arr);
  });

  it("K不是数字", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = "abc";
    // @ts-ignore
    const res = rotate1(arr, k);
    expect(res).toEqual(arr);
  });
});

describe("数组旋转 使用concat", () => {
  it("正常情况", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;

    const res = rotate2(arr, k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("数组为空", () => {
    const arr = [];
    const k = 3;

    const res = rotate2(arr, k);
    expect(res).toEqual([]);
  });

  it("K是负值", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = -3;

    const res = rotate2(arr, k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("K 是 0", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 0;

    const res = rotate2(arr, k);
    expect(res).toEqual(arr);
  });

  it("K不是数字", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = "abc";
    // @ts-ignore
    const res = rotate2(arr, k);
    expect(res).toEqual(arr);
  });
});
