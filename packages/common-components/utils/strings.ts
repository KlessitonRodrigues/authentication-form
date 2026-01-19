export const formatStr = (str: string, template: string) => {
  const newStr = Array.from(template);
  for (const char of str) {
    const replace = newStr.indexOf("x");
    if (replace < 0) return str;
    newStr[replace] = char;
  }
  return newStr.join("");
};
