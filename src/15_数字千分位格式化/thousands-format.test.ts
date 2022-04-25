/**
 * @description 千分位格式化 test
 */

import { formatArr, formatStr } from "./thousands-format";

describe("千分位格式化 数组", () => {
  it("正常情况", () => {
    const res = formatArr(1000000);
    expect(res).toBe("1,000,000");
  });

  it("小于 1000", () => {
    const res = formatArr(0);
    expect(res).toBe("0");
  });
});

describe("千分位格式化 字符串", () => {
  it("正常情况", () => {
    const res = formatStr(1000000);
    expect(res).toBe("1,000,000");
  });

  it("小于 1000", () => {
    const res = formatStr(0);
    expect(res).toBe("0");
  });
});
