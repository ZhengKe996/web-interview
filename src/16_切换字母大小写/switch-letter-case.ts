/**
 * @description 切换字母大小写
 *
 * 输入一个字符串, 切换其中字母的大小写
 * 如: 输入字符串 12aBc34 输出字符串 12AbC34
 */

/**
 * 切换字母大小写(正则)
 * @param s str
 *
 */
export function switchLetterCaseReg(s: string): string {
  let res = "";

  const length = s.length;
  if (length === 0) return res;

  const reg1 = /[a-z]/;
  const reg2 = /[A-Z]/;

  for (let i = 0; i < length; i++) {
    const c = s[i];
    if (reg1.test(c)) {
      res += c.toUpperCase();
    } else if (reg2.test(c)) {
      res += c.toLowerCase();
    } else {
      res += c;
    }
  }
  return res;
}

/**
 * 切换字母大小写(ascii)
 * @param s str
 *
 */
export function switchLetterCaseAscii(s: string): string {
  let res = "";

  const length = s.length;
  if (length === 0) return res;

  for (let i = 0; i < length; i++) {
    const c = s[i];
    const code = c.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      res += c.toLowerCase();
    } else if (code >= 97 && code <= 122) {
      res += c.toUpperCase();
    } else {
      res += c;
    }
  }

  return res;
}
