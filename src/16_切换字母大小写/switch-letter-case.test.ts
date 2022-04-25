/**
 * @description 切换字母大小写 test
 */

import {
  switchLetterCaseReg,
  switchLetterCaseAscii,
} from "./switch-letter-case";

describe("切换字母大小写 正则", () => {
  it("正常情况", () => {
    const str = "12aBc34";
    const res = switchLetterCaseReg(str);
    expect(res).toBe("12AbC34");
  });
  it("字符串为空", () => {
    const str = "";
    const res = switchLetterCaseReg(str);
    expect(res).toBe("");
  });
  it("非字母", () => {
    const str = "123456";
    const res = switchLetterCaseReg(str);
    expect(res).toBe("123456");
  });
});

describe("切换字母大小写 ASCII", () => {
  it("正常情况", () => {
    const str = "12aBc34";
    const res = switchLetterCaseAscii(str);
    expect(res).toBe("12AbC34");
  });
  it("字符串为空", () => {
    const str = "";
    const res = switchLetterCaseAscii(str);
    expect(res).toBe("");
  });
  it("非字母", () => {
    const str = "123456";
    const res = switchLetterCaseAscii(str);
    expect(res).toBe("123456");
  });
});
