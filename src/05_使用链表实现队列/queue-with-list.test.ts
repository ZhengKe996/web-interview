/**
 * @description 链表实现队列 test
 */

import { MyQueue } from "./queue-with-list";

describe("链表实现队列", () => {
  it("add and length", () => {
    const q = new MyQueue();
    expect(q.length).toBe(0);

    q.add(10);
    q.add(20);
    q.add(30);
    expect(q.length).toBe(3);
  });
  it("delete", () => {
    const q = new MyQueue();
    expect(q.delete()).toBeNull();

    q.add(10);
    q.add(20);
    q.add(30);
    expect(q.delete()).toBe(10);
    expect(q.delete()).toBe(20);
    expect(q.delete()).toBe(30);
    expect(q.delete()).toBeNull();
  });
});
