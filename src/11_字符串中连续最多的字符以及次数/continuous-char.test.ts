/**
 * @description 连续字符 test
 */

import {
  findContinuousCharCirculation,
  findContinuousCharDobule,
} from "./continuous-char";

describe("连续字符 循环", () => {
  it("正常情况", () => {
    const str = "abbcccddeeee1234";
    expect(findContinuousCharCirculation(str)).toEqual({
      char: "e",
      length: 4,
    });
  });

  it("空字符串", () => {
    const str = "";
    expect(findContinuousCharCirculation(str)).toEqual({
      char: "",
      length: 0,
    });
  });
  it("没有连续字符串", () => {
    const str = "abcdefghijk";
    expect(findContinuousCharCirculation(str)).toEqual({
      char: "a",
      length: 1,
    });
  });
  it("全是连续字符串", () => {
    const str = "eeeeeeeeeeeee";
    expect(findContinuousCharCirculation(str)).toEqual({
      char: "e",
      length: 13,
    });
  });
});

describe("连续字符 双指针", () => {
  it("正常情况", () => {
    const str = "abbcccddeeee1234";
    expect(findContinuousCharDobule(str)).toEqual({
      char: "e",
      length: 4,
    });
  });

  it("空字符串", () => {
    const str = "";
    expect(findContinuousCharDobule(str)).toEqual({
      char: "",
      length: 0,
    });
  });
  it("没有连续字符串", () => {
    const str = "abcdefghijk";
    expect(findContinuousCharDobule(str)).toEqual({
      char: "a",
      length: 1,
    });
  });
  it("全是连续字符串", () => {
    const str = "eeeeeeeeeeeee";
    expect(findContinuousCharDobule(str)).toEqual({
      char: "e",
      length: 13,
    });
  });
});
