/**
 * @description 性能测试
queue with array: 1.827s
queue with list: 19.574ms
 */

import { MyQueue } from "./queue-with-list";

const arr = [];
console.time("queue with array");
for (let i = 0; i < 10 * 10000; i++) {
  arr.push(i); // 入队
}
for (let i = 0; i < 10 * 10000; i++) {
  arr.shift(); // 出队
}
console.timeEnd("queue with array");

const q = new MyQueue();
console.time("queue with list");
for (let i = 0; i < 10 * 10000; i++) {
  q.add(i);
}
for (let i = 0; i < 10 * 10000; i++) {
  q.delete();
}
console.timeEnd("queue with list");


