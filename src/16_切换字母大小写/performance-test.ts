/**
 * @description 切换字母大小写
 * switchLetterCaseReg: 2.881s
 * switchLetterCaseAscii: 1.403s
 */
import {
  switchLetterCaseReg,
  switchLetterCaseAscii,
} from "./switch-letter-case";

const str =
  "Vm10a05GWXdNSGxXYkdScVVrWndXRmxzWkc5WFJuQllUVmh3YkZKc2JEVmFWV1F3VmxaR1ZVMUVhejA9";

console.time("switchLetterCaseReg");
for (let i = 0; i < 100 * 10000; i++) {
  switchLetterCaseReg(str);
}
console.timeEnd("switchLetterCaseReg");

console.time("switchLetterCaseAscii");
for (let i = 0; i < 100 * 10000; i++) {
  switchLetterCaseAscii(str);
}
console.timeEnd("switchLetterCaseAscii");
