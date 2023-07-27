export function isValid(s: string): boolean {
  const stack: string[] = [];
  const openBrackets = new Set(["(", "[", "{"]);
  const bracketPairs = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (openBrackets.has(char)) {
      stack.push(char);
    } else {
      const lastBracket = stack.pop();
      if (lastBracket !== bracketPairs.get(char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
