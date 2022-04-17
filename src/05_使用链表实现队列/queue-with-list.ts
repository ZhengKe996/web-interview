/**
 * @description 使用链表实现队列
 */

export interface IListNode {
  value: number;
  next: IListNode | null;
}

export class MyQueue {
  private head: IListNode | null = null;
  private tail: IListNode | null = null;
  private len: number = 0;
  /**
   * 入队列, 在tail位置
   * @param n number
   */
  add(n: number) {
    const newNode: IListNode = {
      value: n,
      next: null,
    };

    // 处理 head
    if (this.head == null) {
      this.head = newNode;
    }

    // 处理 tail
    const tailNode = this.tail;
    if (tailNode) {
      tailNode.next = newNode;
    }
    this.tail = newNode;

    this.len++;
  }

  /**
   * 出队列, 在head位置
   */
  delete(): number | null {
    const headNode = this.head;
    if (headNode == null) return null;
    if (this.len <= 0) return null;

    // 取值
    const value = headNode.value;

    // 处理 head
    this.head = headNode.next;

    // 记录长度
    this.len--;
    return value;
  }
  /**
   * length 要单独存储, 不能遍历链表获取(时间复杂度太高)
   */
  get length(): number {
    return this.len;
  }
}




