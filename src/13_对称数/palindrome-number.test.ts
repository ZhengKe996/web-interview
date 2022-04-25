/**
 * @description 对称数 test
 */

import {
  findPalindromeNumberArr,
  findPalindromeNumberNum,
  findPalindromeNumberStr,
} from "./palindrome-number";

describe("反转数组", () => {
  it("正常情况", () => {
    const res = findPalindromeNumberArr(200);
    expect(res).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111,
      121, 131, 141, 151, 161, 171, 181, 191,
    ]);
  });
  it("max 小于等于 0", () => {
    const res = findPalindromeNumberArr(0);
    expect(res).toEqual([]);
  });
});

describe("反转字符串", () => {
  it("正常情况", () => {
    const res = findPalindromeNumberStr(200);
    expect(res).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111,
      121, 131, 141, 151, 161, 171, 181, 191,
    ]);
  });
  it("max 小于等于 0", () => {
    const res = findPalindromeNumberStr(0);
    expect(res).toEqual([]);
  });
});

describe("翻转数字", () => {
  it("正常情况", () => {
    const res = findPalindromeNumberNum(200);
    expect(res).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111,
      121, 131, 141, 151, 161, 171, 181, 191,
    ]);
  });
  it("max 小于等于 0", () => {
    const res = findPalindromeNumberNum(0);
    expect(res).toEqual([]);
  });
});
