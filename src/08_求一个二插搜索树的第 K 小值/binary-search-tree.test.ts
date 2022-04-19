/**
 * @description 二叉搜索树 test
 */

import { getKthValue, ITreeNode } from "./binary-search-tree";

describe("二叉搜索树", () => {
  const tree: ITreeNode = {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 7,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 8,
        left: null,
        right: null,
      },
    },
  };

  it("正常情况", () => {
    const res = getKthValue(tree, 3);
    expect(res).toBe(4);
  });

  it("K 不在正常范围内", () => {
    const res = getKthValue(tree, 20);
    expect(res).toBeNull();
  });
});
