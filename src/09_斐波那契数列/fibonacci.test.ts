/**
 * @description 斐波那契数列 test
 */
import { fibonacciCirculation } from "./fibonacci";
describe("斐波那契", () => {
  it("0 和 1", () => {
    expect(fibonacciCirculation(0)).toBe(0);
    expect(fibonacciCirculation(1)).toBe(1);
  });
  it("正常情况", () => {
    expect(fibonacciCirculation(2)).toBe(1);
    expect(fibonacciCirculation(3)).toBe(2);
    expect(fibonacciCirculation(6)).toBe(8);
  });
  it("n 小于 0", () => {
    expect(fibonacciCirculation(-1)).toBe(0);
  });
});
