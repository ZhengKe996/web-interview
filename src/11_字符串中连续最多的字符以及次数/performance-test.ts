/**
 * 连续字符 性能测试
 * findContinuousCharCirculation: 171.617ms
 * findContinuousCharDobule: 181.576ms
 */

import {
  findContinuousCharCirculation,
  findContinuousCharDobule,
} from "./continuous-char";

let str = "";

for (let i = 0; i < 100 * 10000; i++) {
  str += i.toString();
}

console.time("findContinuousCharCirculation");
findContinuousCharCirculation(str);
console.timeEnd("findContinuousCharCirculation");
console.time("findContinuousCharDobule");
findContinuousCharDobule(str);
console.timeEnd("findContinuousCharDobule");
