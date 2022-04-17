/**
 * 一个字符串 s 可能包含 {} () [] 三种括号
 *
 * 判断 s 是否是括号匹配的
 *
 * 如 (a{b}c) 匹配, 而 {a(b 或 {a(b}c) 就不匹配
 */

/**
 * 判断左右括号是否匹配;
 * @param left : 左括号
 * @param right : 右括号
 * @returns
 */
function isMatch(left: string, right: string): boolean {
  if (left === "{" && right === "}") return true;
  if (left === "(" && right === ")") return true;
  if (left === "[" && right === "]") return true;
  return false;
}

export function matchBracket(str: string): boolean {
  const length = str.length;
  if (length === 0) return true;

  const stack = [];
  const leftSymbols = "{[(";
  const rightSymbols = "}])";

  for (let i = 0; i < length; i++) {
    const s = str[i];

    if (leftSymbols.includes(s)) {
      stack.push(s); // 左括号压栈
    } else if (rightSymbols.includes(s)) {
      // 右括号, 判断栈顶(是否出栈)
      const top = stack[stack.length - 1];
      if (isMatch(top, s)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
