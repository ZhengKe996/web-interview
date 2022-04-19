/**
 * @description 二叉搜索树
 */

export interface ITreeNode {
  value: number;
  left: ITreeNode | null;
  right: ITreeNode | null;
}
const arr: number[] = [];
/**
 * 二叉树前序遍历
 *
 * @param node tree node
 * @returns
 */
export function preOrderTraverse(node: ITreeNode | null) {
  if (node == null) return;
  arr.push(node.value);
  preOrderTraverse(node.left);
  preOrderTraverse(node.right);
}

/**
 * 二叉树中序遍历
 *
 * @param node tree node
 * @returns
 */
export function inOrderTraverse(node: ITreeNode | null) {
  if (node == null) return;
  inOrderTraverse(node.left);
  arr.push(node.value);
  inOrderTraverse(node.right);
}

/**
 * 二叉树后序遍历
 *
 * @param node tree node
 * @returns
 */
export function postOrderTraverse(node: ITreeNode | null) {
  if (node == null) return;
  postOrderTraverse(node.left);
  postOrderTraverse(node.right);
  arr.push(node.value);
}

/**
 * 寻找 BST 里的 第 K 小值
 *
 * @param node tree node
 * @param k 第几个值
 * @returns
 */
export function getKthValue(node: ITreeNode, k: number): number | null {
  inOrderTraverse(node);
  return arr[k - 1] || null;
}


